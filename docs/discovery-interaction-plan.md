# City discovery: mobile interaction plan

Status: proposed, 2026-11-14. This is a plan for issue #11, not an implemented feature or agreed shared interface. The foundation owner must publish the stack, paths, models, fixture IDs, routes, persistence and error conventions; Lucky and Philippe must agree the trip handoff before wiring.

## Demo outcome

A student chooses a city, opens a clearly labeled fictional student recommendation, and saves that exact place to a trip. The trip view then displays the same shared place ID. The initial journey uses synthetic data and must state the actual persistence boundary; it must not imply that reviews or interactions are verified or shared between devices.

## Proposed screens and interactions

1. **Explore / city selection.** Show a world view if feasible and a keyboard-accessible list of available cities as an equal way to choose. Each city control has a clear name and country. Selecting one opens its city board using the shared city ID. A map must never be the only means of selection.
2. **City board.** Show the city name and a back control, followed by sample recommendations for places such as restaurants, hostels and nightlife. Each card identifies the place, category and a short student tip, and labels the content as fictional sample data. Select a card to open its detail. Category filtering and voting are secondary to the end-to-end journey; only wire them if supported by the agreed shared data and within scope.
3. **Place detail.** Show the same place name, city, category and tip, with an explicit “Add to trip” action. Returning to the board preserves the selected city and, where practical, the prior scroll and filter. Do not present a sample recommendation as verified.
4. **Trip handoff.** Use the shared navigation and operation agreed with Lucky and Philippe, passing the canonical place ID rather than copying or recreating a place. Let the trip flow own trip selection, save semantics and success/failure. On success, show an accurate confirmation and a way to view the trip; on cancellation, return to the place. Never claim a place was saved before the shared operation succeeds. The trip must resolve that ID from the same source.

## States and accessibility

- **Loading:** identify the content being loaded and provide a status announcement where the agreed data layer is asynchronous.
- **No cities:** explain that no sample cities are available; provide a retry only when retry is meaningful.
- **Empty city or filter:** say there are no recommendations in the selected city/category; offer to clear the filter or choose another city.
- **Missing city or place ID:** show a readable not-found state with a route back to city selection or the city board.
- **Load/save failure:** explain that the action did not complete and offer retry or a safe return. Preserve the selected place where possible.
- **Navigation:** support browser/device back and visible back controls; retain context through the shared router. Use semantic buttons and links, visible focus, useful accessible names and logical focus after navigation. All controls must work without a map gesture or pointer.
- **Mobile:** use a single-column layout, readable text and comfortable touch targets; avoid horizontal scrolling and preserve access to the primary action at narrow widths.

## Integration questions for Philippe and Lucky

- Which branch and commit contain the runnable shell, shared modules and the actual component paths?
- What are the canonical City and Place shapes, fixture IDs, retrieval methods and error/loading conventions?
- What route parameters and back-navigation behavior does the shell support?
- What action carries a place ID to a trip, who chooses the trip, and what do success, cancellation, duplicate saves and failure return?
- What is the single persistence boundary, including reload and cross-device behavior? How should that be explained in the UI?
- If voting is included, what is the shared vote operation and ranking rule? Do not imply a vote count reflects live popularity or crowding.

## Acceptance and verification

- On a narrow screen, choose a city by keyboard or touch, open a fictional recommendation, and invoke the agreed trip action with the same shared place ID.
- Verify the place appears in the selected trip after a successful save, and that cancellation, duplicate handling, missing IDs and failures follow the agreed contract.
- Check back navigation, focus, empty and error states, and the actual reload behavior. Record the device/viewport, test steps and a screenshot or short demo with the eventual PR.
- Keep discovery changes in agreed owned files. No separate store, real student data, booking, live location tracking or publication is part of this plan.
