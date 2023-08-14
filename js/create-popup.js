const cardTemplate = document.querySelector('#card').textContent.querySelector('.popup');

const popupTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palase: 'Дворец',
  hotel: 'Отель'
};

const createCard = ({author, offer}) => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = popupTypes[offer.type];
  cardElement.querySelector('popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('popup__text--time').textContent = `Заезд после ${offer.chekin}, выезд до ${offer.checkout}`;
  cardElement.querySelector('popup__avatar').src = author.avatar;

  return cardElement;
};

export {createCard};
