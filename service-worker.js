const cacheName = 'helloWolrd'

self.addEventListener('install', event => {
  event.waitUtil(caches.open(cacheName)).then(cache => {
    cache.addAll([
      '/index.js'
    ])
  })
})

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request)).then(res => {
    console.log(res)
    if (res) {
      return res
    }
    return fetch(event.request)
  })
})
