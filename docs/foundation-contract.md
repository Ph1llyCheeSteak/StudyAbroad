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
