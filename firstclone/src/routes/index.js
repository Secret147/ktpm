import Home from '~/pages/Home';
import Following from '../pages/Following/managaHome';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { DefaultLayout, HeaderOnly } from '~/components/Layout';
import Search from '~/pages/Search';

import Form from '~/pages/Upload/form';
import Cart from '~/pages/Cart';

const publicRoutes = [
    { path: '/', component: Home, layout: null },
    { path: '/following', component: Following, layout: null },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
    { path: '/cart', component: Cart, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
