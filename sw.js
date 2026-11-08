// Offline-Cache. Bei jeder Änderung an index.html die Version erhöhen,
// damit installierte Apps die neue Fassung laden.
const VERSION = "v9";
const CACHE = "erzaehler-tafel-" + VERSION;
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/base.css",
  "css/overview.css",
  "css/settings.css",
  "css/adventure.css",
  "css/challenges.css",
  "css/modals.css",
  "css/profiles.css",
  "css/tools.css",
  "css/libraries.css",
  "js/config.js",
  "js/data/lore-glossary.js",
  "js/data/rules-glossary.js",
  "js/data/action-grimoire.js",
  "js/data/themebook-questions.js",
  "js/ui/glossary-modal.js",
  "js/ui/profiles-modal.js",
  "js/ui/map-modal.js",
  "js/ui/rules-glossary-modal.js",
  "js/ui/grimoire-modal.js",
  "js/ui/themebook-modal.js",
  "js/ui/search.js",
  "js/ui/store-modal.js",
  "js/ui/dice-tool.js",
  "js/ui/challenge-library.js",
  "js/ui/places-library.js",
  "js/ui/characters-library.js",
  "js/data/portraits.js",
  "js/data/adventures.js",
  "js/data/adventure-1.js",
  "js/data/adventure-2.js",
  "js/data/adventure-3.js",
  "js/data/adventure-4.js",
  "js/data/adventure-5.js",
  "js/data/adventure-6.js",
  "js/data/adventure-7.js",
  "js/data/campaign-aftermath.js",
  "js/data/challenge-library.js",
  "js/data/general-store.js",
  "js/data/dice-tables.js",
  "js/data/journey-library.js",
  "js/data/revelations.js",
  "js/data/player-profiles.js",
  "js/profiles.js",
  "js/state.js",
  "js/export/summary-pdf.js",
  "js/export/profile-print.js",
  "js/ui/topbar.js",
  "js/ui/views.js",
  "js/ui/interactions.js",
  "js/main.js",
  "assets/dales-map.jpg",
  "assets/icons/themebook-crown.png",
  "assets/icons/themebook-leaf.png",
  "assets/icons/themebook-swords.png",
  "assets/portraits/aldermanBeaks.webp",
  "assets/portraits/aleonora.webp",
  "assets/portraits/azeria.webp",
  "assets/portraits/coldHeartedStabber.webp",
  "assets/portraits/concernedVillagers.webp",
  "assets/portraits/gajowy.webp",
  "assets/portraits/greenMaiden.webp",
  "assets/portraits/kerrid.webp",
  "assets/portraits/mackross.webp",
  "assets/portraits/mireling1.webp",
  "assets/portraits/mireling2.webp",
  "assets/portraits/mireling3.webp",
  "assets/portraits/paintedBeast.webp",
  "assets/portraits/poisonedWurm.webp",
  "assets/portraits/rosamund.webp",
  "assets/portraits/sorrowbalm.webp",
  "assets/portraits/stormhelmKnight.webp",
  "assets/portraits/thaneCodprice.webp",
  "assets/portraits/verdan.webp",
  "assets/portraits/wakenSentry.webp",
  "assets/portraits/walric.webp",
  "assets/portraits/willow.webp",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
  "css/edit.css",
  "js/ui/edit-mode.js",
  "css/responsive.css"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
// Netzwerk zuerst (immer aktuell), bei fehlendem Netz aus dem Cache.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return r;
    }).catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
  );
});
