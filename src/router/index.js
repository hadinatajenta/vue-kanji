import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import KanjiDetail from "../views/KanjiDetail.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path : '/',
            name : 'LandingPage',
            component : LandingPage
        },
        {
            path : '/kanji',
            name : 'KanjiDetail',
            component : KanjiDetail
        }
    ]
})

export default router