import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import FlashCard from "../views/FlashCard.vue";
import KanjiDictionary from "../views/KanjiDictionary.vue";
import ReadingExplorer from "../views/ReadingExplorer.vue";
import LearnPage from "../views/LearnPage.vue";
import About from "../views/About.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'LandingPage',
            component: LandingPage
        },
        {
            path: '/learn',
            name: 'Learn',
            component: LearnPage
        },
        {
            path: '/flashcard',
            name: 'FlashCard',
            component: FlashCard
        },
        {
            path: '/kanji-dictionary',
            name: 'KanjiDictionary',
            component: KanjiDictionary
        },
        {
            path: '/reading-explorer',
            name: 'ReadingExplorer',
            component: ReadingExplorer
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
    ]
})

router.afterEach((to) => {
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = 'VueKanji'
    }
})


export default router