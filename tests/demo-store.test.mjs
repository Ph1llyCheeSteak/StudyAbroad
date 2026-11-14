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

test('trip creation validates dates and preserves a consistent creator', () => {
  const cache = new Map();
  const storage = { getItem: key => cache.get(key) ?? null, setItem: (key, value) => cache.set(key, value) };
  const store = createDemoStore(storage);
  assert.throws(() => store.createTrip({ title: 'Test', destination: 'Paris', startDate: '2027-02-30', endDate: '2027-03-01' }), /valid dates/);
  const trip = store.createTrip({ title: ' Paris ', destination: ' Paris ', startDate: '2027-02-01', endDate: '2027-02-02', budgetAmount: 42 });
  assert.equal(trip.title, 'Paris');
  assert.deepEqual(trip.participantIds, [store.getCurrentStudent().id]);
  assert.deepEqual(createDemoStore(storage).getTrip(trip.id), trip);
  assert.throws(() => store.leaveTrip(trip.id), /creator/);
});

test('storage failure does not leave phantom updates in memory', () => {
  const store = createDemoStore({ getItem: () => null, setItem: () => { throw new Error('Storage unavailable'); } });
  const before = store.getState();
  assert.throws(() => store.joinTrip('trip-1'), /Storage unavailable/);
  assert.deepEqual(store.getState(), before);
  assert.throws(() => store.createTrip({title:'Trip', destination:'Paris', startDate:'2027-01-01', endDate:'2027-01-02'}), /Storage unavailable/);
  assert.deepEqual(store.getState(), before);
});
