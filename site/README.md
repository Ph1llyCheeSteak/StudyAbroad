# TRVLR demo

From the repository root, run `node site/build.mjs`, then serve `site/dist` using a static HTTP server, for example `python -m http.server 8765 --directory site/dist`. Open `http://localhost:8765/`. Run the shared adapter checks with `node --test tests/demo-store.test.mjs`.

The demo uses fictional data. Trip changes persist in the current browser only; other users cannot see them. There is no actual messaging, account system, verified identity, booking, or staff registration. The shared adapter in `src/` is the source for the generated copies in `site/dist`.

Colors use Maggie's approved palette study from the `maggie` branch's `docs/brand-style-guide-draft.txt`. The visual guide and site design remain drafts for team review.
