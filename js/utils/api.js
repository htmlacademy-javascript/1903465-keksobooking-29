const GET_URL = 'https://29.javascript.pages.academy/keksobooking/data';

const getData = () =>
  fetch(GET_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error;
      }
    })
    .catch(() => {
      // onError();
      throw new Error;
    });

const sendData = (url, onSuccess, onError, body) => {
  fetch(url, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return;
      }
      onError();
    })
    .catch(() => {
      onError();
    });
};

export {getData, sendData};
