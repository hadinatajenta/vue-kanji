<template>
    <header class="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-full h-full pattern-kanji"></div>
        </div>

        <div class="container mx-auto px-4 py-4 relative z-10">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <div 
                    class="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded"
                    aria-label="Kanji Learning Home">
                    <div
                        class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-700 font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
                        漢
                    </div>
                    <span class="text-xl font-bold tracking-wide">Kanji Learning</span>
                </div>

                <nav class="hidden md:flex items-center space-x-6">
                    <router-link v-for="item in navItems" :key="item.name" :to="item.path"
                        class="py-2 px-3 rounded-md transition-all hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                        :aria-label="item.name">
                        {{ item.name }}
                    </router-link>
                </nav>

                <button @click="isMobileMenuOpen = !isMobileMenuOpen"
                    class="md:hidden p-2 rounded-md text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    :aria-expanded="isMobileMenuOpen" aria-label="Toggle navigation menu" style="display: none;">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Bottom Navigation -->
        <div class="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
            <div class="grid grid-cols-5">
                <router-link v-for="item in mobileNavItems" :key="item.name" :to="item.path"
                    class="flex flex-col items-center justify-center py-3 text-xs transition-all duration-300 ease-in-out relative"
                    :class="isActive(item.path)
                        ? 'text-red-600 bg-red-50 transform scale-105'
                        : 'text-gray-600 hover:text-red-500'" @click="isMobileMenuOpen = false">

                    <div v-if="isActive(item.path)" class="absolute top-0 left-0 right-0 h-1 bg-red-600 rounded-b-full">
                    </div>

                    <div class="w-5 h-5 mb-1 transition-transform duration-300"
                        :class="isActive(item.path) ? 'transform scale-110' : ''" v-html="getIcon(item.name)"></div>

                    <span class="text-xs font-medium transition-all duration-300"
                        :class="isActive(item.path) ? 'font-bold' : ''">
                        {{ item.name }}
                    </span>

                    <div v-if="isActive(item.path)"
                        class="absolute inset-0 rounded-lg bg-red-100 opacity-0 animate-pulse"></div>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Kanji Learn', path: '/learn' },
    { name: 'Flashcard', path: '/flashcard' },
    { name: 'Dictionary', path: '/kanji-dictionary' },
    { name: 'Reading Explorer', path: '/reading-explorer' },
]

const getIcon = (name) => {
    switch (name) {
        case 'Home':
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>`
        case 'Learn':
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>`
        case 'Flashcard':
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>`
        case 'Dictionary':
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>`
        case 'Reading':
            return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>`
        default:
            return ''
    }
}

const mobileNavItems = computed(() => [
    { name: 'Home', path: '/' },
    { name: 'Learn', path: '/learn' },
    { name: 'Flashcard', path: '/flashcard' },
    { name: 'Dictionary', path: '/kanji-dictionary' },
    { name: 'Reading', path: '/reading-explorer' },
])

const isActive = (path) => {
    return route.path === path
}
</script>

<style scoped>
.pattern-kanji {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.router-link-active {
    background-color: rgba(255, 255, 255, 0.15);
    font-weight: 600;
}

@keyframes subtlePulse {

    0%,
    100% {
        opacity: 0.2;
    }

    50% {
        opacity: 0.4;
    }
}

.animate-pulse {
    animation: subtlePulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>