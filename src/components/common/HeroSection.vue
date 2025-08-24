<template>
    <section class="relative bg-gradient-to-br from-red-50 to-red-100 py-16 md:py-24 lg:py-32 overflow-hidden">
        <!-- Decorative elements -->
        <div class="absolute top-0 left-0 w-full h-full opacity-10">
            <div class="absolute top-10 left-10 text-8xl text-red-200">漢</div>
            <div class="absolute bottom-10 right-10 text-8xl text-red-200">字</div>
            <div class="absolute top-1/3 right-1/4 text-6xl text-red-200">学</div>
            <div class="absolute bottom-1/4 left-1/3 text-6xl text-red-200">習</div>
        </div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
                <!-- Text content -->
                <div class="lg:w-1/2 text-center lg:text-left">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Master Japanese Kanji
                        <span class="text-red-600 block mt-2">With Ease & Fun</span>
                    </h1>

                    <p class="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
                        Discover the most effective way to learn and remember Kanji through
                        interactive flashcards, spaced repetition, and engaging exercises
                        tailored to your learning pace.
                    </p>

                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <router-link to="/flashcard"
                            class="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 text-lg"
                            aria-label="Start learning with flashcards">
                            Start Learning Now
                        </router-link>

                        <router-link to="/how-it-works"
                            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-md border border-gray-200 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 text-lg"
                            aria-label="Discover how it works">
                            How It Works
                        </router-link>
                    </div>

                    <!-- Stats -->
                    <div class="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10">
                        <div v-for="stat in stats" :key="stat.label" class="text-center lg:text-left">
                            <div class="text-2xl md:text-3xl font-bold text-red-700">{{ stat.value }}</div>
                            <div class="text-gray-600">{{ stat.label }}</div>
                        </div>
                    </div>
                </div>

                <!-- Visual element (placeholder for an illustration) -->
                <div class="lg:w-1/2 flex justify-center">
                    <div class="relative w-full max-w-md">
                        <div class="bg-white p-6 rounded-2xl shadow-2xl transform rotate-3">
                            <div
                                class="bg-red-600 text-white text-2xl font-bold text-center py-4 rounded-t-lg -mt-6 mx-6">
                                Flashcard Preview
                            </div>
                            <div class="border-2 border-red-200 rounded-lg p-6 h-64 flex items-center justify-center">
                                <div class="text-7xl text-red-600 font-bold">日</div>
                                <div class="absolute bottom-4 right-4 text-sm text-gray-500">nichi (day)</div>
                            </div>
                        </div>

                        <!-- Decorative elements around the card -->
                        <div class="absolute -top-4 -left-4 w-20 h-20 bg-red-200 rounded-full opacity-50"></div>
                        <div class="absolute -bottom-4 -right-4 w-16 h-16 bg-red-300 rounded-full opacity-50"></div>
                        <div
                            class="absolute top-1/2 -right-6 w-12 h-12 bg-red-400 rounded-lg opacity-30 transform rotate-45">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Wave divider at the bottom -->
        <div class="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full h-16 text-white fill-current">
                <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z">
                </path>
            </svg>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref([
    { value: '2,136', label: 'Jōyō Kanji' },
    { value: '10,000+', label: 'Vocabulary Words' },
    { value: '98%', label: 'Success Rate' }
])

const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<style scoped>
@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.absolute.text-red-200 {
    animation: float 6s ease-in-out infinite;
}

.absolute.text-red-200:nth-child(1) {
    animation-delay: 0s;
}

.absolute.text-red-200:nth-child(2) {
    animation-delay: 2s;
}

.absolute.text-red-200:nth-child(3) {
    animation-delay: 4s;
}

.absolute.text-red-200:nth-child(4) {
    animation-delay: 1s;
}
</style>