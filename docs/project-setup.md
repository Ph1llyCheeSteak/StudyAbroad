# Project setup and collaboration

Status: current observations and proposed workflow, 2026-11-13. Verify environment and remote state before acting; configuration can change.

## Repository

- GitHub: [Ph1llyCheeSteak/StudyAbroad](https://github.com/Ph1llyCheeSteak/StudyAbroad) (public when last checked).
- Default branch: `main`. The current local checkout tracks `origin/main`.
- This checkout has a README and initial shared documentation; the app, framework, backend, hosting and deployment process have not been selected.
- Git is available. Node and pnpm were available in the Codex runtime when checked; npm was not on PATH. Teammates should verify their own tooling once a stack is chosen.

## Proposed Git workflow

1. Fetch and inspect the latest `main` and local changes before beginning work. Preserve existing uncommitted work. Base new feature branches on a `main` that contains the shared references; existing branches need to incorporate that commit through a normal merge or rebase when safe.
2. Make focused changes on a descriptive feature branch. Use `codex/` for branches created by Codex unless the team chooses another convention.
3. Define acceptance criteria, implement, and run checks appropriate to the change. Document any missing checks or assumptions.
4. Open a pull request for changes to `main`, use the independent review process in [merge review](merge-review.md), and resolve conflicts with care. Do not assume deployment or merge authorization from permission to develop.
5. Keep product and technical decisions current in the shared references.

The repository has no established install, run, test or build commands yet. Add verified instructions and prerequisite versions once an application stack exists; do not invent commands.

Repository guidance travels with Git commits. A different clone, branch or worktree sees only its checked-out version. Once a branch contains the instruction in `AGENTS.md`, it directs Codex to fetch and read the latest committed guidance from `origin/main` without changing the branch. Existing branches must first incorporate that instruction; agents that do not support `AGENTS.md` need explicit direction. An offline fetch cannot guarantee current guidance, and this process does not automatically synchronize branch files. See [the hackathon brief](hackathon.md) for project-history and event rules.

## Access and privacy

The GitHub connector is available in this environment. Access for each teammate and future agent depends on their own permissions and checkout. A collaborator invitation is not the same as acceptance. Do not place credentials, real student profiles, private trip details, or personal research data in the public repository. Use synthetic examples and an appropriate secure location for sensitive material.

## Open decisions

Framework and package manager; hosting and deployment; data storage and authentication; issue tracking; automated reviewer integration; ownership of product and brand decisions; and how shared references will be maintained. These require team decisions before documenting them as facts.
