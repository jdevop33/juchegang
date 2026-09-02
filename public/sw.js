// Service worker for juche.org
//
// Cache strategy, by request type:
//   navigations (HTML)  -> network-first, cache as fallback, then /offline.html
//   /_next/static/*     -> cache-first (content-hashed; the URL changes every deploy)
//   other same-origin   -> stale-while-revalidate
//   POST/PUT/..., /api/, cross-origin -> not handled, passed straight to the network
//
// Two rules keep this from stranding visitors on an old build:
//   1. Precache with individual add() calls. addAll() is atomic, so one missing
//      asset fails the whole install, the worker never activates, and whatever
//      worker is already installed keeps serving its cache forever.
//   2. Never serve HTML cache-first. A cached document pins visitors to a past
//      build's asset hashes and image srcset widths, which 400 once the config
//      behind them moves on.

const VERSION = 'v9';
const PRECACHE = `juche-precache-${VERSION}`;
const RUNTIME = `juche-runtime-${VERSION}`;

// Every entry verified present in /public. Keep it that way.
const PRECACHE_URLS = [
  '/offline.html',
  '/manifest.json',
  '/faviconjuche.png',
  '/logo-icon-gang.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then((cache) =>
        // add() per URL, each with its own catch: a missing asset degrades the
        // precache instead of failing the install.
        Promise.all(PRECACHE_URLS.map((url) => cache.add(url).catch(() => {})))
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(
          names
            .filter((name) => name !== PRECACHE && name !== RUNTIME)
            .map((name) => caches.delete(name))
        )
      )
      .then(() => self.clients.claim())
  );
});

function cachePut(request, response) {
  // Opaque and error responses are not worth storing.
  if (!response || !response.ok || response.type !== 'basic') return response;
  const copy = response.clone();
  caches.open(RUNTIME).then((cache) => cache.put(request, copy));
  return response;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // cache.put() throws on a non-GET request, so leave those alone entirely.
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Let the browser handle third parties and API routes directly.
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/')) return;

  // HTML: always ask the network first so a deploy takes effect immediately.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => cachePut(request, response))
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match('/offline.html'))
        )
    );
    return;
  }

  // Content-hashed build output: safe to serve from cache indefinitely.
  if (url.pathname.startsWith('/_next/static/')) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached || fetch(request).then((response) => cachePut(request, response))
      )
    );
    return;
  }

  // Everything else same-origin: serve the cached copy, refresh it in background.
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => cachePut(request, response))
        .catch(() => cached);
      return cached || network;
    })
  );
});
