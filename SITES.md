# What's deployed where

The single map of the JucheGang / juche.org web properties: which repository builds which live site, and which repositories are dead. Every repository README in this family links here. **Update this file whenever a site moves.**

Verified 28 October 2026 by checking live DNS, HTTP responses and page content against each repository's code.

## Live sites

| Site | Source repository | Vercel projects that build it (team) | Stack | What it is |
|------|-------------------|-----------------------|-------|------------|
| [juchegang.ca](https://juchegang.ca) and www | [jessejamesvictoria/juchegang0f8](https://github.com/jessejamesvictoria/juchegang0f8) | `juchegang.ca` (jesse-james-projects) | Next.js 15 | Personal journal: long-form essays, The Current, numerology explorer |
| [juche.org](https://juche.org) and www | [jdevop33/juchegang](https://github.com/jdevop33/juchegang) (this repo) | `juchegang` (jesse-james-projects) **and** `of8wins` (panda3) | Next.js 15 | The 48 Laws of Excellence, briefings, peace and reunification content. Also served at sovereign-alpha.vercel.app |
| [kim.juche.org](https://kim.juche.org) | [jessejamesvictoria/juchegang-astro](https://github.com/jessejamesvictoria/juchegang-astro) | `juchegang-astro` (jesse-james-projects) **and** `juchegang-astro` (koreawins) | Astro | "The die is cast" strategic-intelligence hub: The Current, Arithmetic, Report 7394-K, Support |
| [tiger.juche.org](https://tiger.juche.org) | [cherishwins/v0-korean-tiger-unity-campaign](https://github.com/cherishwins/v0-korean-tiger-unity-campaign) | `v0-korean-tiger-unity-campaign` (Jpanda) | Next.js (v0) | The Tiger Reunites campaign |

All four deploy `main` to production on every merge. The projects are spread over five Vercel teams. **juche.org and kim.juche.org are each built by two Vercel projects**, so every push builds twice. Only one of each pair holds the custom domain; the tiger project is the only one confirmed so far. Open each project's Domains tab, keep the one that holds the domain, and disconnect the Git link on the other.

### Accounts

| | juchegang.ca | juche.org (and subdomains) |
|---|---|---|
| Registrar | GoDaddy Domains Canada | GoDaddy.com |
| Expires | 13 October 2027 | **11 December 2026** |
| DNS | Cloudflare, records set to DNS only | Cloudflare, records set to DNS only |

Keep the Cloudflare records **grey-clouded (DNS only)**. Vercel issues the TLS certificates itself, and proxying through Cloudflare on top of Vercel causes redirect loops unless SSL is set to Full (strict).

## Not deployed

Nothing serves these. They are kept only as history.

| Repository | What it was | Last real commit | Recommendation |
|------------|-------------|------------------|----------------|
| [cherishwins/juchegang-astro](https://github.com/cherishwins/juchegang-astro) | Fork of jessejamesvictoria/juchegang-astro, stopped at its first few commits | May 2026 | Archive. The live code is in the jessejamesvictoria repo |
| [jdevop33/juche](https://github.com/jdevop33/juche) | Next.js starter, "Juche - One Korea, One Spirit" | April 2025 | Archive |
| [jdevop33/juche-web](https://github.com/jdevop33/juche-web) | Next.js starter, "Juche Empowerment" | December 2024 | Archive |
| [jdevop33/juche33](https://github.com/jdevop33/juche33) | "The Unbroken Path", an alternate-history narrative | April 2025 | Archive, or fold the story into juche.org |
| Vercel project `juchegang` (Jpanda team) | Its only deployment failed in December 2025. No custom domain | December 2025 | Delete the Vercel project |

## Naming

Repository names do not match their sites today, which is why this file exists. Renaming each live repository to its domain (for example `juchegang-ca`, `juche-org`, `kim-juche-org`, `tiger-juche-org`) would make this map self-evident. GitHub redirects old names after a rename, and Vercel tracks repositories by ID, so deploys keep working; confirm each project's Git settings in Vercel afterwards.
