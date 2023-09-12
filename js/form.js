import {validateAdForm} from './validate-form.js';
import {initPriceSlider, resetSlider} from './price-slider.js';
import {renderUploadImage} from './upload-image.js';
import {sendData} from './api.js';
import {renderMessage} from './render-message.js';
import {resetFilters} from './filter.js';
import {resetMap} from './render-map.js';

const AVATAR_URL_DEFAULT = 'img/muffin-grey.svg';
const SUCCESS_STATE = 'success';
const SUCCESS_MESSAGE = 'Ваше объявление <br> успешно размещено!';
const ERROR_STATE = 'error';
const ERROR_MESSAGE = 'Ошибка размещения объявления';
const ERROR_BUTTON_TEXT = 'Попробовать ещё раз';

const adForm = document.querySelector('.ad-form');
const adFormHeaderFieldset = document.querySelector('.ad-form-header');
const adFormFieldsets = document.querySelectorAll('.ad-form__element');
const submitButton = document.querySelector('.ad-form__submit');
const resetButton = document.querySelector('.ad-form__reset');
const avatarInput = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const imagesInput = document.querySelector('#images');
const imagesPreviewElement = document.querySelector('.ad-form__photo');
const imagesPreview = document.createElement('img');
const SEND_URL = 'https://29.javascript.pages.academy/keksobooking';

const disableAdForm = (isDisabled = true) => {
  if (isDisabled) {
    adForm.classList.add('ad-form--disabled');
  } else {
    adForm.classList.remove('ad-form--disabled');
  }
  adFormHeaderFieldset.disabled = isDisabled;
  adFormFieldsets.forEach((item) => {
    item.disabled = isDisabled;
  });
};

initPriceSlider();

avatarInput.addEventListener('change', () => {
  renderUploadImage(avatarInput, avatarPreview);
});

const resetAvatarPreview = () => {
  avatarPreview.src = AVATAR_URL_DEFAULT;
};

imagesPreviewElement.appendChild(imagesPreview);

imagesInput.addEventListener('change', () => {
  renderUploadImage(imagesInput, imagesPreview);
});

const resetImagesPreview = () => {
  imagesPreviewElement.innerHTML = '';
};

const resetForm = () => {
  adForm.reset();
  resetMap();
  resetFilters();
  resetSlider();
  resetAvatarPreview();
  resetImagesPreview ();
};

const setSubmitButtonStatus = (state) => {
  submitButton.disabled = state;
};

const onSuccess = () => {
  console.log('ok');
  //очистить форму
  resetForm();
  //показать окно успеха
  renderMessage(SUCCESS_STATE, SUCCESS_MESSAGE);
  //paзблокировать кнопку
  setSubmitButtonStatus(false);
};

const onError = () => {
  console.log('error');
  //показать окно ошибки
  renderMessage(ERROR_STATE, ERROR_MESSAGE, ERROR_BUTTON_TEXT);
  //paзблокировать кнопку
  setSubmitButtonStatus(false);
};

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validateAdForm()) {
    //блокировать кнопку
    setSubmitButtonStatus(true);
    sendData(SEND_URL, onSuccess, onError, new FormData(evt.target));
  }
});

export {disableAdForm};
