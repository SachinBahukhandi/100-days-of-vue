import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Interpolation from '../views/Interpolation.vue';
import Computed from '../views/Computed.vue';
export default [
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/interpolation',
        name: 'Interpolation',
        component: Interpolation,
    },
    {
        path: '/computed',
        name: 'Computed',
        component: Computed,
    },
];