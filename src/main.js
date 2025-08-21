import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'

const pinia  = createPinia();
const head = createHead();

createApp(App).
use(router).
use(head).
use(pinia).
mount('#app')
