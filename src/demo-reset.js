// A browser refresh begins a fresh presentation, while normal page navigation
// retains the sample trip and posts for the duration of the demo.
(() => {
  const navigation = performance.getEntriesByType?.('navigation')?.[0];
  if (navigation?.type !== 'reload') return;
  try { localStorage.removeItem('rove-demo-v1'); } catch {}
  try { sessionStorage.removeItem('rove-local-posts-v1'); } catch {}

  const home = new URL('./index.html#explore', location.href);
  if (location.pathname.endsWith('/index.html') || location.pathname.endsWith('/')) {
    history.replaceState(null, '', home.href);
  } else {
    location.replace(home.href);
  }
})();
