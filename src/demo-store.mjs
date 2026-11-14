import { initialData } from './demo-data.mjs';

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
    joinTrip(id, studentId = data.currentStudentId) {
      const trip = data.trips.find(item => item.id === id);
      if (!trip || !data.students.some(student => student.id === studentId)) throw new Error('Trip or student not found.');
      if (!trip.participantIds.includes(studentId)) { trip.participantIds.push(studentId); persist(); }
      return structuredClone(trip);
    },
    reset() { data = fresh(); persist(); return snapshot(); },
  };
}
