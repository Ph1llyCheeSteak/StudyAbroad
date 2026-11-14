const account = document.querySelector('.account');
const trigger = account.querySelector('.account-trigger');
const menu = document.querySelector('#account-menu');

function setOpen(open, restoreFocus = false) {
  menu.hidden = !open;
  trigger.setAttribute('aria-expanded', String(open));
  trigger.setAttribute('aria-label', open ? 'Close account menu' : 'Open account menu');
  if (restoreFocus) trigger.focus();
}

trigger.addEventListener('click', () => setOpen(menu.hidden));
document.addEventListener('click', event => {
  if (!menu.hidden && !account.contains(event.target)) setOpen(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !menu.hidden) setOpen(false, true);
});
window.addEventListener('hashchange', () => setOpen(false));
