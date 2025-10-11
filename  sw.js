const CACHE_NAME = 'silence-ai-cache-v1';
const BASE_PATH = '/silent-ai/'; // GitHub Pages のサブディレクトリ名
const urlsToCache = [
  BASE_PATH,
  BASE_PATH + 'index.html',
  BASE_PATH + 'manifest.json',
  BASE_PATH + 'app/offline.js',
  BASE_PATH + 'ai/generator.js',
  BASE_PATH + 'core/module.js',
  BASE_PATH + 'core/foundation.js',
  BASE_PATH + 'core/silence_theory.js',
  BASE_PATH + 'core/mathematical_silence.js',
  BASE_PATH + 'fusion/fusionUI.js'
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