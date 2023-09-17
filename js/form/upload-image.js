import {renderMessage} from '../utils/render-message.js';

const FILE_TYPES = ['.gif', '.jpg', '.jpeg', '.png', '.webp'];
const ERROR_STATE = 'error';
const ERROR_MESSAGE = 'Неверный формат файла!';

const renderUploadImage = (target, preview) => {
  const file = target.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const url = URL.createObjectURL(file);
    preview.src = url;
  }
  renderMessage(ERROR_STATE, ERROR_MESSAGE);
};

export {renderUploadImage};
