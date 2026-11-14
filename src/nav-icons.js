// Each destination has an outline and a filled version; route state picks one.
const filled = {
  roves: '<path d="M21 3 3 12l7 2 2 7L21 3Z" fill="currentColor" stroke="currentColor"/><path d="m10 14 5-5" fill="none" stroke="#fff"/>',
  explore: '<circle cx="12" cy="12" r="10" fill="currentColor" stroke="currentColor"/><path d="m15.8 8.2-2.1 5.5-5.5 2.1 2.1-5.5z" fill="#fff" stroke="#fff"/>',
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
