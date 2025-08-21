<template>
    <section class="py-16 md:py-24 bg-white" aria-labelledby="features-heading">
        <div class="container mx-auto px-4">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 id="features-heading" class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Powerful Learning Features
                </h2>
                <p class="text-lg text-gray-600">
                    Discover our comprehensive tools designed to make kanji learning effective and enjoyable
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="feature-card group p-6 rounded-xl bg-gradient-to-b from-white to-red-50 border border-red-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    aria-labelledby="feature-jlpt">
                    <div
                        class="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-200 transition-colors">
                        <span class="text-2xl text-red-700 font-bold">N5</span>
                    </div>
                    <h3 id="feature-jlpt" class="text-xl font-semibold text-gray-900 mb-3">Learn by JLPT Level</h3>
                    <p class="text-gray-600 mb-4">
                        Study kanji organized by JLPT levels from N5 (beginner) to N1 (advanced) with structured
                        learning paths.
                    </p>
                    <ul class="space-y-2 mb-5">
                        <li v-for="level in jlptLevels" :key="level" class="flex items-center">
                            <svg class="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-sm">JLPT {{ level }}</span>
                        </li>
                    </ul>
                    <router-link to="/learn"
                        class="inline-flex items-center text-red-700 font-medium hover:text-red-800 transition-colors group-hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                        aria-label="Explore JLPT levels">
                        Explore levels
                        <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </router-link>
                </div>

                <!-- Feature 2: Detailed Kanji Info -->
                <div class="feature-card group p-6 rounded-xl bg-gradient-to-b from-white to-red-50 border border-red-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    aria-labelledby="feature-details">
                    <div
                        class="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-200 transition-colors">
                        <span class="text-2xl text-red-700 font-bold">詳</span>
                    </div>
                    <h3 id="feature-details" class="text-xl font-semibold text-gray-900 mb-3">Detailed Kanji Information
                    </h3>
                    <p class="text-gray-600 mb-4">
                        Get comprehensive details for each kanji including readings, meanings, stroke order, and more.
                    </p>
                    <div class="grid grid-cols-2 gap-3 mb-5">
                        <div class="bg-red-50 rounded-lg p-2 text-center">
                            <div class="text-sm text-gray-600">Readings</div>
                            <div class="font-medium text-red-700">音・訓</div>
                        </div>
                        <div class="bg-red-50 rounded-lg p-2 text-center">
                            <div class="text-sm text-gray-600">Strokes</div>
                            <div class="font-medium text-red-7 00">画数</div>
                        </div>
                        <div class="bg-red-50 rounded-lg p-2 text-center">
                            <div class="text-sm text-gray-600">Meaning</div>
                            <div class="font-medium text-red-700">意味</div>
                        </div>
                        <div class="bg-red-50 rounded-lg p-2 text-center">
                            <div class="text-sm text-gray-600">Grade</div>
                            <div class="font-medium text-red-700">学年</div>
                        </div>
                    </div>
                    <router-link to="/kanji-details"
                        class="inline-flex items-center text-red-700 font-medium hover:text-red-800 transition-colors group-hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                        aria-label="Explore kanji details">
                        Discover kanji
                        <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </router-link>
                </div>

                <!-- Feature 3: Vocabulary Examples -->
                <div class="feature-card group p-6 rounded-xl bg-gradient-to-b from-white to-red-50 border border-red-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    aria-labelledby="feature-vocab">
                    <div
                        class="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-200 transition-colors">
                        <span class="text-2xl text-red-700 font-bold">語</span>
                    </div>
                    <h3 id="feature-vocab" class="text-xl font-semibold text-gray-900 mb-3">Dictionary Examples</h3>
                    <p class="text-gray-600 mb-4">
                        See real-world vocabulary examples for each kanji with readings and translations.
                    </p>
                    <div class="space-y-3 mb-5">
                        <div v-for="(example, index) in vocabularyExamples" :key="index"
                            class="bg-white p-3 rounded-lg border border-red-100 shadow-sm">
                            <div class="flex justify-between items-start">
                                <span class="font-medium text-gray-900">{{ example.word }}</span>
                                <span class="text-sm text-red-700 bg-red-50 px-2 py-1 rounded">{{ example.reading
                                    }}</span>
                            </div>
                            <div class="text-sm text-gray-600 mt-1">{{ example.meaning }}</div>
                        </div>
                    </div>
                    <router-link to="/kanji-dictionary"
                        class="inline-flex items-center text-red-700 font-medium hover:text-red-800 transition-colors group-hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                        aria-label="Explore vocabulary examples">
                        Expand Dictionary
                        <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </router-link>
                </div>

                <!-- Feature 4: Jōyō Kanji -->
                <div class="feature-card group p-6 rounded-xl bg-gradient-to-b from-white to-red-50 border border-red-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    aria-labelledby="feature-joyo">
                    <div
                        class="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-200 transition-colors">
                        <span class="text-2xl text-red-700 font-bold">常</span>
                    </div>
                    <h3 id="feature-joyo" class="text-xl font-semibold text-gray-900 mb-3">Jōyō Kanji Collection</h3>
                    <p class="text-gray-600 mb-4">
                        Explore all 2,136 standard use kanji essential for literacy in Japanese.
                    </p>
                    <div class="flex items-center justify-between mb-5">
                        <div class="text-center">
                            <div class="text-3xl font-bold text-red-700">2,136</div>
                            <div class="text-sm text-gray-600">Standard Kanji</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-red-700">6</div>
                            <div class="text-sm text-gray-600">Grade Levels</div>
                        </div>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div class="bg-red-600 h-2 rounded-full" style="width: 75%"></div>
                    </div>
                    <div class="text-xs text-gray-600 flex justify-between mb-5">
                        <span>Elementary</span>
                        <span>Advanced</span>
                    </div>
                    <router-link to="/joyo-kanji"
                        class="inline-flex items-center text-red-700 font-medium hover:text-red-800 transition-colors group-hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                        aria-label="Explore Jōyō kanji collection">
                        Browse collection
                        <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const jlptLevels = ref(['N5', 'N4', 'N3', 'N2', 'N1'])

const vocabularyExamples = ref([
    { word: '日本語', reading: 'にほんご', meaning: 'Japanese language' },
    { word: '学生', reading: 'がくせい', meaning: 'student' },
    { word: '元気', reading: 'げんき', meaning: 'healthy, energetic' }
])
</script>

<style scoped>
.feature-card {
    position: relative;
    overflow: hidden;
}

.feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #e53e3e, #f56565);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
}

.feature-card:hover::before {
    transform: scaleX(1);
}
</style>