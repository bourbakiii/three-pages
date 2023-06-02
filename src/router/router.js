import {createRouter, createWebHistory} from "vue-router";


export const routes = [
    {
        path: '/',
        name: 'Index',
        title: 'Index',
        component: () => import("@/pages/Index.vue")
    },
    {
        path: '/consulting',
        name: 'Consulting',
        title: 'Consulting',
        component: () => import("@/pages/Three.vue")
    },
    {
        path: '/smm',
        name: 'SMM',
        title: 'SMM',
        component: () => import("@/pages/Three.vue")
    },
    {
        path: '/develope',
        name: 'Develope',
        title: 'Develope',
        component: () => import("@/pages/Three.vue")
    },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active-exact'
});


export default router;
