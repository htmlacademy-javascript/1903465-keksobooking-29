import {validateAdForm} from './validate-form.js';
import {initPriceSlider, resetSlider} from './price-slider.js';
import {renderUploadImage} from './upload-image.js';
import {sendData} from '../utils/api.js';
import {renderMessage} from '../utils/render-message.js';
import {resetFilters} from '../map/filter.js';
import {resetMap} from '../map/render-map.js';
import {AVATAR_URL_DEFAULT, UploadFormMessage, SEND_URL} from '../utils/constants.js';

const {SUCCESS, ERROR} = UploadFormMessage;

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

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
});

const setSubmitButtonStatus = (state) => {
  submitButton.disabled = state;
};

const onSuccess = () => {
  resetForm();
  renderMessage(SUCCESS.state, SUCCESS.message);
  setSubmitButtonStatus(false);
};

const onError = () => {
  renderMessage(ERROR.state, ERROR.message, ERROR.buttonText);
  setSubmitButtonStatus(false);
};

adForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validateAdForm()) {
    setSubmitButtonStatus(true);
    sendData(SEND_URL, onSuccess, onError, new FormData(event.target));
  }
});

export {disableAdForm};
