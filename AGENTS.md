# Project guidance for agents

Start with `docs/README.md`, then read the relevant product vision, hackathon brief, and project setup before planning or changing this project. Follow the user's current instructions and any more specific applicable guidance. Repository documents describe the current project direction; drafts and hypotheses are not approved decisions.

## Current shared guidance across branches

At the start of project work, when network access is available, run `git fetch origin main` and read the latest committed `AGENTS.md` and `docs/README.md` from `origin/main` using `git show origin/main:AGENTS.md` and `git show origin/main:docs/README.md`. Read any relevant referenced files from `origin/main` the same way. Apply the current guidance alongside the active branch's task-specific context; do not merge, rebase, overwrite files, or discard changes merely to refresh guidance. If fetch fails, use the local guidance and report that it may be stale. This instruction only works once a branch contains it; tools that do not read AGENTS.md need explicit direction.

## Context

- Rove is the temporary hackathon demo name for a mobile-first social and trip-planning concept for students abroad; it is not a cleared final brand. The current direction prioritizes student connections and independent trips; administrative workflows are later possibilities.
- The public Rove prototype is a provisional demo, not the approved design for the next build. Read the redesign and hosting notes in `docs/project-setup.md` and the current working proposal linked from `docs/README.md` before designing or implementing.
- This is a short hackathon build. Read `docs/hackathon.md`, prioritize one complete demonstrable student journey, and preserve project history. Confirm current event rules and deadlines in Discord.
- Check the actual repository, branch, existing changes, and task-specific sources. Do not assume a framework, backend, hosting, launch, or feature exists.
- Distinguish confirmed decisions, proposals, and unvalidated assumptions. Use the sources and decision process in `docs/README.md` when context conflicts.

## Git workflow and decision boundaries

- The team's shared branch layout is six persistent branches: `main` (production app deployed by Cloudflare Pages), `team/rove-integration` (combined testing), and four personal development branches: `team/philippe-foundation`, `team/andrew-discovery`, `team/lucky-trips`, and `team/maggie-research`. Reuse these branches and preserve them after merges. Coordinate changes to this layout with the team; temporary branches may be used for focused work or review and cleaned up safely afterward.
- Normally open feature PRs from a personal branch to `team/rove-integration`, test the combined result, then use a PR to merge reviewed work into `main`. Only `main` automatically deploys to the public Cloudflare site at https://rove-study-abroad.pages.dev/. Test feature and integration work locally; do not create hosted previews or deploy branch work unless explicitly requested. A Git push does not verify deployment; check the production site after a release. See `docs/project-setup.md`.
- Handle routine Git coordination for the team: inspect the checkout, branch, uncommitted changes and remote; fetch current `main`; explain material risks in plain language. Preserve teammates' and users' work. If offline, continue safely with local information and say what could not be checked.
- For new work, use the assigned personal branch, syncing the latest integration branch when needed. Do not switch, pull, merge, rebase or overwrite an active checkout with unrelated changes; use a separate worktree or ask when the safe path is unclear. Check for relevant upstream changes and incorporate them only when safe and appropriate; explain conflicts that require a human decision. Never force-push or discard work without explicit authorization.
- Make sensible routine Git choices and perform requested development and verification without making teammates manage commands. Commit focused changes when useful to prepare a reviewable result, preserving unrelated work; explain what changed and what remains.
- Team members and their agents may implement, commit, push feature branches and open pull requests for assigned work without waiting for Philippe or another teammate to confirm a routine handoff. Coordinate changes to shared interfaces in the pull request and raise real conflicts promptly. Before merging into `main` or pushing directly to `main`, obtain authorization from the teammate directing the work and follow the proportional review process. Never bypass repository protections.
- Ask the user for creative and consequential product choices, unresolved conflicts, or material risks; make routine implementation and Git decisions independently. Report failures and the next action in plain language.

## Collaboration

- The human team sets direction and retains final control. Codex agents assist their human users and make routine decisions only within their authorized scope; they do not replace human product, publishing, or merge decisions.
- A Codex agent may coordinate and delegate bounded tasks to Claude Code when requested or appropriate and available. The coordinating agent remains responsible for reviewing the output, integrating it safely, and reporting limitations. Claude can also provide an independent review when the applicable review requirements are met; delegation alone is not proof of independence.
- The user's Claude Code session is for their Codex agent's delegated work; do not assume it is available to teammates' agents. Do not share account credentials or store secrets in the repository.
- Work within the requested scope, preserve others' changes, and coordinate shared files when work is delegated. Use independent branches or worktrees where appropriate; integrate and verify contributions before reporting completion.
- For proposed merges to `main`, follow `docs/merge-review.md`. Prefer an independent reviewer when available, but do not block routine work solely because an agent, video recording, or optional tooling is unavailable. Report actual checks and limitations honestly; teammates retain responsibility for deciding to merge.
- Keep the user informed of meaningful progress, decisions, blockers, and risks. Ask when an answer is genuinely required; use judgment for routine choices.
- Record durable decisions in the relevant shared document, with date and status. Do not treat a single chat or an old brainstorming document as an automatic update to the shared references.

## Criteria

- Define task-specific acceptance criteria before substantial work; distinguish user requirements from proposed criteria.
- Aim for clear, accessible, mobile-first experiences that help students connect and coordinate without instruction. Consider privacy and trust when handling profiles, messaging, and travel data.
- Verify claims and implementation with checks appropriate to the work; report what was tested and what remains uncertain. Do not claim a feature, safety guarantee, integration, or deployment exists without evidence.
- For the hackathon, favor a reliable live demonstration, evidence of the user problem, a credible route to users, an honest explanation of AI use, and clear attribution. Never invent evidence or collect sensitive data.
