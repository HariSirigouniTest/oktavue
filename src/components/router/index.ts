import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/my-test-app/',
        component: () => import("../pages/FirstPage.vue"),
        name: 'First Page'
    }
]


export const router = createRouter({
    history: createWebHistory('/'),
    routes,
})