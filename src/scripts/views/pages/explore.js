import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

import '../../component/Resto List/resto-list';

const Explore = {
  async render() {
    return `
      <resto-list></resto-list>
    `;
  },

  async afterRender() {
    // eslint-disable-next-line no-unused-vars
    const restaurants = await RestaurantSource.getResto();
    const restaurantsContainer = document.querySelector('#resto-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Explore;
