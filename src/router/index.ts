import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DayDetailView from '../views/DayDetailView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/weather/day/:date',
            name: 'day-detail',
            component: DayDetailView,
        },
    ],
})

export default router
