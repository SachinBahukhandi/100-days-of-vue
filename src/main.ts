import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import createRouter from "./router/index"
import { createWebHistory } from 'vue-router';


const router = createRouter(createWebHistory())
const app = createApp(App)
app.use(router).mount('#app');
// createApp(App).use(createRouter).mount('#app')
