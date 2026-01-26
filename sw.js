const CACHE_NAME = 'mini';
const urlsToCache = [
  '/mini/',
  '/mini/index.html',
  '/mini/manifest.json',
  '/mini/sw.js',
  '/mini/icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
