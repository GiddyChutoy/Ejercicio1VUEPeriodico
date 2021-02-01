import { createRouter, createWebHistory } from 'vue-router'
import Header from '../views/Header.vue'
import Acerca from '../views/Acerca.vue'

const routes = [{
        path: '/',
        name: 'Header',
        component: Header
    },
    {
        path: '/articulos',
        name: 'Articulos',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Articulos.vue')
    },
    {
        path: '/acerca',
        name: 'Acerca'
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router