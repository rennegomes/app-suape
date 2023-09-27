var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './ajuda.html',
        './menu.html',
        './opc.html',
        './perfil.html',
        './perfilCom.html',
        './perfilInfo.html',
        './qrcode.html',
        './redefinirsenha.html',
        './res.html',

        './css/cssAjuda.css',
        './css/cssIndex.css',
        './css/cssMenu.css',
        './css/cssOpc.css',
        './css/cssPerfil.css',
        './css/cssPerfilCom.css',
        './css/cssPerfilInf.css',
        './css/cssQrcode.css',
        './css/cssRedefinirsenha.css',
        './css/cssRes.css',

        './logos/LogoHorizontal.png',
        './logos/LogoVertical.png',

        './icones/Abastecimento.png',
        './icones/Alessandro-Henrique.png',
        './icones/Bares.png',
        './icones/elo-logo-3.png',
        './icones/Estetica.jpg',
        './icones/Hotel.png',
        './icones/mastercard-7-logo-png-transparent.png',
        './icones/Mercado.png',
        './icones/Moda.png',
        './icones/overlay.png',
        './icones/Restaurante.jpeg',
        './icones/sinal-de-interrogacao.png',
        './icones/visa.svg',

        './icones/Restaurantes/logo1.jpg',
        './icones/Restaurantes/logo2.jpg',
        './icones/Restaurantes/logo3.jpg',
        './icones/Restaurantes/logo4.jpg',
        './icones/Restaurantes/logo5.jpg',
        './icones/Restaurantes/logo6.jpg',
        './icones/Restaurantes/logo7.jpg',
        './icones/Restaurantes/logo8.jpg',
        './icones/Restaurantes/logo9.jpg',
        './icones/Restaurantes/logo10.jpg',

        './icones/APP/29.png',
        './icones/APP/40.png',
        './icones/APP/57.png',
        './icones/APP/58.png',
        './icones/APP/60.png',
        './icones/APP/80.png',
        './icones/APP/87.png',
        './icones/APP/114.png',
        './icones/APP/120.png',
        './icones/APP/180.png',
        './icones/APP/1024.png',
        './icones/APP/playstore.png',

      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});