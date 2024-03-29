import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Interpolation from '../views/Interpolation.vue';
import Computed from '../views/Computed.vue';
import Bindings from '../views/Bindings.vue';
import Game1 from '../views/Game1.vue';

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
    {
        path: '/bindings',
        name: 'Bindings',
        component: Bindings,
    },
    {
        path: '/game1',
        name: 'Game 1',
        component: Game1,
    },
];