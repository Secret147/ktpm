import AdminLayOut from '~/layouts/AdminLayOut/AdminLayOut';

import Admin from '~/pages/Admin/Admin';
import Bill from '~/pages/Bill/Bill';
import Cart from '~/pages/Cart/Cart';
import Detail from '~/pages/Detail/Detail';
import FormOrder from '~/pages/FormOrder/FormOrder';
import Home from '~/pages/Home/Home';
import Login from '~/pages/Login/Login';
import Order from '~/pages/Order/Order';
import Product from '~/pages/Product/Product';
import Register from '~/pages/Register/Register';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/order', component: Order },
    { path: '/detail', component: Detail },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/formorder', component: FormOrder, layout: null },
    { path: '/admin', component: Admin, layout: AdminLayOut },

    { path: '/bill', component: Bill, layout: AdminLayOut },
    { path: '/product', component: Product, layout: AdminLayOut },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
