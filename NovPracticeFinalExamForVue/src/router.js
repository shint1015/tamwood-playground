import { createMemoryHistory, createRouter } from 'vue-router';
import App from './App.vue';
import EasyView from './EasyView.vue';
import MediumView from './MediumView.vue';
import HardView from './HardView.vue';

const routes = [
    // { path: '/', component: App },
    { path: '/easy', component: EasyView },
    { path: '/medium', component: MediumView },
    { path: '/hard', component: HardView },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
