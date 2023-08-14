import {initMap} from './render-map.js';

initMap();

// import {getData} from './api.js';

// const mapElement = document.querySelector('#map-canvas');

// const ZOOM = 13;
// const cityCenter = {
//   lat: 35.6895000,
//   lng: 139.6917100,
// };

// const startCoordinate = {
//   lat: 35.66023,
//   lng: 139.73007
// };

// const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

// const map = L.map(mapElement)
//   .on('load', () => {
// console.log('Карта инициализирована');
//формф публикации нового жилья становиться доступной
//получить данные с сервера
// getData()
//   .then((response) => {
//анализировать ответ
// if (response.ok) {
//   return response.json();
// } else {
//error messagemapElement
//   }
// })
// .then((data) => {
//   console.log(data);
//при нормальных данных: отрисовать пины, разблокировать фильтр

//   data.forEach((item) => {
//     const marker = L.marker({lat: item.location.lat, lng: item.location.lng});
//     marker.addTo(map).bindPopup(item.offer.title);
//   });

// })
// .catch(() => {
//error server message
//       });
//   })
//   .setView(startCoordinate, ZOOM);

// L.tileLayer(TILE_LAYER, {
//   attribution: COPYRIGHT
// }).addTo(map);

// const marker = L.marker(startCoordinate);

// marker.addTo(map)
//   .bindPopup('hello!');
