import Explore from '../views/pages/explore';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/Detail/detail';

const routes = {
  '/': Explore,
  '/explore': Explore,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
