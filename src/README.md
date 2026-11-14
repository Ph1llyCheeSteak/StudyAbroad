# Local demo data adapter

This branch provides a framework-independent, browser-local prototype store. It uses fictional sample data and is not authentication, a shared database, or a source of verified profiles. Changes persist only in the same browser storage and are not synchronized across users or devices.

Import `createDemoStore` from `demo-store.mjs` and pass a Storage-compatible object such as `window.localStorage`. `getState`, `getCurrentStudent`, `getStudent(id)` and `getTrip(id)` return snapshots. `joinTrip(id)` is idempotent; `leaveTrip(id)` prevents the creator from leaving their own trip. `createTrip({title, destination, startDate, endDate, budgetAmount, description})` accepts ISO calendar dates, checks their order, creates a local identifier and treats the optional EUR budget as a per-person planning estimate. `reset()` restores the fictional seed data. Mutating methods throw on invalid input or unavailable storage; surface errors in the user interface.

Run the local contract checks from the repository root with `node --test tests/demo-store.test.mjs`. The implementation is a starting point for team review, not an agreed production API; reconcile it with teammates' work before integrating.
