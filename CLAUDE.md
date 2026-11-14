# Claude Code guidance — Rove / StudyAbroad

**Authoritative source:** [`AGENTS.md`](AGENTS.md) is the primary guidance document for this project. All instructions in that file are binding for Claude Code. Read it at the start of every session. This file bridges AGENTS.md to Claude-specific behaviour and records what Claude cannot do; it does not duplicate AGENTS.md.

## Read latest guidance from origin/main

At the start of project work, when network access is available, run:

```
git fetch origin main
git show origin/main:AGENTS.md
git show origin/main:docs/README.md
```

Apply the fetched guidance alongside the active branch's task-specific context. Do not merge, rebase, or overwrite files to refresh guidance. If fetch fails, continue on local guidance and report it may be stale. See AGENTS.md §"Current shared guidance across branches" for the full instruction.

## Project context

- Read [`docs/README.md`](docs/README.md) for start-here references, the decision log, and source rules.
- Read [`docs/product-vision.md`](docs/product-vision.md), [`docs/hackathon.md`](docs/hackathon.md), and [`docs/project-setup.md`](docs/project-setup.md) before planning or changing the product.
- Rove is a temporary hackathon demo name, not a cleared brand. The current direction is student social connection and trip planning; administrative features are later possibilities.
- The public prototype is a provisional demo slated for substantial redesign. Do not treat its layout as a requirement or assume a GitHub-to-Sites deployment integration exists.

## Git workflow and publishing

Follow AGENTS.md §"Git workflow and decision boundaries" exactly. Key points for Claude:

- Inspect the checkout, branch, and local changes before acting.
- Create focused branches from current `origin/main`; never switch or overwrite an active checkout with unrelated work without asking.
- Commit focused changes locally to prepare reviewable results; explain what changed and what remains open.
- **Do not push, open pull requests, or merge to `main` without explicit user authorization for that specific action.** Completing implementation is not authorization to publish or merge.
- Never force-push or discard work without explicit authorization.

## Independent merge review requirement

For every proposed merge to `main` — including changes to AGENTS.md, product direction, configuration, and this file — an independent review subagent must be used following [`docs/merge-review.md`](docs/merge-review.md) **before** merge. Key rules:

- The review must use the **base branch's** instructions, not the PR's own changed instructions.
- If a required review step (fetch, checkout, run, video walkthrough) cannot be completed, mark it **incomplete**, not passed.
- Do not create placeholder passing statuses.
- Obtain explicit user authorization before merging even after a clean review.

An independent subagent review is advisory unless a separately configured GitHub integration publishes a required status. Do not assume such an integration exists or claim a review has passed when it is incomplete. This file alone does not constitute a completed review.

## Collaboration and decisions

Follow AGENTS.md §"Collaboration" and §"Criteria". In brief:

- The human team retains final control; Codex agents assist their human users. When a Codex agent delegates work to Claude Code, Claude works within that task's scope and reports results and limitations to the coordinator, who reviews and integrates the work.
- The user's Claude Code session is for their Codex agent's delegated work, not a shared teammate resource. Do not share account credentials or store secrets in the repository.
- Work within requested scope; preserve teammates' changes.
- Ask the user for creative, consequential, or unresolved product decisions; make routine implementation and Git decisions independently.
- Record durable decisions in the relevant shared document with date and status. Do not treat a single chat as an update to shared references.
- Use synthetic data only; never collect or commit real student profiles, credentials, or personal data.
- Distinguish confirmed decisions, proposals, and unvalidated assumptions.

## Hackathon constraints

See [`docs/hackathon.md`](docs/hackathon.md) for submission deadlines and rules. Prefer one complete mobile-friendly student journey over many unfinished features. Disclose AI use and credit external libraries and assets. The guide says Discord takes precedence if information differs from the brief — verify current rules there.

## Project commands

Main has no established install, run, test, or build commands. The separate prototype and its source branch are described in `docs/project-setup.md`; inspect the actual branch and use its documented commands when applicable. Do not invent commands.
