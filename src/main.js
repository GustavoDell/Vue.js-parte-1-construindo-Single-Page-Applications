import { createApp }  from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";

import axios from 'axios';
import VueAxios from 'vue-axios';

import { routes } from './routes';

const router = createRouter({
    history: createWebHistory(),
    routes,
});
const app = createApp(App)

app.use(VueAxios, axios);

app.use(router);

app.mount('#app');





