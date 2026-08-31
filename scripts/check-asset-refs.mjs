#!/usr/bin/env node
/**
 * Fails when code names a public asset that does not exist.
 *
 * Why this exists: on 2026-06-22 a chore commit deleted
 * public/images/hero-strait.png. Nothing referenced it except a string
 * inside public/sw.js, and no tool in the stack reads that string. The
 * service worker precached it with an atomic addAll(), so the install
 * rejected on every page load, the previous worker stayed in control, and
 * the site served a months-old cached build to returning visitors until
 * 2026-08-31. Typecheck passed the whole time. Nothing was ever red.
 *
 * The defect was not the deletion. It was that a dependency existed
 * between a JavaScript string and a file on disk, and nothing in the
 * toolchain could see it. This script is that missing pair of eyes.
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const PUBLIC = join(ROOT, "public");
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "out", "dist", "coverage"]);
const CODE_EXT = /\.(ts|tsx|js|jsx|mjs|cjs)$/;

/** Paths served by the framework rather than by a file in public/. */
function generatedRoutes() {
  const routes = new Set();
  const app = join(ROOT, "app");
  if (!existsSync(app)) return routes;
  // app/sitemap.ts -> /sitemap.xml, app/robots.ts -> /robots.txt
  for (const [file, route] of [["sitemap", "/sitemap.xml"], ["robots", "/robots.txt"], ["manifest", "/manifest.webmanifest"]]) {
    for (const ext of ["ts", "tsx", "js"]) {
      if (existsSync(join(app, `${file}.${ext}`))) routes.add(route);
    }
  }
  // app/<name>/route.ts -> /<name>  (covers app/rss.xml/route.ts -> /rss.xml)
  const walk = (dir, prefix = "") => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (!e.isDirectory() || SKIP_DIRS.has(e.name)) continue;
      const sub = join(dir, e.name);
      const seg = e.name.startsWith("(") ? prefix : `${prefix}/${e.name}`;
      if (readdirSync(sub).some((f) => /^route\.(ts|tsx|js)$/.test(f))) routes.add(seg);
      walk(sub, seg);
    }
  };
  walk(app);
  // app/icon.png, app/apple-icon.png and friends are served at their own name
  for (const f of readdirSync(app)) {
    if (/^(icon|apple-icon|opengraph-image|twitter-image)\d*\.(png|jpe?g|svg|ico)$/.test(f)) routes.add(`/${f}`);
  }
  return routes;
}

const collect = (dir, out = []) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(e.name)) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) collect(p, out);
    else if (CODE_EXT.test(e.name)) out.push(p);
  }
  return out;
};

const ASSET = /["'`](\/[A-Za-z0-9._\-/%]*\.(?:png|jpe?g|svg|webp|avif|gif|ico|mp4|webm|mp3|json|txt|xml|html|woff2?|ttf))["'`]/g;

const generated = generatedRoutes();
const problems = [];
let refCount = 0;

for (const file of [...collect(join(ROOT, "app")), ...collect(join(ROOT, "components")),
                    ...(existsSync(join(ROOT, "lib")) ? collect(join(ROOT, "lib")) : []),
                    ...(existsSync(PUBLIC) ? collect(PUBLIC) : [])]) {
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    for (const m of line.matchAll(ASSET)) {
      const ref = m[1];
      if (ref.startsWith("/_next") || ref.startsWith("//")) continue;
      refCount++;
      if (generated.has(ref)) continue;
      if (existsSync(join(PUBLIC, ref.replace(/^\//, "")))) continue;
      problems.push({ ref, file: relative(ROOT, file), line: i + 1 });
    }
  });
}

if (problems.length === 0) {
  console.log(`asset-refs: OK, ${refCount} references all resolve`);
  process.exit(0);
}
console.error(`asset-refs: ${problems.length} reference(s) name a file that does not exist\n`);
for (const p of problems) console.error(`  ${p.file}:${p.line}  ->  ${p.ref}`);
console.error("\nEither add the file under public/, or stop referencing it.");
process.exit(1);
