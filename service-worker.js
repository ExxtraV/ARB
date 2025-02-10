/* service-worker.js */

const CACHE_NAME = "epub-mobile-cache-v1";
const CACHE_URLS = [
  "./",                  // might load mobile.html as root
  "./mobile.html",
  "./manifest.json",
  "./service-worker.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./LeverAction.epub",  // if you want to cache the entire epub offline
  // ... add any other files you'd like offline
];

// INSTALL: Cache the essential files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_URLS);
    })
  );
});

// ACTIVATE: Clean up old caches if needed
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// FETCH: "Cache-first" approach
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      // If not in cache, fetch from network
      return fetch(event.request);
    })
  );
});