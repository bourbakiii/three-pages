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
        component: () => import("@/pages/Consulting.vue")
    },
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active-exact'
});


export default router;