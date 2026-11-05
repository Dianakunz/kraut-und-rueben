/* Kraut und Rüben – Service Worker (Offline-Fähigkeit)
   Die App holt sich neue Versionen automatisch aus dem Netz.
   Diese Datei muss nur geändert werden, wenn neue Dateien
   (z. B. Bilder) dazukommen. */
const CACHE = "kur-0.3.0";
const DATEIEN = [
  "./",
  "./index.html",
  "./pflanzen.js",
  "./manifest.webmanifest",
  "./bilder/ruebe.png",
  "./bilder/favicon.png",
  "./bilder/apple-touch-icon.png",
  "./bilder/icon-192.png",
  "./bilder/icon-512.png",
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(DATEIEN)));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(namen => Promise.all(namen.filter(n => n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", e => {
  if (e.data === "jetzt-aktivieren") self.skipWaiting();
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  // Wetter und Ortssuche immer live aus dem Netz (die App merkt sich selbst den letzten Stand)
  if (url.origin !== location.origin || e.request.method !== "GET") return;
  // Erst das Netz fragen (damit Updates sofort ankommen), ohne Internet den gespeicherten Stand nehmen
  e.respondWith(
    fetch(e.request)
      .then(antwort => {
        if (antwort.ok) {
          const kopie = antwort.clone();
          caches.open(CACHE).then(c => c.put(e.request, kopie));
        }
        return antwort;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true })
        .then(treffer => treffer || caches.match("./index.html")))
  );
});
