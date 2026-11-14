# Rove team workstreams and integration plan

Status: proposed for team alignment, 2026-11-13; updated 2026-11-14 for the temporary demo name. Feature assignments are starting suggestions, not claims about anyone's preferences, skills, availability or agreement. Exchange ownership freely before building. Maggie's approved palette is recorded in [shared references](README.md); other visual decisions remain under review. Build only within the hackathon rules in [hackathon.md](hackathon.md).

The earlier layout is a provisional demo and is slated for substantial redesign. Revisit these proposed workstreams against the [city-community discussion](https://github.com/Ph1llyCheeSteak/StudyAbroad/issues/7#issuecomment-6882239850) and agree shared contracts before parallel development; its detailed features have not yet been approved.

## Shared goal and scope

Deliver one clear, mobile-friendly demonstration: a student identifies themself using a demo profile, discovers a compatible student or an open trip, views trip details and expresses interest or joins; the shared trip then reflects the same participant. Use safe synthetic data. Decide and document which interactions are genuinely persistent before presenting them. The proposed UX and implementation are hypotheses, not finished features.

The following four ownership areas are distinct but deliberately converge on that journey. Workstream 1 owns integration and shared interfaces; the other three own student-facing slices. User research, testing and demo preparation are shared, with the integration owner coordinating. This is not a claim that the team has chosen a framework, backend or hosting service.

| Proposed owner | Workstream | Primary outcome |
| --- | --- | --- |
| Philippe | 1. Foundation, data and integration | One runnable app with shared data contracts, fixtures, routes and integrated demo. |
| Andrew (@drewfr) | 2. Student identity and profiles | A reusable student profile and clear, privacy-conscious profile flow. |
| @jwlsiii | 3. Trip planning and participation | Create, view and join a trip using the shared contract. |
| Maggie (@mmehl07) | 4. Discovery and student recommendations; brand palette | Find relevant students and trips, show useful destination advice, and develop the palette separately. Feature assignment remains a proposal. |

## 1. Foundation, data and integration — Philippe

**Purpose:** remove duplicate setup work and make the other slices interoperable.

- Coordinate a quick stack decision with the team, then own the initial app shell, shared routing, local run/test instructions, fixture data and deployment setup. Record actual choices in `project-setup.md` when agreed; no one should independently introduce a second stack or data store.
- Publish the shared interface module and fixtures described below early, and provide a simple working stub for each feature owner. Maintain stable IDs and a clear persistence boundary. Agree a single integration point for the brand palette once the brand owner delivers it; do not decide the colors for them.
- Integrate branches via pull requests, coordinate the independent review described in `merge-review.md`, test the complete merged flow, prepare a live link and demo fallback, and record third-party and AI credits.
- **Acceptance:** fresh setup follows documented commands; each slice imports the same contracts and fixtures; a user action in one slice appears consistently in the other relevant view; primary journey works on mobile; failures and any mock or nonpersistent behavior are accurately documented.
- **Out of scope:** implement everyone else's screens or promise production-ready identity, security or deployment.

## 2. Student identity and profiles — Andrew

**Purpose:** give the demo a consistent student identity and help students understand one another.

- Design and implement a concise demo profile showing display name, host city, program, interests and optional budget preference; allow editing where feasible. Show clear empty, loading and error states appropriate to the chosen data source.
- Publish a reusable profile card and detail view or agreed view-model adapter for Discovery. Use the shared student ID and contract. Make visibility explicit; do not present fixture or self-reported data as verified.
- **Acceptance:** the same student appears consistently in profile, discovery and trip participants; profile edits follow the agreed persistence boundary; keyboard and mobile layouts work; no sensitive identity documents or live precise location are requested.
- **Out of scope:** production authentication, government ID collection, verification claims and a separate user database. Workstream 1 owns the session/data boundary; Workstream 4 owns discovery/filter controls.

## 3. Trip planning and participation — @jwlsiii

**Purpose:** turn interest in a destination into a shared trip.

- Implement trip list/detail and a lightweight create or edit flow with destination, dates, budget guidance, description and participant status. Enable an explicit join or interest action through the common repository interface.
- Coordinate the action contract with Workstreams 1 and 4 before implementing; distinguish planned, saved and joined states. Use human-readable errors for invalid dates and missing required fields.
- **Acceptance:** a student can create or open a synthetic trip, view details and express interest or join; the participant count and list reflect the same data after navigation; date and budget input validation is clear; behavior survives reload only if backed by agreed storage and is labeled honestly otherwise.
- **Out of scope:** booking, payments, live prices, automatic staff registration, real-time messaging and promised safety alerts.

## 4. Discovery and student recommendations — Maggie

**Purpose:** help students find people and trips that fit their plans.

- Implement a mobile-first discovery view using shared profiles and trips, with a small set of useful filters such as city/destination, dates or budget where the data supports them. Connect profile and trip cards to the other owners' detail views.
- Add a compact destination tip or recommendation view sourced from clearly labeled synthetic examples; agree a minimal recommendation shape with Workstream 1. Coordinate with the teammate developing the brand before adding approved tokens. Prepare useful empty and no-match states.
- **Acceptance:** selecting a result opens the correct profile or trip by stable ID; filters match displayed fields; a join action from discovery uses the same trip operation as the trip detail view; advice is identified as sample content and works on mobile.
- **Out of scope:** scraping, booking APIs, a separate profile or trip store, claims that recommendations or users are verified, and an independent design system.

## Integration contract: decide once, implement once

Before parallel coding, Workstream 1 should publish a short contract change for team agreement. The shape below is a **proposal**, not an existing API. Use one shared source of truth and import its types or adapters in every slice; no team should silently define conflicting fields.

- **Student:** stable opaque `id`, `displayName`, `hostCity`, `program`, `interests[]`, and optional budget preference. Avoid email, identity documents, exact home address or live location in public fixtures.
- **Trip:** stable `id`, `title`, `destination`, `startDate` and `endDate` (ISO calendar dates), optional `budgetAmount` and `currency` (ISO currency code), `description`, creator ID and participant IDs. Agree whether budgets are per person and avoid displaying a total as a guaranteed price.
- **Recommendation:** stable `id`, `destination`, `text`, and optional author ID and source label. Demo content must be marked as sample.
- **Operations:** obtain current demo student; list/get/save students; list/get/create trips; join or express interest; list recommendations. Define return values, validation, failure states and ownership before coding. Prevent duplicate joins and define what happens when a student or trip cannot be found.
- **Navigation:** agree route names and ID parameters in the shared shell. Cards link by ID; feature modules do not maintain duplicate copies of authoritative records.
- **Persistence:** pick one mode explicitly: shared local fixtures with a clearly labeled in-memory/local demo, or an agreed backend. Define initialization, reload behavior and whether two devices actually share data. No team should assume real-time sync.
- **Presentation:** reserve semantic design tokens for the incoming approved brand. Share common mobile layouts, states, and components; never block functionality waiting for final colors.

## Sequence and checkpoints

1. **Align now:** review ownership, current competing README proposal, user journey and what is genuinely feasible before the deadline. Coordinate with Maggie on the brand palette and agree one stack and initial contract. Avoid treating PR #2 as merged until it is reviewed.
2. **Foundation first, then parallel:** publish runnable shell, fixtures and contract; owners build behind agreed interfaces on separate feature branches. Each PR states files owned, dependencies, test steps and known mock behavior.
3. **Integrate early:** merge a small vertical slice, then attach profiles, trips and discovery to the same IDs and operations. Resolve mismatched assumptions immediately rather than waiting for the final hour. Use PRs and the review process, not direct pushes to `main`.
4. **Test and prepare:** run relevant checks and a real-browser walkthrough of the integrated merge candidate; record and inspect video for app changes where available. Exercise narrow-screen layouts, empty/error states, shared participant updates and reload behavior. Use the [merge review](merge-review.md) process; incomplete verification is not a pass.
5. **Deliver:** verify live link and account-free access for judges where feasible, rehearse one user's story, document AI/tool credits and honest evidence, and submit at the deadlines in [hackathon.md](hackathon.md). Ask organizers if rules or timing are unclear.

## Coordination rules

- One owner per shared file or interface; changes to shared contracts go through Workstream 1 and are communicated before dependent changes. Coordinate routing, shared components, dependencies and seed data to avoid merge conflicts.
- Feature owners may propose changes outside their area, but notify the owner before editing overlapping files. Review and merge policy applies to all branches and documentation.
- Preserve teammates' work and project history. Do not collect sensitive user data or imply mock data, simulated messaging, verification, booking or staff registration is real.
- If a task cannot be completed within the event, reduce scope visibly, leave an honest working stub, and prioritize the shared demo path over extra features.
