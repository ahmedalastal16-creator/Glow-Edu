const cacheName = 'glow-ai-v2';
// السطر اللي تحت هو اللي لازم تركز فيه:
const assets = [
  '/',
  'index.html',
  'manifest.json',
  '192.png' // تأكد إن اسم الصورة مطابق تماماً للاسم في المجلد
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
