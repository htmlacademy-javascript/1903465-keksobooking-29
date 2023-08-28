import { initMap } from './render-map.js';
import { setFilters } from './filter.js';

import { getData } from './api.js';


//заблокировать форму
//заблокировать фильтр
initMap()
  .then(() => {
    getData()
      .then((data) => {
        setFilters(data);
      })
      .catch();
  })
  .catch();
