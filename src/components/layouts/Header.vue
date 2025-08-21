<template>
    <header class="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg relative overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-full h-full pattern-kanji"></div>
        </div>

        <div class="container mx-auto px-4 py-4 relative z-10">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <a href="/#"
                    class="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded"
                    aria-label="Kanji Learning Home">
                    <div
                        class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-700 font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
                        漢
                    </div>
                    <span class="text-xl font-bold tracking-wide">Kanji Learning</span>
                </a>

                <!-- Desktop Navigation -->
                <nav class="hidden md:flex items-center space-x-6">
                    <router-link v-for="item in navItems" :key="item.name" :to="item.path"
                        class="py-2 px-3 rounded-md transition-all hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                        :aria-label="item.name">
                        {{ item.name }}
                    </router-link>
                </nav>

                <!-- Mobile menu button -->
                <button @click="isMobileMenuOpen = !isMobileMenuOpen"
                    class="md:hidden p-2 rounded-md text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    :aria-expanded="isMobileMenuOpen" aria-label="Toggle navigation menu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- Mobile Navigation -->
            <transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-64" leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 max-h-64" leave-to-class="opacity-0 max-h-0">
                <nav v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-2 space-y-2" aria-label="Mobile navigation">
                    <router-link v-for="item in navItems" :key="item.name" :to="item.path"
                        class="block py-3 px-4 rounded-md transition-all hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                        @click="isMobileMenuOpen = false">
                        {{ item.name }}
                    </router-link>
                </nav>
            </transition>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Learn', path: '/learn' },
    { name: 'Flashcard', path: '/flashcard' },
    { name: 'Dictionary', path: '/kanji-dictionary' },
    { name: 'Reading Explorer', path: '/reading-explorer' },
]
</script>

<style scoped>
.pattern-kanji {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.router-link-active {
    background-color: rgba(255, 255, 255, 0.15);
    font-weight: 600;
}
</style>