import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import home from './views/home';
import order from './views/order';
import about from './views/about';
import product from './views/product';
import productEdit from './views/productEdit';

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
    productEdit
  })
);
