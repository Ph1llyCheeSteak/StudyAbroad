# Project setup and collaboration

Status: current observations and proposed workflow, 2026-11-13. Verify environment and remote state before acting; configuration can change.

## Repository

- GitHub: [Ph1llyCheeSteak/StudyAbroad](https://github.com/Ph1llyCheeSteak/StudyAbroad) (public when last checked).
- Default branch: `main`. The current local checkout tracks `origin/main`.
- This checkout has a README and initial shared documentation; the app, framework, backend, hosting and deployment process have not been selected.
- Git is available. Node and pnpm were available in the Codex runtime when checked; npm was not on PATH. Teammates should verify their own tooling once a stack is chosen.

## Team Git workflow

The team works in local checkouts and uses GitHub to share changes. Agents handle routine Git coordination so teammates can focus on the product and decide when work is shared or merged.

1. At the start of work, the agent checks the branch and local changes, fetches `origin/main`, and reads the latest shared guidance. It preserves existing work and reports when it cannot check the remote.
2. For a new task, the agent creates a focused branch from current `origin/main` when safe. It uses a separate worktree or asks if switching the current checkout would risk unrelated work. For an existing branch, it checks relevant upstream changes and handles safe synchronization; it escalates conflicts requiring a decision.
3. The agent implements and verifies the work, keeps decisions in the shared references, and can make focused local commits to prepare a reviewable result. It explains the result and any unresolved risks.
4. The teammate decides whether to push a branch, open a pull request, merge into `main`, push directly to `main`, or wait. An explicit instruction authorizes the specified action; implementing a task alone does not authorize publication or merging. Before a merge, follow [merge review](merge-review.md) and applicable repository protections. GitHub access depends on each person's permissions.

Agents must not discard others' work, force-push, or bypass protections without explicit authorization. Branch and worktree choices are routine agent decisions; product direction and consequential tradeoffs belong to the team.

The repository has no established install, run, test or build commands yet. Add verified instructions and prerequisite versions once an application stack exists; do not invent commands.

Repository guidance travels with Git commits. A different clone, branch or worktree sees only its checked-out version. Once a branch contains the instruction in `AGENTS.md`, it directs Codex to fetch and read the latest committed guidance from `origin/main` without changing the branch. Existing branches must first incorporate that instruction; agents that do not support `AGENTS.md` need explicit direction. An offline fetch cannot guarantee current guidance, and this process does not automatically synchronize branch files. See [the hackathon brief](hackathon.md) for project-history and event rules.

## Access and privacy

The GitHub connector is available in this environment. Access for each teammate and future agent depends on their own permissions and checkout. A collaborator invitation is not the same as acceptance. Do not place credentials, real student profiles, private trip details, or personal research data in the public repository. Use synthetic examples and an appropriate secure location for sensitive material.

## Open decisions

Framework and package manager; hosting and deployment; data storage and authentication; issue tracking; automated reviewer integration; ownership of product and brand decisions; and how shared references will be maintained. These require team decisions before documenting them as facts.
