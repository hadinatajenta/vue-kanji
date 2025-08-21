<template>
    <section class="py-16 md:py-24 bg-gradient-to-br from-red-50 to-red-100" aria-labelledby="preview-heading">
        <div class="container mx-auto px-4">
            <!-- Section Header -->
            <div class="text-center max-w-3xl mx-auto mb-12">
                <h2 id="preview-heading" class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Kanji Preview
                </h2>
                <p class="text-lg text-gray-700">
                    Explore random kanji characters with detailed information to enhance your learning experience
                </p>
            </div>

            <!-- Main Content -->
            <div class="max-w-4xl mx-auto">
                <!-- Kanji Card -->
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
                    <div class="md:flex">
                        <!-- Kanji Display -->
                        <div
                            class="md:w-2/5 p-8 bg-gradient-to-b from-red-100 to-red-200 flex flex-col items-center justify-center">
                            <div class="text-8xl md:text-9xl font-bold text-red-700 mb-4" aria-label="Kanji character">
                                {{ currentKanji.character }}
                            </div>
                            <div class="text-2xl text-red-800 font-medium">
                                {{  }}
                                {{ currentKanji.meanings?.join(', ') }}
                            </div>
                        </div>

                        <!-- Kanji Details -->
                        <div class="md:w-3/5 p-8">
                            <div class="grid grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Onyomi
                                    </h3>
                                    <p class="text-lg font-medium text-gray-900">
                                        {{ currentKanji.onyomi?.join('、') || '—' }}
                                    </p>
                                </div>
                                <div>
                                    <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                        Kunyomi</h3>
                                    <p class="text-lg font-medium text-gray-900">
                                        {{ currentKanji.kunyomi?.join('、') || '—' }}
                                    </p>
                                </div>
                                <div>
                                    <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                        Strokes</h3>
                                    <p class="text-lg font-medium text-gray-900">
                                        {{ currentKanji.stroke_count }}
                                    </p>
                                </div>
                                <div>
                                    <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">JLPT
                                        Level</h3>
                                    <p class="text-lg font-medium text-gray-900">
                                        {{ currentKanji.jlpt || '—' }}
                                    </p>
                                </div>
                                <div>
                                    <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Grade
                                    </h3>
                                    <p class="text-lg font-medium text-gray-900">
                                        {{ currentKanji.grade || '—' }}
                                    </p>
                                </div>
                                <div>
                                    <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                        Frequency</h3>
                                    <p class="text-lg font-medium text-gray-900">
                                        #{{ currentKanji.frequency || '—' }}
                                    </p>
                                </div>
                            </div>

                            <!-- Example Words -->
                            <div>
                                <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Example
                                    Words</h3>
                                <div class="space-y-2">
                                    <div v-for="(word, index) in currentKanji.examples" :key="index"
                                        class="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                                        <div>
                                            <span class="font-medium text-gray-900">{{ word.word }}</span>
                                            <span class="text-red-700 ml-2">({{ word.reading }})</span>
                                        </div>
                                        <span class="text-gray-600 text-sm">{{ word.meaning }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Controls -->
                <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button @click="getRandomKanji"
                        class="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 flex items-center"
                        aria-label="Show another random kanji">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Random Kanji
                    </button>

                    <router-link to="/flashcard"
                        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-md border border-gray-200 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 flex items-center"
                        aria-label="Practice with flashcards">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        Practice Flashcards
                    </router-link>
                </div>

                <!-- Progress Indicator -->
                <div class="mt-8 text-center">
                    <p class="text-sm text-gray-600">
                        Showing {{ currentIndex + 1 }} of {{ kanjiList.length }} example kanji
                    </p>
                    <div class="mt-2 flex justify-center space-x-1">
                        <div v-for="(_, index) in kanjiList" :key="index" class="w-2 h-2 rounded-full transition-colors"
                            :class="index === currentIndex ? 'bg-red-600' : 'bg-gray-300'"
                            :aria-label="`Indicator ${index + 1}`"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const kanjiList = ref([
    {
        character: '水',
        meanings: ['water'],
        onyomi: ['スイ'],
        kunyomi: ['みず', 'みず-'],
        stroke_count: 4,
        jlpt: 'N5',
        grade: '1',
        frequency: 5,
        examples: [
            { word: '水', reading: 'みず', meaning: 'water' },
            { word: '水泳', reading: 'すいえい', meaning: 'swimming' },
            { word: '水曜日', reading: 'すいようび', meaning: 'Wednesday' }
        ]
    },
    {
        character: '火',
        meanings: ['fire'],
        onyomi: ['カ'],
        kunyomi: ['ひ', 'ほ-'],
        stroke_count: 4,
        jlpt: 'N5',
        grade: '1',
        frequency: 13,
        examples: [
            { word: '火', reading: 'ひ', meaning: 'fire' },
            { word: '火曜日', reading: 'かようび', meaning: 'Tuesday' },
            { word: '火山', reading: 'かざん', meaning: 'volcano' }
        ]
    },
    {
        character: '木',
        meanings: ['tree', 'wood'],
        onyomi: ['モク', 'ボク'],
        kunyomi: ['き', 'こ-'],
        stroke_count: 4,
        jlpt: 'N5',
        grade: '1',
        frequency: 7,
        examples: [
            { word: '木', reading: 'き', meaning: 'tree' },
            { word: '木曜日', reading: 'もくようび', meaning: 'Thursday' },
            { word: '木材', reading: 'もくざい', meaning: 'lumber' }
        ]
    },
    {
        character: '金',
        meanings: ['gold', 'metal', 'money'],
        onyomi: ['キン', 'コン'],
        kunyomi: ['かね', 'かな-'],
        stroke_count: 8,
        jlpt: 'N5',
        grade: '1',
        frequency: 4,
        examples: [
            { word: '金', reading: 'きん', meaning: 'gold' },
            { word: '金曜日', reading: 'きんようび', meaning: 'Friday' },
            { word: 'お金', reading: 'おかね', meaning: 'money' }
        ]
    },
    {
        character: '土',
        meanings: ['soil', 'earth', 'ground'],
        onyomi: ['ド', 'ト'],
        kunyomi: ['つち'],
        stroke_count: 3,
        jlpt: 'N5',
        grade: '1',
        frequency: 12,
        examples: [
            { word: '土', reading: 'つち', meaning: 'soil' },
            { word: '土曜日', reading: 'どようび', meaning: 'Saturday' },
            { word: '土地', reading: 'とち', meaning: 'land' }
        ]
    }
])

const currentIndex = ref(0)
const currentKanji = ref({})

const getRandomKanji = () => {
    const newIndex = Math.floor(Math.random() * kanjiList.value.length)
    currentIndex.value = newIndex
    currentKanji.value = kanjiList.value[newIndex]
}

onMounted(() => {
    getRandomKanji()
})
</script>

<style scoped>
/* Custom animations */
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