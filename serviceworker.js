self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("sw-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./assets/style.css",
        "./assets/app.js",
        "./img/favicon.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
