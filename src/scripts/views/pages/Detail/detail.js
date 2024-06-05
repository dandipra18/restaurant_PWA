import UrlParser from '../../../routes/url-parser';
// eslint-disable-next-line no-unused-vars
import RestaurantSource from '../../../data/restaurant-source';
// eslint-disable-next-line max-len
import { createRestoDetailTemplate, createRestoReviewTemplate } from '../../templates/template-creator';
import FavoriteButtonInitiator from '../../../utils/favorite-btn-initiator';
import FavoriteRestaurantDB from '../../../data/favoriterestaurant-db';

import '../../../component/Resto Detail/resto-detail';
import '../../../component/Resto Review/resto-review';

const Detail = {
  async render() {
    return `
      <resto-detail></resto-detail>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    // eslint-disable-next-line no-unused-vars, no-undef
    const detail = await RestaurantSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto-detail');
    restoContainer.innerHTML = createRestoDetailTemplate(detail);

    restoContainer.innerHTML += `
      <resto-review></resto-review>
    `;

    const restoReview = document.querySelector('#resto-review');
    detail.customerReviews.forEach((review) => {
      restoReview.innerHTML += createRestoReviewTemplate(review);
    });

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantDB,
      restaurant: {
        id: detail.id,
        name: detail.name,
        city: detail.city,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
      },
    });
  },
};

export default Detail;
