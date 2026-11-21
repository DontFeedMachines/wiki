# Changelog // Don't Feed Machines // WIKI v1.0.2


## [Unreleased] 2026-11-20

### Fixed

- `builds/index.mdx` and `how-to/index.mdx` now import `LinkCard` from the starlight components, which fixes the build errors on the `/builds` and `/how-to` pages

## [Unreleased] 2026-11-18

### Changed

- `@dontfeedmachines/fieldkit` raised from `^0.4.2` to `^0.5.0`, and its release age exclusion now names 0.5.0. the site builds, 93 pages.

## [1.0.2] - 2026-11-12

### added

- sector docs for `flockbuster`, `poisongarden`, `porchlights`, `sweetspot`, and `voidops`
- station docs for `comms` (combining `irc`, `chat`, and `voice`), `portal`, `dfm-tools`, and `legal`, plus an overview in `stations/islands-readme`, which is changed to stations-readme

### changed

- kept `truth-serum` under `toolkit/` as a tool rather than a protocol
- updated `help`, `stats`, `refs`, `wall-of-notice`, `watchtower`, `leash`, `humanlayer-models`, `fieldkit`, `credits`, `faq`, `glossary`, `legal/terms`, `guides`, and `ecosystem` index to match current builds and domains
- fixed internal doc links, removed stale config entries in `sidebar.json` and `menu.en.json`, and fixed the hero link and description typo in `index.mdx`

## [1.0.1] - 2026-11-12

### changed

- updated `README.md` version (`v1.0.1`), package name (`@dontfeedmachines/fieldkit`), and license split (`LICENSE` Apache-2.0 for code, `LICENSE-WIKI` CC BY-SA 4.0 for wiki articles)
- switched `@dontfeedmachines/fieldkit` in `package.json` from local link to published `^0.4.2` and wired `fieldkitWiki` in `astro.config.mjs`
- added `site: "https://wiki.dontfeedmachines.com"` to `astro.config.mjs` so `@astrojs/sitemap` generates the sitemap
