# Project setup and deployment

Working record, 2026-11-14. Repository: [Ph1llyCheeSteak/StudyAbroad](https://github.com/Ph1llyCheeSteak/StudyAbroad). Temporary demo name: Rove.

## Run the app

The app is plain HTML, CSS and browser JavaScript modules; no package install or build is required. From the repository root run `python -m http.server 8000` (or another static file server) and open http://localhost:8000. Do not open the HTML directly from the filesystem: the browser must load ES modules over HTTP. See [foundation-contract.md](foundation-contract.md) for routes, shared data and limitations.

The sample student journey is city → recommendation → save to sample trip → saved place. Only Barcelona currently has a sample trip. Fixtures are fictional; browser-local storage is not a shared backend. The Crew page is illustrative and does not offer actual messaging.

## Git and Vercel

- Feature work happens on team branches and is proposed to [team/rove-integration](https://github.com/Ph1llyCheeSteak/StudyAbroad/tree/team/rove-integration); see [team-workstreams.md](team-workstreams.md) for assignments.
- [Vercel project dashboard](https://vercel.com/rove17/rove-study-abroad) is connected to the GitHub repository. Pushing a branch can trigger a preview deployment; anyone with the preview URL can view it. Access to GitHub alone does not imply access to the Vercel dashboard.
- Production domain: [rove-study-abroad.vercel.app](https://rove-study-abroad.vercel.app/). Vercel is configured to deploy `main`. The current production deployment was manually promoted from `codex/rove-app-foundation` (commit `f6d0826`); a subsequent successful `main` deployment can replace it. Once this app is merged to `main`, reviewed app changes merged there should deploy automatically. Verify the deployment and public URL after each release; failures do not become successful updates.
- The older [Sites demo](https://rove-student-journeys.epicthyme518.chatgpt.site/) is separate; GitHub pushes do not update it. Do not use it as evidence of the Vercel deployment.
- A custom domain is not required for the demo. Do not add secrets, personal research data or real student information to this public repository.

## Collaboration

Any teammate can direct their agent to implement and push feature work and open a PR. See [team-workstreams.md](team-workstreams.md). Agents should refresh shared guidance from `origin/main`, but also read task-specific work on their branch and current issues. Another person's branch does not update your checkout automatically. Merge the integration branch into feature work as needed without discarding local changes. Review PRs and follow [merge-review.md](merge-review.md) before merging into `main`; do not bypass configured protections.
