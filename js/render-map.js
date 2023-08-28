
import {createCard} from './create-popup.js';

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const MAP_ZOOM = 13;
const DECIMALS = 5;

const PIN_URL = './img/pin.svg';
const PIN_SIZE = 40;
const MAIN_PIN_URL = './img/main-pin.svg';
const MAIN_PIN_SIZE = 52;

const START_COORDINATE = {
  lat: 35.66023,
  lng: 139.73007
};

const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);
const addressInput = document.querySelector('#address');

const createIcon = (url, size) => L.icon({
  iconUrl: url,
  iconSize: [size, size],
  iconAnchor: [size / 2, size],
});

const setStartAddressValue = () => {
  addressInput.value = `${START_COORDINATE.lat}, ${START_COORDINATE.lng}`;
};

const setLocation = (target) => {
  const location = target.getLatLhg();
  addressInput.value = `${location.lat.toFixed(DECIMALS)}, ${location.lng.toFixed(DECIMALS)}`;
};

const mainPinMarker = L.marker(START_COORDINATE, {
  draggable: true,
  icon: createIcon(MAIN_PIN_URL, MAIN_PIN_SIZE)
}).on('moveend', (evt) => {
  setLocation(evt.target.getLatLhg());
});

const resetMainPinMarker = () => {
  mainPinMarker.setLatLng();
  setStartAddressValue();
};

const createPinMarkers = (data) => {
  markerGroup.clearLayers();
  data.forEach((offer) => {
    const marker = L.marker(offer.location, {
      icon: createIcon(PIN_URL, PIN_SIZE),
    });
    marker
      .addTo(markerGroup)
      .bindPopup(createCard(offer))
      .on('click', () => {//убрать
        console.log(offer);
      });
  });
};

const resetMap = () => {
  resetMainPinMarker();
};

const initMap = () => new Promise((resolve) => {

  map.on('load', () => {
    resolve(true);
    console.log('Карта инициализирована');
    setStartAddressValue(START_COORDINATE);
  })
    .setView(START_COORDINATE, MAP_ZOOM);

  L.tileLayer(TILE_LAYER, {attribution: COPYRIGHT})
    .addTo(map);

  mainPinMarker.addTo(map);
});

export {initMap, resetMap, createPinMarkers};
