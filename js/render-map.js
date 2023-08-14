import {getData} from './api.js';
import {createCard} from './create-popup.js';

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const GET_URL = 'https://29.javascript.pages.academy/keksobooking/data';
const MAP_ZOOM = 13;
const DECIMALS = 5;

const START_COORDINATE = {
  lat: 35.66023,
  lng: 139.73007
};

const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);

const addressInput = document.querySelector('#address');

let interactiveMarker;

const icon = L.icon ({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

const setStartAddressValue = () => {
  addressInput.value = `${START_COORDINATE.lat}, ${START_COORDINATE.lng}`;
};

const setLocation = (target) => {
  const location = target.getLatLhg();
  addressInput.value = `${location.lat.toFixed(DECIMALS)}, ${location.lng.toFixed(DECIMALS)}`;
};

const createPinMarkers = (data) => {
  markerGroup.addTo(map);
  data.forEach((offer) => {
    const marker = L.marker(offer.location,
      {
        icon,
      }
    );
    marker.addTo(markerGroup).bindPopup(createCard(offer));
  });
};

const onMarkerMove = (evt) => setLocation(evt.target);

const resetMap = () => {
  interactiveMarker.setLatLng(START_COORDINATE);
};

const onSuccess = (data) => {
  createPinMarkers(data);
};

const onError = () => {
  console.log('ошибка');
};

const initMap = () => {
  map.on('load', () => {
    console.log('Карта инициализирована');
    getData(GET_URL, onSuccess, onError);
    setStartAddressValue(START_COORDINATE);
  })
    .setView(START_COORDINATE, MAP_ZOOM);

  L.tileLayer(TILE_LAYER, {
    attribution: COPYRIGHT})
    .addTo(map);

  interactiveMarker = L.marker(START_COORDINATE,
    {
      draggable: true,
      icon: L.icon({
        iconUrl: './img/main-pin.svg',
        iconSize: [52, 52],
        iconAnchor: [26, 52],
      }),
    }).addTo(map);

  interactiveMarker.on('move', onMarkerMove);
};

export {initMap, resetMap};
