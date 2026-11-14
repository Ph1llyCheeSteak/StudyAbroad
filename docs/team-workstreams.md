# Rove hackathon workstreams and integration

Status: 2026-11-14, assigned by project lead for immediate coordination; people may adjust ownership together. Rove is a temporary demo name. The old prototype remains available, but its layout is not the target redesign. The [city-community discussion](https://github.com/Ph1llyCheeSteak/StudyAbroad/issues/7#issuecomment-6882239850) is a product proposal, not an approved list of features.

## One proposed demo journey

A student chooses a city on a map or accessible city list, opens a student recommendation, saves it to a trip and sees how to connect or express interest. The same city and place appear throughout. Confirm this small journey with the team; avoid treating every issue-7 idea as a release requirement. Use fictional examples and clearly disclose whether data is browser-local or shared. A map-like city selector and list fallback are acceptable if a full mapping API would delay the demo.

## Assignments

Each issue contains task boundaries, acceptance criteria and its branch. These branches were created from `main` at `a606312` and currently contain documentation only, not a runnable redesign. All four collaborators were verified to have write or admin access when assigned.

| Owner | Work | Branch | Assignment |
| --- | --- | --- | --- |
| Philippe | Shared foundation, data contracts, integration and coordinated public deployment | [`team/philippe-foundation`](https://github.com/Ph1llyCheeSteak/StudyAbroad/tree/team/philippe-foundation) | [Issue #10](https://github.com/Ph1llyCheeSteak/StudyAbroad/issues/10) |
| Andrew (`drewfr`) | City discovery, map/list selection and recommendation view | [`team/andrew-discovery`](https://github.com/Ph1llyCheeSteak/StudyAbroad/tree/team/andrew-discovery) | [Issue #11](https://github.com/Ph1llyCheeSteak/StudyAbroad/issues/11) |
| Lucky (`jwlsiii`) | Trip detail, selected places and join/interest; Codex implementation plus independent Claude critique | [`team/lucky-trips`](https://github.com/Ph1llyCheeSteak/StudyAbroad/tree/team/lucky-trips) | [Issue #12](https://github.com/Ph1llyCheeSteak/StudyAbroad/issues/12) |
| Maggie (`mmehl07`) | Student research, user journey, product copy and brand feedback | [`team/maggie-research`](https://github.com/Ph1llyCheeSteak/StudyAbroad/tree/team/maggie-research) | [Issue #13](https://github.com/Ph1llyCheeSteak/StudyAbroad/issues/13) |

## Integration agreement

- Shared staging branch: [`team/rove-integration`](https://github.com/Ph1llyCheeSteak/StudyAbroad/tree/team/rove-integration). Philippe owns the initial app shell, route and data interfaces. Decide one stack and publish a runnable foundation there before dependent features integrate. Existing workstreams can research, sketch or implement isolated components while the interface is agreed. The old demo source is reference material, not the required design.
- Proposed shared shapes, to agree before coding against them: **City** (stable ID, name, country, map position); **Place** (stable ID, city ID, name, category, sample tip); **Trip** (stable ID, city ID, dates, place IDs, participant IDs); **Student** (stable ID and demo display name). Define who can save or join and whether state is local or shared. No feature should introduce a second authoritative data store.
- Andrew owns discovery screens, Lucky owns trip screens, Maggie owns research/copy and Philippe owns shell, contracts and deployment. Agree exact file paths once the stack is chosen. Do not have separate agents edit the same file concurrently. Mention required shared changes in the issue before changing another owner's files.
- Each person works on their named branch, opens a focused PR against `team/rove-integration`, and identifies the tested commit, dependencies, demo limitations and validation. Keep PRs small and integrate early. Sync from the integration branch when the foundation or interfaces change, preserving local work and resolving conflicts deliberately.
- For a proposed merge into `main`, follow [independent merge review](merge-review.md), including testing the exact candidate and recording and inspecting browser video for app changes. The review is advisory unless a real independently controlled status check exists. Do not represent it as automatic enforcement. Documentation-only changes do not require video.

## Lucky: two agents, different jobs

Use Codex as the primary implementer. Once a draft is committed, give Claude Code a read-only review in a separate worktree or pinned checkout: inspect the actual diff, trace the city-to-trip handoff, and challenge mobile usability, error states, privacy and whether simulated behavior is labeled. Codex evaluates the findings and makes fixes. Record the reviewed commit, findings and actions in the PR. Both tools must explicitly read the latest `AGENTS.md`, these references, the issue and current integration contracts; they do not automatically share conversation context. This review complements, rather than replaces, independent merge-candidate review.

## From branches to the live link

The [public Rove demo](https://rove-student-journeys.epicthyme518.chatgpt.site/) is a separate Sites deployment, currently showing fictional, browser-local data. **GitHub branches and PRs do not automatically update that URL.** After a candidate is integrated, reviewed and tested, Philippe or another authorized Sites editor must publish the exact tested source through the Sites workflow and verify the resulting URL without sign-in and on mobile. Confirm the same city-to-trip journey and disclose local-only behavior. Preserve the existing live version until the replacement is ready; do not share Sites credentials in GitHub. A future automated GitHub-to-host pipeline is not configured and must not be assumed.

## Near-term sequence

1. Confirm the event's submission instructions and times in Discord; keep the existing public link as a fallback. Record the current time and next deadline in Pacific time.
2. Agree the smallest demo journey and let Maggie provide quick student-experience feedback. Philippe and Andrew/Lucky agree the shared model, API and ownership before UI handoff.
3. Philippe publishes the minimal runnable shell to the integration branch. Andrew and Lucky build their slices using shared IDs; Maggie prepares anonymized research, copy and user checks. Integrate one vertical slice as soon as it works.
4. Exercise the exact combined candidate on a narrow mobile viewport, including empty/error states and the save-to-trip action. Review the recording and report real defects; keep the review proportional.
5. Deploy the tested candidate to the existing public link, verify it without sign-in, rehearse the demo, record AI and external-resource credits, and submit before the deadline. Do not invent interview evidence or claim browser-local actions are shared.

## Privacy and scope

Use synthetic data for demo accounts, places and trips; do not put real student details, private interview notes or credentials into the public repository. Conduct only voluntary, individual research and follow the hackathon's no-mass-campus-email rule. Defer booking, payments, live flight prices, background tracking, administrative surveillance and unverified social features unless the team explicitly agrees and has a working implementation.
