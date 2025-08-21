<template>
    <MainLayout>
        <div class="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-8">
            <div class="container mx-auto px-4">
                <!-- Header Section -->
                <div class="text-center mb-12">
                    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">About Kanji Learning</h1>
                    <p class="text-lg text-gray-700">Learn more about our project and the technology behind it</p>
                </div>

                <!-- Main Content -->
                <div class="max-w-4xl mx-auto space-y-8">
                    <!-- Project Overview -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h2>
                        <p class="text-gray-600 mb-4">
                            Kanji Learning is a comprehensive web application designed to help users master Japanese
                            kanji characters
                            through interactive flashcards, detailed information, and systematic learning paths. Our
                            goal is to make
                            kanji learning accessible, engaging, and effective for learners of all levels.
                        </p>
                        <p class="text-gray-600">
                            Whether you're preparing for JLPT exams, studying for school, or just passionate about
                            Japanese language,
                            our platform provides the tools and resources you need to succeed in your kanji learning
                            journey.
                        </p>
                    </div>

                    <!-- Technology Stack -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Technology Stack</h2>
                        <p class="text-gray-600 mb-6">
                            This project is built with modern web technologies to ensure a fast, responsive, and
                            enjoyable user experience.
                        </p>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Frontend Technologies -->
                            <div class="bg-red-50 rounded-lg p-4">
                                <h3 class="text-lg font-semibold text-red-800 mb-3">Frontend</h3>
                                <ul class="space-y-2">
                                    <li class="flex items-center">
                                        <div
                                            class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                            <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4z">
                                                </path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4z">
                                                </path>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700">Vue.js 3 (Composition API)</span>
                                    </li>
                                    <li class="flex items-center">
                                        <div
                                            class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                            <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700">Vite (Build Tool)</span>
                                    </li>
                                    <li class="flex items-center">
                                        <div
                                            class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                            <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15">
                                                </path>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700">Tailwind CSS (Styling)</span>
                                    </li>
                                </ul>
                            </div>

                            <!-- Backend & Deployment -->
                            <div class="bg-red-50 rounded-lg p-4">
                                <h3 class="text-lg font-semibold text-red-800 mb-3">Backend & Deployment</h3>
                                <ul class="space-y-2">
                                    <li class="flex items-center">
                                        <div
                                            class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                            <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">
                                                </path>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700">KanjiAPI (Data Source)</span>
                                    </li>
                                    <li class="flex items-center">
                                        <div
                                            class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                            <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                                </path>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700">Vercel (Deployment)</span>
                                    </li>
                                    <li class="flex items-center">
                                        <div
                                            class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                            <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                                                </path>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700">AI Assistance (DeepSeek)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Features -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="flex items-start">
                                <div
                                    class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-800 mb-1">Interactive Flashcards</h3>
                                    <p class="text-gray-600">Study kanji with flipable flashcards featuring detailed
                                        information</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div
                                    class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-800 mb-1">Comprehensive Dictionary</h3>
                                    <p class="text-gray-600">Look up any kanji with detailed readings, meanings, and
                                        examples</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div
                                    class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-800 mb-1">Reading Explorer</h3>
                                    <p class="text-gray-600">Discover kanji characters by their readings in hiragana or
                                        katakana</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div
                                    class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-800 mb-1">Progress Tracking</h3>
                                    <p class="text-gray-600">Monitor your learning progress with visual indicators and
                                        statistics</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- API Information -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Data Source</h2>
                        <p class="text-gray-600 mb-4">
                            This application uses the <a href="https://kanjiapi.dev/" target="_blank"
                                class="text-red-600 hover:text-red-700 font-medium">KanjiAPI</a>
                            to provide accurate and comprehensive kanji data. The API offers:
                        </p>
                        <ul class="list-disc list-inside text-gray-600 space-y-2 mb-4">
                            <li>Complete information on Jōyō kanji and beyond</li>
                            <li>JLPT level classifications</li>
                            <li>School grade level information</li>
                            <li>Detailed readings (onyomi, kunyomi, nanori)</li>
                            <li>Stroke counts and radical information</li>
                            <li>Example vocabulary words</li>
                        </ul>
                        <p class="text-gray-600">
                            We extend our gratitude to the maintainers of KanjiAPI for providing this valuable resource
                            to the Japanese language learning community.
                        </p>
                    </div>

                    <!-- Developer Information -->
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Developer</h2>
                        <div class="flex items-center">
                            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                                <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-800">Hadinata Jenta</h3>
                                <p class="text-gray-600 mb-2">Full Stack Developer & Japanese Language Enthusiast</p>
                                <a href="https://www.linkedin.com/in/hadinata-jenta/" target="_blank"
                                    class="inline-flex items-center text-red-600 hover:text-red-700 font-medium">
                                    <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Call to Action -->
                    <div class="bg-red-600 rounded-xl shadow-lg p-6 text-center">
                        <h2 class="text-2xl font-semibold text-white mb-4">Start Your Kanji Journey Today</h2>
                        <p class="text-red-100 mb-6">Join thousands of learners who are mastering kanji with our
                            platform</p>
                        <router-link to="/learn"
                            class="inline-block bg-white text-red-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white">
                            Begin Learning
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '../components/layouts/MainLayout.vue'
import { useHead } from '@vueuse/head'
useHead({
  title: 'Vue Kanji | About'
})
</script>

<style scoped>
.bg-gradient-to-br {
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>