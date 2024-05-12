/* eslint-disable no-undef */
import FavoriteRestaurantDB from '../../data/favoriterestaurant-db';
// eslint-disable-next-line max-len
import FavoriteRestaurantSearchView from './favorited-restaurants/favorite-restaurant-search-view';
// eslint-disable-next-line max-len
import FavoriteRestaurantShowPresenter from './favorited-restaurants/favorite-restaurant-show-presenter';
// eslint-disable-next-line max-len
import FavoriteRestaurantSearchPresenter from './favorited-restaurants/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // eslint-disable-next-line no-new
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantDB });
    // eslint-disable-next-line no-new
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantDB });
  },
};

export default Favorite;
