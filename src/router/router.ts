import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Interpolation from '../views/Interpolation.vue';
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
];