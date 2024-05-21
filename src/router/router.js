import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../pages/HomeView.vue'
import AboutView from '../pages/AboutView.vue'
import CarouselAndCard from '../components/CarouselAndCard.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router