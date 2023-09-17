import {initMap} from './map/render-map.js';
import {setFilters, disableFilters} from './map/filter.js';
import {disableAdForm} from './form/form.js';
import {getData} from './utils/api.js';

disableAdForm();
disableFilters();

initMap()
  .then(() => {
    disableAdForm(false);
    getData()
      .then((data) => {
        disableFilters(false);
        setFilters(data);
      })
      .catch();
  })
  .catch();
