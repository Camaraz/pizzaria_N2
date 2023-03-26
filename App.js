import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import home from './views/home';
import order from './views/order';
import about from './views/about';
import product from './views/product';
import productEdit from './views/productEdit';
import sale from './views/sale';
import cart from './views/cart';
import category from './views/category';
import categoryEdit from './views/categoryEdit';

export default function App() {
  return ( 
    <Routes></Routes>
   );
}

const Routes = createAppContainer(
  createSwitchNavigator({
    home,
    about,
    order,
    product,
    productEdit,
    sale,
    cart,
    category,
    categoryEdit
  })
);