import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import Vue3Toastify from "vue3-toastify"
import './index.css'
import "vue3-toastify/dist/index.css"

const pinia = createPinia();
const head = createHead();

createApp(App).
    use(router).
    use(head).
    use(pinia).
    use(Vue3Toastify, { autoClose: 3000 }).
mount('#app')
