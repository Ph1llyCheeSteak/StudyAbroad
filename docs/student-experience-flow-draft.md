# Student experience flow — working proposal

Owner: Maggie · 2026-11-14 · Status: draft for discussion, not an implemented specification. Related: [issue #13](https://github.com/Ph1llyCheeSteak/StudyAbroad/issues/13) and [issue #7](https://github.com/Ph1llyCheeSteak/StudyAbroad/issues/7).

## Purpose and evidence

Help a student find student-relevant advice about a city, choose a place, and use it in a trip plan. The initial audience is students abroad or preparing to go; their needs and the best entry point remain hypotheses.

One voluntary conversation with a student who studied abroad, recruited through a personal connection, suggests a potential gap in access to useful student perspectives after arrival. The interviewer clarified that returnee panels were valued before departure; this is a paraphrased report, not a verified quotation or a representative finding. The student also described uncertainty around flight prices and advance planning and noted difficulty finding people for side trips. The app concept was introduced in a leading question, so enthusiasm about it is not validation. No usability sessions have been reported yet.

Proposed needs to test: (1) accessible advice from students with relevant experience; (2) useful context such as approximate costs and what a place is like; (3) a clear way to turn a discovery into a plan and understand options for connecting with others.

## Core demo journey

1. **Explore / choose a city.** Offer a city list and, when available, a map. Student selects Barcelona. Proposed label: “Explore cities.” Manual selection works without location permission.
2. **City bulletin.** Show sample posts about places, each identifying its place, category and student-oriented context. Label all demo posts “Sample recommendation.” Proposed heading: “Barcelona, through student eyes.”
3. **Place pin / detail.** Selecting a post or pin opens the same place detail. Show the sample recommendation, category and any clearly labeled example cost context. No claimed verified reviews or live prices. Action: “Save to a trip.”
4. **Save.** Choose the sample Barcelona trip, confirm “Saved to your trip,” and offer “View trip” or “Keep exploring.” Saving the same place twice should not create a duplicate. If saving fails, explain that and offer retry.
5. **Trip.** Show the same saved place in the sample trip with destination and dates. Offer “Explore Barcelona” to return to the city board. Make it clear whether the save lasts only on this browser.
6. **Connect / join — proposed next step.** Show what joining means before the student acts. In a local-only demo, do not imply a real person was contacted or a place was reserved. If no functional join exists, use clearly labeled sample content rather than an active promise.

The current foundation contract documents fictional city and place fixtures, browser-local storage and no shared account or messaging backend. The demo uses a city list until a map is built, and only Barcelona has a sample trip. This flow is a proposal to compare with the latest app; it does not claim all steps or wording have shipped.

## Messaging and longer-term flows

- **Messaging:** A student could select “Message” on a profile, review who will receive it and send a first message. This requires a real account, shared service and private access controls; until then, show a clearly labeled concept rather than implying private delivery.
- **Planning to discovery:** From a trip, return to its city board to find more recommendations; saved places should refer to the same place record.
- **Student contribution:** Later, a student could share a place and their experience; define attribution, privacy and moderation before treating recommendations as real.
- **Flight timing:** The interview surfaced a question about when to book, not evidence that the demo can predict fares. Accurate flight data and any price advice require a separate decision.

## States and copy to test

- No city matches: “No cities found. Try another search.”
- No posts yet: “No recommendations here yet. Explore another city.”
- No trip for a city: “There isn't a sample trip for this city yet.” Offer a return path; don't imply creation exists if it doesn't.
- Save fails: “We couldn't save this place on this device. Please try again.”
- Saved: “Saved to your trip on this device.”
- Missing place: “We couldn't find that place. Return to the city board.”
- Screen labels and buttons must work on mobile and with a keyboard; status messages should be understandable without relying on color.

## Quick usability walkthrough

With one or two voluntary students, ask: “You're planning a weekend in Barcelona. Find a recommendation and add it to a trip.” Don't explain the controls. Observe where they tap, whether they find the saved place, and whether they understand what is sample or local to their device. Ask what information would help them trust the recommendation, and what they expected “join” or “message” to do. Record notes privately, then report only anonymized observations with the actual participant count. No tests are claimed here.

## Decisions to resolve

- Which city-board and place details are most useful and feasible with available data?
- What should “join” mean and what happens after it? Who sees interest?
- Are profiles and messages in demo scope, and what is simulated versus shared?
- What source, date and context should accompany cost or recommendation information?
- Which visual and wording decisions should Maggie approve for the integrated app?

## Acceptance for this proposal

A reviewer can follow the city → recommendation → same saved place → trip → city journey, identify sample/local-only behavior, and see empty and failure states. Proposed features remain separate from existing functionality and one-person research observations remain distinct from assumptions.
