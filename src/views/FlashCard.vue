<template>
    <MainLayout>
        <div class="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-8">
            <div class="container mx-auto px-4">
                <HeaderSection title="Kanji Flashcard" subtitle="Practice and master Japanese kanji with interactive flashcards" />

                <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Select JLPT Level</h2>
                    <div class="flex flex-wrap gap-3 justify-center">
                        <button v-for="level in jlptLevels" :key="level.value" @click="selectLevel(level.value)"
                            class="px-5 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50"
                            :class="[
                                selectedLevel === level.value
                                    ? 'bg-red-600 text-white shadow-md focus:ring-red-500'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400'
                            ]" :aria-label="`Select JLPT ${level.value} level`">
                            {{ level.label }}
                        </button>
                    </div>
                </div>

                <div v-if="loading" class="text-center py-12">
                    <div class="inline-flex items-center">
                        <svg class="animate-spin -ml-1 mr-3 h-8 w-8 text-red-600" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                        <span class="text-lg text-gray-700">Loading kanji data...</span>
                    </div>
                </div>

                <div v-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8 rounded"
                    role="alert">
                    <p class="font-bold">Error</p>
                    <p>{{ error }}</p>
                    <button @click="fetchKanjiList"
                        class="mt-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
                        Try Again
                    </button>
                </div>

                <div v-if="!loading && currentKanji" class="max-w-2xl mx-auto">
                    <div class="mb-6">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-sm font-medium text-gray-700">Progress</span>
                            <span class="text-sm font-medium text-gray-700">{{ currentIndex + 1 }} / {{ kanjiList.length}}</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5">
                            <div class="bg-red-600 h-2.5 rounded-full transition-all duration-300"
                                :style="{ width: `${((currentIndex + 1) / kanjiList.length) * 100}%` }"></div>
                        </div>
                    </div>

                    <div class="flashcard relative w-full h-64 md:h-100 cursor-pointer mb-8 mx-auto" @click="flipCard"
                        @keydown.space.prevent="flipCard" tabindex="0"
                        :aria-label="isFlipped ? 'Flashcard showing details' : 'Flashcard showing kanji character'">
                        <div class="flashcard-inner w-full h-full transition-transform duration-500"
                            :class="{ 'is-flipped': isFlipped }">
                            <div
                                class="flashcard-front absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-6 flex items-center justify-center border-2 border-red-200">
                                <div class="text-7xl md:text-8xl font-bold text-red-700">{{ currentKanji.kanji || "" }}
                                </div>
                                <div class="absolute bottom-4 right-4 text-sm text-gray-500">Click to flip</div>
                            </div>

                            <div
                                class="flashcard-back absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-6 border-2 border-red-200 transform rotate-y-180 overflow-y-auto">
                                <div class="h-full flex flex-col">
                                    <div class="text-center mb-4">
                                        <div class="text-6xl font-bold text-red-700 mb-2">{{ currentKanji.character }}
                                        </div>
                                        <div class="text-lg text-gray-700 font-medium">{{ currentKanji.meanings.join(', ') }}</div>
                                    </div>

                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <h3
                                                class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                                                Onyomi</h3>
                                            <p class="text-lg font-medium text-gray-900">{{
                                                currentKanji.on_readings.join('、') || '—' }}</p>
                                        </div>
                                        <div>
                                            <h3
                                                class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                                                Kunyomi</h3>
                                            <p class="text-lg font-medium text-gray-900">{{
                                                currentKanji.kun_readings.join('、') || '—' }}</p>
                                        </div>
                                        <div>
                                            <h3
                                                class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                                                Strokes</h3>
                                            <p class="text-lg font-medium text-gray-900">{{ currentKanji.stroke_count }}
                                            </p>
                                        </div>
                                        <div>
                                            <h3
                                                class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                                                JLPT</h3>
                                            <p class="text-lg font-medium text-gray-900">N{{ currentKanji.jlpt || '—' }}
                                            </p>
                                        </div>
                                    </div>

                                    <div v-if="currentKanji.name_readings && currentKanji.name_readings.length"
                                        class="mb-4">
                                        <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                                            Name Readings</h3>
                                        <p class="text-lg font-medium text-gray-900">{{
                                            currentKanji.name_readings?.join('、') }}</p>
                                    </div>

                                    {{ currentKanji.character || '-' }}

                                    <div class="mt-auto pt-4 border-t border-gray-200">
                                        <p class="text-sm text-gray-500 text-center">Click anywhere to flip back</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button @click="prevCard" :disabled="currentIndex === 0"
                            class="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md border border-gray-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-red-500"
                            aria-label="Previous card">
                            Previous
                        </button>

                        <button @click="flipCard"
                            class="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
                            aria-label="Flip card">
                            {{ isFlipped ? 'Show Kanji' : 'Show Details' }}
                        </button>

                        <button @click="nextCard" :disabled="currentIndex === kanjiList.length - 1"
                            class="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md border border-gray-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-red-500"
                            aria-label="Next card">
                            Next
                        </button>
                    </div>

                    <div class="mt-8 bg-white rounded-xl shadow-lg p-6">
                        <h2 class="text-xl font-semibold text-gray-800 mb-4">Study Options</h2>
                        <div class="flex flex-wrap gap-4 justify-center">
                            <button @click="shuffleCards"
                                class="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                                aria-label="Shuffle cards">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                Shuffle
                            </button>

                            <button @click="resetToFirst"
                                class="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                                aria-label="Reset to first card">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                Reset
                            </button>
                        </div>
                    </div>
                </div>

                <EmptySection
                    v-if="!loading && kanjiList.length === 0 && !error"
                    title="Select a JLPT Level"
                    description="Choose a JLPT level from above to start studying kanji flashcards"
                    :quick-suggestions="jlptLevels.map(l => l.value)"
                />
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useHead } from '@vueuse/head'
import { toast } from "vue3-toastify"
import MainLayout from '../components/layouts/MainLayout.vue'
import HeaderSection from '../components/common/HeaderSection.vue'
import EmptySection from '../components/common/EmptySection.vue'
import api from '../api/api'

