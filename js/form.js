import {validateAdForm} from './validate-form.js';
import {initPriceSlider, setPriceSliderValue} from './price-slider.js';

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

initPriceSlider();
setPriceSliderValue();

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  console.log('123');
  if (!validateAdForm()) {
    console.log('not valid form');
  }
});

export {disableAdForm};
