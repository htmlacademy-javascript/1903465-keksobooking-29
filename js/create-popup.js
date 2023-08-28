const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const popupTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palase: 'Дворец',
  hotel: 'Отель'
};

const getFeaturesItems = (features) => features.map((item) => `<li class="popup__feature popup__feature--${item}"></li>`).join('');

const getPhotos = (photos, title) => photos.map((photo) => `<img src="${photo}" class="popup__photo" width="45" height="40" alt="${title}">`).join('');

const createCard = ({author, offer}) => {

  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = popupTypes[offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardElement.querySelector('.popup__avatar').src = author.avatar;

  const popupDescriptionElement = cardElement.querySelector('.popup__description');
  if (offer.description) {
    popupDescriptionElement.textContent = offer.description;
  } else {
    popupDescriptionElement.remove();
  }

  if (offer.features) {
    cardElement.querySelector('.popup__features').innerHTML = getFeaturesItems(offer.features);
  } else {
    cardElement.querySelector('.popup__features').classList.add('hidden');
  }

  if (offer.photos) {
    cardElement.querySelector('.popup__photos').innerHTML = getPhotos(offer.photos, offer.title);
  } else {
    cardElement.querySelector('.popup__photos').classList.add('hidden');
  }

  return cardElement;
};

export {createCard};
