# TRVLR demo evaluation

Working draft, November 14, 2026. This is an internal assessment, not evidence of user demand or production readiness.

## What is demonstrated

A fictional student can browse and search sample trips, view a trip, join it locally, and create a sample trip. The same browser retains changes after reload. Sample student cards illustrate the proposed community. The demo uses Maggie's five approved palette-study colors; the rest of the design is a draft.

## What is not demonstrated

This is not a live social network. Data stays in one browser and is not shared across devices; sample profiles are not real or verified. There is no sign-in, messaging, moderation, bookings, real travel data, live group coordination or official staff registration. A private Sites link is an owner-only preview, not a public judge link. No claim of user adoption, actual savings, or safety improvement has been validated.

## Product and business hypotheses

- **User and problem:** students abroad who want affordable independent trips may struggle to find compatible companions and coordinate plans. Validate through interviews about a recent actual trip.
- **Value:** a simple path from discovering a trip to coordinating with peers may be more compelling than another standalone itinerary planner. Compare against existing group chats, [Wanderlog](https://wanderlog.com/home), and student-focused [ScholarRoam](https://scholarroam.com/); the distinction and willingness to switch remain unproven.
- **Distribution:** test whether one host city and a few existing programs or student organizations can provide enough relevant trips and students. This is a proposed pilot, not a partnership or established channel.
- **Revenue:** possible institutional sponsorship, travel-partner referrals, or optional student subscription are ideas only. Interview potential payers and assess incentives, privacy and trust before choosing a model; do not represent any as an established agreement.
- **AI:** the event requires disclosure of AI use. An AI-powered product feature is not yet selected or implemented; only add one if it materially helps users and works reliably in the demo.

## Evaluation performed

The local browser walkthrough opened a sample trip, joined it, observed the count update, and created a sample trip. Three Node tests cover idempotent joining, reload persistence, validation and storage-write failure. An independent reviewer checked the committed source, noted mobile navigation labels and failed-storage handling, and confirmed fixes. The reviewer did not perform an independent browser walkthrough or video. The deployed Site loaded for its owner; accessibility, usability with real students, cross-device behavior, production security and public access have not been established.

## Next experiments

1. Test the discovery and joining journey with several real target students using synthetic data. Record where they hesitate and whether they would replace or supplement group chats; do not invent evidence.
2. Agree on one team stack and shared contract before integrating teammate branches; replace browser-local state with a deliberately chosen multi-user data layer only when appropriate.
3. Confirm brand tokens and typography with Maggie, then assess mobile usability, keyboard access, contrast and accessibility of real content.
4. Define a safe account and community model before inviting users to share real personal or travel information. Follow the event's rule against collecting sensitive data.
5. Arrange a judge-accessible deployment and rehearse the four-minute story, keeping a demo backup and accurately disclosing what works. Confirm current requirements and deadlines in event Discord.
