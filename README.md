# Moonlight Peaks Gift Finder

A static page for the exact search "moonlight peaks gift guide": hold an item, find out in
seconds who loves, likes, is neutral to, or hates it, or pick a character to see their
full gift list.

## Source

Data is parsed from a single source page:

- https://roonby.com/2026/11/09/moonlight-peaks-gift-guide-every-characters-favorite-and-hated-gifts/
- Article dated: 2026-11-09
- Re-fetched and parsed: 2026-11-24 (re-fetch byte-identical to the committed source except for
  a randomized Cloudflare email-obfuscation hash, which changes on every request)

That source lists 28 characters, each with Loved / Liked / Neutral / Hated gift lines
(a few characters have no entries in one or more of those categories, e.g. Death has no
Hated list). Some entries are category phrases rather than individual items (for example
"Any Trash item (Rusty Soda Can, Plastic Rings, etc.)" or "Blue Flowers"); these are kept
verbatim as published, not expanded into individual gift names, since doing so would add
information not actually present in the source. Because this is a single source, it may
not reflect later game patches.

## Files

- `index.html` — the page: item search box + character picker, no build step.
- `data.js` — the 28-character dataset plus `findGiftMatches` / `findCharacter` lookup
  functions, parsed from the source HTML.
- `test.js` — known-answer tests against the parsed data, run with `node test.js`.
- `.nojekyll` — disables Jekyll processing if served from GitHub Pages.

## Running

Open `index.html` directly in a browser, or serve the directory with any static file
server. No build step, no dependencies.

To run the tests: `node test.js`
