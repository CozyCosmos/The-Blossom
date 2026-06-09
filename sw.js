/* The Blossom — service worker (offline shell + alarm notifications) */
const CACHE = 'blossom-v6';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const isHTML = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');
  if (isHTML) {
    // network-first for the app shell so updates show, fall back to cache offline
    e.respondWith(
      fetch(req).then(resp => { const c = resp.clone(); caches.open(CACHE).then(cc => cc.put('./index.html', c)); return resp; })
        .catch(() => caches.match('./index.html'))
    );
  } else {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(resp => {
      const c = resp.clone(); caches.open(CACHE).then(cc => cc.put(req, c)); return resp;
    }).catch(() => r)));
  }
});
// Focus/open the app when an alarm notification is tapped
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
    for (const c of cs) { if ('focus' in c) return c.focus(); }
    if (self.clients.openWindow) return self.clients.openWindow('./');
  }));
});
