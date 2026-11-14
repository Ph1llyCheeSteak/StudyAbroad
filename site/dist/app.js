import { createDemoStore } from './demo-store.js';

const store = createDemoStore(localStorage);
const el = id => document.getElementById(id);
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const dialog = el('trip-dialog');
const closeButton = '<button class="close" type="button" aria-label="Close">×</button>';
const formatDate = value => new Date(value + 'T12:00:00').toLocaleDateString('en-US', { month:'short', day:'numeric' });
function render() {
  const state = store.getState();
  const query = el('search').value.toLowerCase().trim();
  const trips = state.trips.filter(trip => (trip.title + ' ' + trip.destination).toLowerCase().includes(query));
  el('empty').hidden = trips.length !== 0;
  el('trip-list').innerHTML = trips.map(trip => `<article class="card"><div class="card-art"></div><div class="card-body"><span class="pill">${escape(trip.destination)} · SAMPLE TRIP</span><h3>${escape(trip.title)}</h3><div class="meta">◷ &nbsp;${formatDate(trip.startDate)} – ${formatDate(trip.endDate)} &nbsp; · &nbsp; ${trip.budgetAmount == null ? 'Budget open' : 'Around €' + escape(trip.budgetAmount) + ' / person'}</div><div class="card-bottom"><span>☻ &nbsp; ${trip.participantIds.length} going</span><button data-trip="${escape(trip.id)}">View trip ↗</button></div></div></article>`).join('');
  el('people-list').innerHTML = state.students.filter(s => s.id !== state.currentStudentId).map(s => `<article class="person"><span class="avatar">${escape(s.displayName[0])}</span><strong>${escape(s.displayName)}</strong><p>${escape(s.hostCity)} · ${escape(s.program)}</p><small>${s.interests.map(escape).join(' · ')}</small></article>`).join('');
}
function show(content) { el('dialog-content').innerHTML = '<div class="modal">' + content + '</div>'; dialog.showModal(); }
function openTrip(id) {
  const trip = store.getTrip(id); if (!trip) return;
  const current = store.getCurrentStudent();
  const going = trip.participantIds.includes(current.id);
  const names = trip.participantIds.map(id => store.getStudent(id)?.displayName ?? 'Student').map(escape).join(', ');
  show(`<div class="modal-top"><div><p class="kicker">SAMPLE TRIP · ${escape(trip.destination)}</p><h2>${escape(trip.title)}</h2></div>${closeButton}</div><p>◷ &nbsp;${formatDate(trip.startDate)} – ${formatDate(trip.endDate)} · ${trip.budgetAmount == null ? 'Budget open' : 'Around €' + escape(trip.budgetAmount) + ' per person'}</p><p>${escape(trip.description)}</p><p><strong>Going:</strong> ${names}</p><p>Demo only: changes are saved in this browser and are not sent to other people.</p><button class="button primary" id="join" data-id="${escape(trip.id)}" ${going ? 'disabled' : ''}>${going ? 'You’re going ✓' : 'Join this trip ↗'}</button>`);
}
function openCreate() {
  show(`<div class="modal-top"><div><p class="kicker">MAKE A PLAN</p><h2>Start a little adventure.</h2></div>${closeButton}</div><p>Make a sample trip. It stays in this browser.</p><form id="create-form"><label>Trip title<input name="title" required maxlength="80" placeholder="A weekend in Lisbon"></label><label>Destination<input name="destination" required maxlength="60" placeholder="Lisbon"></label><label>Departure<input name="startDate" type="date" required></label><label>Return<input name="endDate" type="date" required></label><label>Budget per person (€), optional<input name="budgetAmount" type="number" min="0" step="1" placeholder="150"></label><label>A short note<textarea name="description" rows="2" maxlength="240" placeholder="What’s the plan?"></textarea></label><p id="form-error" class="error" role="alert"></p><button class="button primary">Create sample trip ↗</button></form>`);
}
document.addEventListener('click', event => {
  const trip = event.target.closest('[data-trip]'); if (trip) openTrip(trip.dataset.trip);
  if (event.target.closest('.close')) dialog.close();
  if (event.target.id === 'open-create') openCreate();
  if (event.target.id === 'join') { try { store.joinTrip(event.target.dataset.id); dialog.close(); render(); notify('You joined this sample trip.'); } catch (error) { notify(error.message); } }
  if (event.target.id === 'reset') { try { store.reset(); render(); notify('Demo reset.'); } catch (error) { notify(error.message); } }
});
document.addEventListener('submit', event => {
  if (event.target.id !== 'create-form') return;
  event.preventDefault();
  try { const values = Object.fromEntries(new FormData(event.target)); store.createTrip(values); dialog.close(); render(); notify('Your sample trip is ready.'); }
  catch (error) { el('form-error').textContent = error.message; }
});
el('search').addEventListener('input', render);
let timeout;
function notify(message) { const toast = el('toast'); toast.textContent = message; toast.style.display = 'block'; clearTimeout(timeout); timeout = setTimeout(() => toast.style.display = 'none', 3500); }
render();

