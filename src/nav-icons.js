// Each destination has an outline and a filled version; route state picks one.
const filled = {
  roves: '<circle cx="4.5" cy="18.5" r="1.8" fill="currentColor"/><path d="M4 19c0-3 8-1 8-4s-7-2-7-5 6-3 9-3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="1.4 3"/><path d="m17 3 5 5m0-5-5 5" fill="none" stroke="currentColor" stroke-width="2.6"/>',
  explore: '<circle cx="12" cy="12" r="9" fill="currentColor" stroke="currentColor"/><path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9S9.5 5.5 12 3Z" fill="none" stroke="#fff" stroke-width="1.5"/>',
  crew: '<circle cx="8" cy="8.5" r="3.5" fill="currentColor" stroke="none"/><path d="M2.5 19a5.5 5.5 0 0 1 11 0v1h-11z" fill="currentColor" stroke="none"/><path d="M14 6h3.5a3.5 3.5 0 0 1 3.5 3.5v3a3.5 3.5 0 0 1-3.5 3.5H16l-2.5 2v-4a7 7 0 0 0 .5-8z" fill="currentColor" stroke="none"/>'
};
document.querySelectorAll('.bottom-nav [data-nav]').forEach(link => {
  const icon=link.querySelector('svg');
  if(!icon || !filled[link.dataset.nav])return;
  const active=icon.cloneNode(false);
  active.classList.add('nav-icon-filled');
  active.innerHTML=filled[link.dataset.nav];
  icon.classList.add('nav-icon-outline');
  icon.after(active);
});
