import {validateAdForm} from './validate-form.js';

const adForm = document.querySelector('.ad-form');
const adFormHeaderFieldset = document.querySelector('.ad-form-header');
const adFormFieldsets = document.querySelectorAll('.ad-form__element');

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

adForm.addEventListener('submit', (evt) => {
  if (!validateAdForm()) {
    evt.preventDefault();
  }
});

export {disableAdForm};
