import { initialData } from './demo-data.js';

// Local-only demo: browser storage is private to this browser, not shared online.
export function createDemoStore(storage, key = 'trvlr-demo-v1') {
  const fresh = () => structuredClone(initialData);
  let data;
  try {
    const saved = JSON.parse(storage.getItem(key));
    data = saved && Array.isArray(saved.students) && Array.isArray(saved.trips) && Array.isArray(saved.recommendations) ? saved : fresh();
  } catch { data = fresh(); }
  const snapshot = () => structuredClone(data);
  const persist = () => storage.setItem(key, JSON.stringify(data));
  return {
    getState: snapshot,
    getCurrentStudent: () => structuredClone(data.students.find(student => student.id === data.currentStudentId) ?? null),
    getStudent: id => structuredClone(data.students.find(student => student.id === id) ?? null),
    getTrip: id => structuredClone(data.trips.find(trip => trip.id === id) ?? null),
    createTrip(input) {
      const title = String(input.title ?? '').trim();
      const destination = String(input.destination ?? '').trim();
      const validDate = value => /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`)) && new Date(`${value}T00:00:00Z`).toISOString().slice(0, 10) === value;
      if (!title || !destination || !validDate(input.startDate) || !validDate(input.endDate) || input.startDate > input.endDate) throw new Error('Enter a title, destination and valid dates in order.');
      const budget = input.budgetAmount === '' || input.budgetAmount == null ? null : Number(input.budgetAmount);
      if (budget !== null && (!Number.isFinite(budget) || budget < 0)) throw new Error('Enter a valid budget.');
      const trip = { id: globalThis.crypto.randomUUID(), title, destination, startDate: input.startDate, endDate: input.endDate, budgetAmount: budget, currency: 'EUR', description: String(input.description ?? '').trim(), creatorId: data.currentStudentId, participantIds: [data.currentStudentId] };
      data.trips.push(trip); persist(); return structuredClone(trip);
    },
    joinTrip(id, studentId = data.currentStudentId) {
      const trip = data.trips.find(item => item.id === id);
      if (!trip || !data.students.some(student => student.id === studentId)) throw new Error('Trip or student not found.');
      if (!trip.participantIds.includes(studentId)) { trip.participantIds.push(studentId); persist(); }
      return structuredClone(trip);
    },
    leaveTrip(id, studentId = data.currentStudentId) {
      const trip = data.trips.find(item => item.id === id);
      if (!trip || !data.students.some(student => student.id === studentId)) throw new Error('Trip or student not found.');
      if (trip.creatorId === studentId) throw new Error('The trip creator cannot leave their own trip.');
      trip.participantIds = trip.participantIds.filter(id => id !== studentId); persist(); return structuredClone(trip);
    },
    reset() { data = fresh(); persist(); return snapshot(); },
  };
}
