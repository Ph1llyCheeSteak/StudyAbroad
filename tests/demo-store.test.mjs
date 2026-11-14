import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createDemoStore } from '../src/demo-store.mjs';

test('joining updates one shared trip, survives reload, and is idempotent', () => {
  const cache = new Map();
  const storage = { getItem: key => cache.get(key) ?? null, setItem: (key, value) => cache.set(key, value) };
  const store = createDemoStore(storage);
  store.joinTrip('trip-1');
  store.joinTrip('trip-1');
  assert.equal(store.getTrip('trip-1').participantIds.filter(id => id === 'student-1').length, 1);
  assert.deepEqual(createDemoStore(storage).getTrip('trip-1'), store.getTrip('trip-1'));
  assert.throws(() => store.joinTrip('missing'), /not found/);
  store.reset();
  assert.equal(store.getTrip('trip-1').participantIds.includes('student-1'), false);
});