useHead({
  title: 'Vue Kanji | Flashcards'
})

const jlptLevels = ref([
    { value: '5', label: 'N5 (Beginner)' },
    { value: '4', label: 'N4 (Elementary)' },
    { value: '3', label: 'N3 (Intermediate)' },
    { value: '2', label: 'N2 (Advanced)' },
    { value: '1', label: 'N1 (Proficient)' }
])

const selectedLevel = ref(null)
const kanjiList = ref([])
const kanjiDetails = ref({})
const currentIndex = ref(0)
const isFlipped = ref(false)
const loading = ref(false)
const error = ref(null)

const currentKanji = computed(() => {
    if (kanjiList.value.length === 0) return null
    const character = kanjiList.value[currentIndex.value]
    return kanjiDetails.value[character] || null
})

const selectLevel = async (level) => {
    selectedLevel.value = level
    isFlipped.value = false
    currentIndex.value = 0
    await fetchKanjiList()
}

const fetchKanjiList = async () => {
    if (!selectedLevel.value) return

    loading.value = true
    error.value = null

    try {
        const response = await api.get(`/kanji/jlpt-${selectedLevel.value}`)
        kanjiList.value = response.data
        await fetchKanjiDetails()
    } catch (err) {
        error.value = err.message
        toast.error(`Error fetching kanji list`)
        console.error('Error fetching kanji list:', err)
    } finally {
        loading.value = false
    }
}

const fetchKanjiDetails = async () => {
    kanjiDetails.value = {}

    const initialKanji = kanjiList.value.slice(0, 10)

    for (const character of initialKanji) {
        await fetchSingleKanjiDetail(character)
    }

    if (kanjiList.value.length > 10) {
        const remainingKanji = kanjiList.value.slice(10)
        setTimeout(() => {
            remainingKanji.forEach(character => {
                fetchSingleKanjiDetail(character)
            })
        }, 1000)
    }
}

const fetchSingleKanjiDetail = async (character) => {
    try {
        const response = await api.get(`/kanji/${encodeURIComponent(character)}`)
        const data =  response.data
        kanjiDetails.value = {
            ...kanjiDetails.value,
            [character]: data
        }
    } catch (err) {
        console.error(`Error fetching details for ${character}:`, err)
    }
}

const flipCard = () => {
    isFlipped.value = !isFlipped.value
}

const nextCard = () => {
    if (currentIndex.value < kanjiList.value.length - 1) {
        currentIndex.value++
        isFlipped.value = false

        const nextCharacter = kanjiList.value[currentIndex.value + 1]
        if (nextCharacter && !kanjiDetails.value[nextCharacter]) {
            fetchSingleKanjiDetail(nextCharacter)
        }
    }
}

const prevCard = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--
        isFlipped.value = false
    }
}

const shuffleCards = () => {
    for (let i = kanjiList.value.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [kanjiList.value[i], kanjiList.value[j]] = [kanjiList.value[j], kanjiList.value[i]];
    }

    currentIndex.value = 0
    isFlipped.value = false
}

const resetToFirst = () => {
    currentIndex.value = 0
    isFlipped.value = false
}

const handleKeydown = (e) => {
    if (e.key === 'ArrowRight') nextCard()
    if (e.key === 'ArrowLeft') prevCard()
    if (e.key === ' ') flipCard()
}

onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.flashcard {
    perspective: 1000px;
}

.flashcard-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.5s;
    transform-style: preserve-3d;
}

.flashcard-inner.is-flipped {
    transform: rotateY(180deg);
}

.flashcard-front,
.flashcard-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 0.75rem;
}

.flashcard-back {
    transform: rotateY(180deg);
}
</style>