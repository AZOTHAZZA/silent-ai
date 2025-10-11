const CACHE_NAME = 'silence-ai-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './app/offline.js',
  './ai/generator.js',
  './core/module.js',
  './core/foundation.js',
  './core/silence_theory.js',
  './core/mathematical_silence.js',
  './fusion/fusionUI.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null))
    )
  );
  self.clients.claim();
});