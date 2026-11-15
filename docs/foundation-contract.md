# Rove demo foundation (proposed, 2026-11-14)

This static HTML/CSS/JavaScript prototype uses ES modules and requires no build or package installation. From the repository root run `python -m http.server 8000` and open http://localhost:8000. Cloudflare Pages serves the root directly from `main`; see `project-setup.md` for local feature and integration testing.

The demo journey is Explore → city board → recommendation → save to the sample Rove → view saved place. Crew contains fictional profiles; messaging and real connections are not implemented. Map selection is represented by city cards until a map is built.

## Shared interface

- `src/data.js` exports `cities`, `places`, `students`, and `initialTrips`. City: id, name, country, position, description, tag, color. Place: id, cityId, name, category, tip, author, votes. Trip: id, cityId, title, dates, placeIds, participantIds. Student: id, displayName, city, interests. All records are synthetic.
- Stable IDs: cities `barcelona`, `madrid`, `lisbon`; places `bunkers`, `mercat`, `retiro`, `alfama`; sample trip `trip-barcelona`. Only Barcelona currently has a trip to save into.
- `src/store.js` exports `readState()`, `savePlace(tripId, placeId)` (idempotent), and `vote(placeId, direction)` (toggle +1/-1). IDs pass directly between discovery and trips. These are initial proposals for Andrew and Lucky to coordinate before changing.
- Hash routes: `#explore`, `#explore/:cityId`, `#explore/:cityId/:placeId`, `#roves`, `#crew`. Back links return from place to city and city to Explore; browser history also works.
- All state is browser-local via localStorage, with in-memory fallback if storage is unavailable; there is no login, backend, shared state, or network loading. Save reports storage failure. Votes and people are illustrative, not real community activity. No loading indicator is needed for synchronous fixtures. Missing routes show a recovery link.

The palette uses Maggie's approved color study; remaining branding is provisional. This is a foundation for team review, not a finalized contract or a production service.

## Roves planning prototype (2026-11-14)

Planning and sample quests use the existing browser-local trip records and stable city/place IDs. `createTrip({cityId, title, dates, placeIds})` returns `{id, saved}`; `addTripParticipant(tripId, studentId)` adds a sample friend locally and returns whether persistence succeeded. No invitation, booking, or notification is sent. The city pin popup lets users choose among plans in that city when saving a place. Quest ideas are fictional suggestions, not claims that real students took those trips. Coordinate changes to these shared functions and trip fields in integration reviews.

## Trip-sharing and program-view concept (2026-11-14)

`#provider` is an illustrative program view accessible from the account menu. Its fixed example engagement counts are fictional and are not derived from real users or connected to analytics. It links to the shared `barcelona-afternoon` sample quest at `#roves/quests`; students can use that existing quest to create a local trip. This is not an operating provider portal.

Each Roves plan offers a `Share trip` dialog that reads that plan's existing city, dates, place IDs and participant IDs from `rove-demo-v1`. It previews separately selected fields for a trusted contact or program. The choices are temporary; nothing is sent, registered, or stored by the dialog. No messages or live location are included. This is a design concept, not a registration integration, emergency service, safety guarantee, or account/permission system. Existing browser-local planning and quest data remain unchanged.

## Board post saving (work in progress)

Board post snapshots are stored in `rove-demo-v1.boardPosts` with `board:` IDs, alongside the existing saved IDs. Roves can display and select these snapshots without replacing existing place IDs. Board-created post content and replies remain tab-session data, so their source links are only reliable in that session. This prototype still needs full trip, refresh, failure and mobile testing before issue #65 is complete.

## Pitch journey iteration (2026-11-14)

Crew opens on connections; accepting a fictional request makes that student selectable in trip planning. A trip conversation links back to its specific plan. Board-post snapshots can be added to a plan and its sharing preview. All interactions remain browser-local simulations; no messages or invitations are sent.

## Trip planning handoff

Saved board posts link to `#roves/new/:encodedPostId`, opening a new plan with its city and saved post selected. This only prepares a local draft; the user must create the plan. Participant chips link to `#crew/profile/:studentId`, a fictional student preview. No real profile, invitation or message is created.

Saved user-created post snapshots update when their title changes. If the source post is deleted during the tab session, existing trip entries remain visible and are labeled removed rather than linking to a missing post. Source posts are still session-scoped; snapshots and plans use browser storage.

## Demo reset (2026-11-15)

Reloading an app page clears the prototype trip, saved-post and session-post data and returns to Explore. Ordinary navigation between pages retains that data for the current demonstration. This affects only Rove demo storage, not other browser data.
