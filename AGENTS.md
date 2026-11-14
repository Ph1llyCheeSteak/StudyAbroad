# Project guidance for agents

Start with `docs/README.md`, then read the relevant product vision, hackathon brief, and project setup before planning or changing this project. Follow the user's current instructions and any more specific applicable guidance. Repository documents describe the current project direction; drafts and hypotheses are not approved decisions.

## Current shared guidance across branches

At the start of project work, when network access is available, run `git fetch origin main` and read the latest committed `AGENTS.md` and `docs/README.md` from `origin/main` using `git show origin/main:AGENTS.md` and `git show origin/main:docs/README.md`. Read any relevant referenced files from `origin/main` the same way. Apply the current guidance alongside the active branch's task-specific context; do not merge, rebase, overwrite files, or discard changes merely to refresh guidance. If fetch fails, use the local guidance and report that it may be stale. This instruction only works once a branch contains it; tools that do not read AGENTS.md need explicit direction.

## Context

- TRVLR is a working name for a mobile-first social and trip-planning concept for students abroad. The current direction prioritizes student connections and independent trips; administrative workflows are later possibilities.
- This is a short hackathon build. Read `docs/hackathon.md`, prioritize one complete demonstrable student journey, and preserve project history. Confirm current event rules and deadlines in Discord.
- Check the actual repository, branch, existing changes, and task-specific sources. Do not assume a framework, backend, hosting, launch, or feature exists.
- Distinguish confirmed decisions, proposals, and unvalidated assumptions. Use the sources and decision process in `docs/README.md` when context conflicts.

## Git workflow and decision boundaries

- Handle routine Git coordination for the team: inspect the checkout, branch, uncommitted changes and remote; fetch current `main`; explain material risks in plain language. Preserve teammates' and users' work. If offline, continue safely with local information and say what could not be checked.
- For new work, use a focused branch based on current `origin/main` when the checkout is clean and switching is safe. Do not switch, pull, merge, rebase or overwrite an active checkout with unrelated changes; use a separate worktree or ask when the safe path is unclear. On an existing task branch, check for relevant upstream changes and incorporate them only when safe and appropriate; explain conflicts that require a human decision. Never force-push or discard work without explicit authorization.
- Make sensible routine Git choices and perform requested development and verification without making teammates manage commands. Commit focused changes when useful to prepare a reviewable result, preserving unrelated work; explain what changed and what remains.
- Before publishing changes to GitHub, present the branch, destination and meaningful changes and obtain the user's decision to push, open a pull request, or wait. Before merging into `main` or pushing directly to `main`, obtain explicit authorization for that action. An instruction to implement work alone is not permission to publish or merge; a clear instruction to perform a particular action is authorization for that action. Follow the independent merge review process even when merge is authorized. Never bypass repository protections.
- Ask the user for creative and consequential product choices, unresolved conflicts, or material risks; make routine implementation and Git decisions independently. Report failures and the next action in plain language.

## Collaboration

- Work within the requested scope, preserve others' changes, and coordinate shared files when work is delegated. Use independent branches or worktrees where appropriate; integrate and verify contributions before reporting completion.
- For every proposed merge to `main`, including changes to these instructions, use an independent review subagent and follow `docs/merge-review.md`. Never claim a review passed if it was unavailable, incomplete, or invalidated by changes.
- Keep the user informed of meaningful progress, decisions, blockers, and risks. Ask when an answer is genuinely required; use judgment for routine choices.
- Record durable decisions in the relevant shared document, with date and status. Do not treat a single chat or an old brainstorming document as an automatic update to the shared references.

## Criteria

- Define task-specific acceptance criteria before substantial work; distinguish user requirements from proposed criteria.
- Aim for clear, accessible, mobile-first experiences that help students connect and coordinate without instruction. Consider privacy and trust when handling profiles, messaging, and travel data.
- Verify claims and implementation with checks appropriate to the work; report what was tested and what remains uncertain. Do not claim a feature, safety guarantee, integration, or deployment exists without evidence.
- For the hackathon, favor a reliable live demonstration, evidence of the user problem, a credible route to users, an honest explanation of AI use, and clear attribution. Never invent evidence or collect sensitive data.
