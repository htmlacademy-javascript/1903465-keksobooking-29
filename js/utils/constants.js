const START_COORDINATE = {
  lat: 35.66023,
  lng: 139.73007
};

const PIN_URL = './img/pin.svg';
const PIN_SIZE = 40;
const MAIN_PIN_URL = './img/main-pin.svg';
const MAIN_PIN_SIZE = 52;

const MapConfig = {
  TILE_LAYER: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  COPYRIGHT: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  MAP_ZOOM: 13,
};

const DECIMALS = 5;
const GET_URL = 'https://29.javascript.pages.academy/keksobooking/data';
const SEND_URL = 'https://29.javascript.pages.academy/keksobooking';

const FILE_TYPES = ['.gif', '.jpg', '.jpeg', '.png', '.webp'];
const ERROR_STATE = 'error';
const ERROR_MESSAGE = 'Неверный формат файла!';
const AVATAR_URL_DEFAULT = 'img/muffin-grey.svg';

const UploadFormMessage = {
  SUCCESS: {
    state: 'success',
    message: 'Ваше объявление <br> успешно размещено!',
  },

  ERROR: {
    state: 'error',
    message: 'Ошибка размещения объявления',
    buttonText: 'Попробовать ещё раз',
  },
};

const PRICE_STEP = 1;


export {
  START_COORDINATE,
  PIN_URL,
  PIN_SIZE,
  MAIN_PIN_URL,
  MAIN_PIN_SIZE,
  MapConfig,
  DECIMALS,
  FILE_TYPES,
  ERROR_STATE,
  ERROR_MESSAGE,
  AVATAR_URL_DEFAULT,
  UploadFormMessage,
  GET_URL,
  SEND_URL,
  PRICE_STEP
};
