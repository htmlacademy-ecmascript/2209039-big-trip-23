import { render } from './render.js';
import Filters from './view/filters.js';
import Sorting from './view/sorting.js';

const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteSortingElement = document.querySelector('.trip-events');

render(new Filters(), siteFiltersElement);
render (new Sorting(), siteSortingElement);
