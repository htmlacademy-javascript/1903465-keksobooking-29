const adForm = document.querySelector('.ad-form');
const titleField = adForm.querySelector('#title');
const priceField = adForm.querySelector('#price');
const roomsField = adForm.querySelector('#room_number');
const capacityField = adForm.querySelector('#capacity');
const checkinField = adForm.querySelector('#timein');
const checkoutField = adForm.querySelector('#timeout');
const typeField = adForm.querySelector('#type');

const TitleLimitsLength = {
  MIN: 30,
  MAX: 100,
};

const guestsInRooms = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
});

const validateTitle = (value) => value.length >= TitleLimitsLength.MIN && value.length <= TitleLimitsLength.MAX;

const getTitleMessage = () => `Длина строки должна быть в диапазоне от ${TitleLimitsLength.MIN} до ${TitleLimitsLength.MAX}`;

const validatePrice = (price) => Number(price) >= priceField.min;

const getPriceMessage = () => `От ${priceField.min} до ${priceField.max}`;

const validateCapacity = (capacity) => guestsInRooms[roomsField.value].includes(capacity);

const getCapacityMessage = () => {
  const maxGuests = Math.max(...guestsInRooms[roomsField.value]);
  return `Если комнат ${roomsField.value}, максимум гостей - ${maxGuests}`;
};

const onCheckinChange = () => {
  checkinField.value = checkoutField.value;
};

const onCheckoutChange = () => {
  checkoutField.value = checkinField.value;
};

const initAdFormValidator = () => {
  checkinField.addEventListener('change', onCheckoutChange);
  checkoutField.addEventListener('change', onCheckinChange);

  pristine.addValidator(titleField, validateTitle, getTitleMessage);
  pristine.addValidator(priceField, validatePrice, getPriceMessage);
  pristine.addValidator(capacityField, validateCapacity, getCapacityMessage);
};

const validateAdForm = () => pristine.validate();

const pristineReset = () => pristine.reset();

export {initAdFormValidator, validateAdForm, pristineReset};
