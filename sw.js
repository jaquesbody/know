// sw.js - Minimal Service Worker for PWA
self.addEventListener('install', (e) => {
  e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Just let the network handle it for now (no caching logic needed for install prompt)
  e.respondWith(fetch(e.request));
});