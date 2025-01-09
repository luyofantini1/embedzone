// service_worker.js

self.addEventListener('install', event => {
    console.log('Service Worker installed');
});

self.addEventListener('activate', event => {
    console.log('Service Worker activated');
});

self.addEventListener('fetch', event => {
    console.log('Fetch intercepted:', event.request.url);
    // Aquí puedes manejar las respuestas según el tipo de solicitud
    event.respondWith(
        fetch(event.request)
            .then(response => {
                // Aquí puedes procesar la respuesta antes de devolverla
                return response;
            })
            .catch(error => {
                console.error('Fetch error:', error);
                return new Response('Error handling fetch', { status: 500 });
            })
    );
});
