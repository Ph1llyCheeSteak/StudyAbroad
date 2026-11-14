# Rove team assignments and workflow

Working plan, 2026-11-14. Rove is a temporary name. Teammates may adjust assignments together; nobody needs Philippe or Lucky to approve routine implementation or handoffs. A teammate can direct either Codex or Claude Code to perform their work. Read the latest issue and this document before starting.

## Shared objective

Make a useful, mobile-first student demo: choose a city, view a sample student recommendation, save the same place to a trip, and return to that city. Build on one app, with clearly labeled fictional data. The map, social features and richer trip planning are areas for development, not claims of existing functionality.

| Teammate | Primary ownership | Branch | Task |
| --- | --- | --- | --- |
| Philippe | App foundation, shared interfaces, integration and deployment coordination | [team/philippe-foundation](https://github.com/Ph1llyCheeSteak/StudyAbroad/tree/team/philippe-foundation) | [#10](https://github.com/Ph1llyCheeSteak/StudyAbroad/issues/10) |
| Andrew (`drewfr`) | Explore: city selection, student recommendations and discovery-to-trip experience | [team/andrew-discovery](https://github.com/Ph1llyCheeSteak/StudyAbroad/tree/team/andrew-discovery) | [#11](https://github.com/Ph1llyCheeSteak/StudyAbroad/issues/11) |
| Lucky (`jwlsiii`) | Roves: trip detail, saved places and join/interest experience | [team/lucky-trips](https://github.com/Ph1llyCheeSteak/StudyAbroad/tree/team/lucky-trips) | [#12](https://github.com/Ph1llyCheeSteak/StudyAbroad/issues/12) |
| Maggie (`mmehl07`) | Student research, usability feedback, copy and brand direction | [team/maggie-research](https://github.com/Ph1llyCheeSteak/StudyAbroad/tree/team/maggie-research) | [#13](https://github.com/Ph1llyCheeSteak/StudyAbroad/issues/13) |

The foundation uses plain HTML, CSS and JavaScript modules; [foundation-contract.md](foundation-contract.md) documents running it, file paths, fixture IDs, hash routes and `savePlace(tripId, placeId)`. The application has shared files, including `src/app.js`; coordinate overlapping edits in PRs and resolve conflicts, rather than waiting for permission to work. When a shared interface must change, document it in the PR and coordinate with affected teammates. Avoid a second authoritative data store.

Maggie may contribute research or code based on her preference. Keep interview details private and report hypotheses separately from actual findings. Lucky may use either Claude Code or Codex to implement. If both are used concurrently, assign distinct files or use one for a separate, read-only critique of a pinned commit. Agents do not share chat history automatically: give each one these instructions and the relevant issue.

## Daily workflow

1. Fetch the latest `main` and `team/rove-integration`. Read `AGENTS.md`, this plan, your issue and the foundation contract. Preserve uncommitted work; merge the latest integration branch into your feature branch when needed.
2. Implement, run the app and check the affected journey. Commit and push your feature branch. Open a focused PR to `team/rove-integration` describing changes, checks, shared-interface changes and limitations. Routine decisions and pushing do not require Philippe's or Lucky's approval.
3. Teammates with repository write access can review and merge integration PRs subject to actual GitHub protections. Check the combined app and resolve conflicts before merging. Agents do not automatically see issue comments or branch changes; refresh them.
4. Open a PR from the tested integration branch to `main` for the public release. Follow [merge-review.md](merge-review.md): check the change and relevant flows, seek an independent reviewer when practical, and report limitations honestly. Any teammate can authorize their own agent to merge; no video or specific person is a routine gate. Never bypass actual GitHub protections.
5. Test feature and combined integration changes locally as described in [project-setup.md](project-setup.md); do not create hosted previews for routine testing. Only approved changes merged to `main` automatically deploy to [rove-study-abroad.pages.dev](https://rove-study-abroad.pages.dev/). Check deployment status and the public link after release.

The demo uses fictional sample people, trips and recommendations and browser-local data; there is no shared messaging or account backend. Never share credentials or real student data in the public repository.
