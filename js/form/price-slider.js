import {updatePriceSlider} from './validate-form.js';
import {PRICE_STEP} from '../utils/constants.js';

const priceField = document.querySelector('#price');
const slider = document.querySelector('.ad-form__slider');

const initPriceSlider = () => {
  if (slider.noUiSlider) {
    slider.noUiSlider.destroy();
  }

  noUiSlider.create(slider, {
    range: {
      min: Number(priceField.min),
      max: Number(priceField.max)
    },
    step: PRICE_STEP,
    start: 0,
    connect: 'lower'
  });
  slider.noUiSlider.on('update', () => {
    const price = Number(slider.noUiSlider.get());
    priceField.value = price;
    updatePriceSlider();
  });
  priceField.addEventListener('input', (evt) => {
    slider.noUiSlider.set(evt.target.value);
  });
};

const resetSlider = () => slider.noUiSlider.reset();

export {initPriceSlider, resetSlider};
