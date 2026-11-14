# Project setup and deployment

Working record, 2026-11-14. Repository: [Ph1llyCheeSteak/StudyAbroad](https://github.com/Ph1llyCheeSteak/StudyAbroad). Temporary demo name: Rove.

## Run the app

The app is plain HTML, CSS and browser JavaScript modules; no package install or build is required. From the repository root run `python -m http.server 8000` (or another static file server) and open http://localhost:8000. Do not open the HTML directly from the filesystem: the browser must load ES modules over HTTP. See [foundation-contract.md](foundation-contract.md) for routes, shared data and limitations.

The sample student journey is city → recommendation → save to sample trip → saved place. Only Barcelona currently has a sample trip. Fixtures are fictional; browser-local storage is not a shared backend. The Crew page is illustrative and does not offer actual messaging.

## Deployments and local testing

- Public production: [rove-study-abroad.pages.dev](https://rove-study-abroad.pages.dev/). Cloudflare Pages is connected to this repository and automatically deploys `main`. Verify the new production commit and the public site after a release; a push alone does not prove deployment succeeded.
- Cloudflare automatic preview deployments are disabled. The older [Vercel site](https://rove-study-abroad.vercel.app/) is a separate legacy deployment and may be stale; it is not the current source of truth. The repository's `vercel.json` disables automatic Vercel deployments except `main` for branches that contain the configuration. Branches must incorporate this configuration before it can govern their Vercel builds. Never create hosted preview deployments just to review routine work.
- Work in your assigned feature branch, run `python -m http.server 8000 --bind 127.0.0.1` from its repository root, then open `http://127.0.0.1:8000`. Use another port if it is in use. This URL is local to that computer; share screenshots or recordings for remote review, not the localhost link.
- To test the combined app, fetch Git updates and use a separate clean worktree for `origin/team/rove-integration`, without changing another person's checkout. Example from a repository root: `git fetch origin` followed by `git worktree add --detach ../rove-integration-test origin/team/rove-integration`. Run the server from that worktree on another port, e.g. `python -m http.server 8001 --bind 127.0.0.1`; open `http://127.0.0.1:8001`. If the path already exists, inspect and reuse it only when safe or choose a different path. After newer changes arrive, update a clean detached test worktree with `git switch --detach origin/team/rove-integration`; never discard uncommitted work. The preview is a snapshot, so refresh it deliberately.
- Check the relevant feature and the combined journey at phone and desktop sizes, including navigation and console errors where practical. Local testing does not deploy or consume Cloudflare builds. For a shareable preview, ask the directing teammate before making an exception; hosted previews are public and count toward provider limits.
- The sample content and browser-local storage are not shared user accounts, trips, or messaging. Do not put real student data or secrets in the demo. A custom domain is optional and separate from hosting.

## Collaboration

Any teammate can direct their agent to implement and push feature work and open a PR. See [team-workstreams.md](team-workstreams.md). Agents should refresh shared guidance from `origin/main`, but also read task-specific work on their branch and current issues. Another person's branch does not update your checkout automatically. Merge the integration branch into feature work as needed without discarding local changes. Review PRs and follow [merge-review.md](merge-review.md) before merging into `main`; do not bypass configured protections.
