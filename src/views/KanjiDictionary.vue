<template>
    <MainLayout>
        <div class="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-8">
            <div class="container mx-auto px-4">
                <!-- Header Section -->
                <div class="text-center mb-8">
                    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Kanji Dictionary</h1>
                    <p class="text-lg text-gray-700">Look up any kanji character to see detailed information and related
                        vocabulary</p>
                </div>

                <!-- Search Section -->
                <SearchSection v-model="searchQuery" :quick-suggestions="quickSuggestions"
                    placeholder="Enter a kanji character (e.g. 出, 水, 語)" aria-label="Search for a kanji character"
                    button-text="Search" @search="searchKanji" @suggestion-selected="setSuggestion" />

                <!-- Loading State -->
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
                        <span class="text-lg text-gray-700">Searching...</span>
                    </div>
                </div>

                <!-- Error State -->
                <div v-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8 rounded"
                    role="alert">
                    <p class="font-bold">Error</p>
                    <p>{{ error }}</p>
                </div>

                <!-- Kanji Details -->
                <div v-if="kanjiData" class="mb-8">
                    <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                        <!-- Kanji Header -->
                        <div class="bg-red-600 text-white p-6">
                            <div class="flex flex-col md:flex-row items-center justify-between">
                                <div class="text-center md:text-left mb-4 md:mb-0">
                                    <div class="text-7xl font-bold mb-2">{{ kanjiData.kanji }}</div>
                                    <p class="text-xl">{{ kanjiData.meanings.join(', ') }}</p>
                                </div>
                                <div class="grid grid-cols-2 gap-4 text-center">
                                    <div>
                                        <p class="text-sm opacity-80">JLPT</p>
                                        <p class="text-2xl font-bold">N{{ kanjiData.jlpt || '—' }}</p>
                                    </div>
                                    <div>
                                        <p class="text-sm opacity-80">Grade</p>
                                        <p class="text-2xl font-bold">{{ kanjiData.grade || '—' }}</p>
                                    </div>
                                    <div>
                                        <p class="text-sm opacity-80">Strokes</p>
                                        <p class="text-2xl font-bold">{{ kanjiData.stroke_count }}</p>
                                    </div>
                                    <div>
                                        <p class="text-sm opacity-80">Frequency</p>
                                        <p class="text-2xl font-bold">#{{ kanjiData.freq_mainichi_shinbun || '—' }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Kanji Details -->
                        <div class="p-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <!-- Readings -->
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-800 mb-3">Readings</h3>
                                    <div class="bg-gray-50 rounded-lg p-4">
                                        <h4 class="font-medium text-gray-700 mb-2">On'yomi (Chinese readings)</h4>
                                        <p class="text-lg mb-4">{{ kanjiData.on_readings.join('、') || '—' }}</p>

                                        <h4 class="font-medium text-gray-700 mb-2">Kun'yomi (Japanese readings)</h4>
                                        <p class="text-lg">{{ kanjiData.kun_readings.join('、') || '—' }}</p>
                                    </div>
                                </div>

                                <!-- Additional Info -->
                                <div>
                                    <h3 class="text-xl font-semibold text-gray-800 mb-3">Additional Information</h3>
                                    <div class="bg-gray-50 rounded-lg p-4">
                                        <div class="mb-3">
                                            <h4 class="font-medium text-gray-700 mb-1">Name Readings</h4>
                                            <p>{{ kanjiData.name_readings.join('、') || '—' }}</p>
                                        </div>

                                        <div class="mb-3">
                                            <h4 class="font-medium text-gray-700 mb-1">Heisig Keyword</h4>
                                            <p>{{ kanjiData.heisig_en || '—' }}</p>
                                        </div>

                                        <div>
                                            <h4 class="font-medium text-gray-700 mb-1">Unicode</h4>
                                            <p class="font-mono">{{ kanjiData.unicode }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Word Explorer Button -->
                            <div class="text-center">
                                <button @click="toggleWordExplorer"
                                    class="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center mx-auto focus:outline-none focus:ring-2 focus:ring-red-500">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    {{ showWordExplorer ? 'Hide Word Explorer' : 'Show Word Explorer' }} (単語ページ)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Word Explorer Section -->
                <div v-if="showWordExplorer && kanjiData" class="mb-8">
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Word Explorer for "{{ kanjiData.kanji }}"
                        </h2>

                        <!-- Word Explorer Loading -->
                        <div v-if="wordsLoading" class="text-center py-8">
                            <div class="inline-flex items-center">
                                <svg class="animate-spin -ml-1 mr-3 h-6 w-6 text-red-600"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                                <span class="text-gray-700">Loading vocabulary...</span>
                            </div>
                        </div>

                        <!-- Word Explorer Error -->
                        <div v-if="wordsError"
                            class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded" role="alert">
                            <p class="font-bold">Error</p>
                            <p>{{ wordsError }}</p>
                        </div>

                        <!-- Words List -->
                        <div v-if="wordsData.length > 0" class="space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div v-for="(word, index) in displayedWords" :key="index"
                                    class="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md hover:border-red-300 transition-all bg-white">
                                    <div class="flex flex-col gap-3">
                                        <!-- Written form + pronunciation -->
                                        <div>
                                            <h3 class="text-2xl font-bold text-gray-900 tracking-wide">
                                                {{ getWrittenForm(word) }}
                                            </h3>
                                            <p class="text-red-500 text-lg font-medium">
                                                {{ getPronunciation(word) }}
                                            </p>
                                        </div>

                                        <!-- Meaning -->
                                        <div class="text-gray-700 leading-relaxed text-sm md:text-base">
                                            {{ getMeaning(word) }}
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <!-- Load More Button -->
                            <div v-if="hasMoreWords" class="text-center mt-6">
                                <button @click="loadMoreWords" :disabled="loadingMoreWords"
                                    class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-red-500">
                                    <span v-if="loadingMoreWords">Loading...</span>
                                    <span v-else>Load More Words</span>
                                </button>
                            </div>
                        </div>

                        <!-- No Words Found -->
                        <div v-else-if="!wordsLoading" class="text-center py-8 text-gray-500">
                            <svg class="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p>No vocabulary found for this kanji.</p>
                        </div>
                    </div>
                </div>

                <!-- Empty State -->
                <EmptySection v-if="!kanjiData && !loading" title="Search for a Kanji"
                    description="Enter a kanji character in the search box above to see detailed information"
                    :quick-suggestions="quickSuggestions" />
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import MainLayout from '../components/layouts/MainLayout.vue'
import SearchSection from '../components/common/SearchSection.vue'
import EmptySection from '../components/common/EmptySection.vue'

const searchQuery = ref('')
const kanjiData = ref(null)
const wordsData = ref([])
const loading = ref(false)
const error = ref(null)
const wordsLoading = ref(false)
const wordsError = ref(null)
const showWordExplorer = ref(false)
const wordsPage = ref(1)
const loadingMoreWords = ref(false)
const wordsPerPage = 10

const quickSuggestions = ref(['出', '水', '語', '学', '生', '食'])

const displayedWords = computed(() => {
    return wordsData.value.slice(0, wordsPage.value * wordsPerPage)
})

const hasMoreWords = computed(() => {
    return displayedWords.value.length < wordsData.value.length
})

const setSuggestion = (suggestion) => {
    searchQuery.value = suggestion
    searchKanji()
}

const searchKanji = async () => {
    if (!searchQuery.value.trim()) return

    loading.value = true
    error.value = null
    kanjiData.value = null
    wordsData.value = []
    showWordExplorer.value = false
    wordsPage.value = 1

    try {
        const response = await fetch(`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(searchQuery.value.trim())}`)

        if (!response.ok) {
            throw new Error(`Kanji not found: ${response.status} ${response.statusText}`)
        }

        kanjiData.value = await response.json()
    } catch (err) {
        error.value = err.message
        console.error('Error fetching kanji:', err)
    } finally {
        loading.value = false
    }
}

const toggleWordExplorer = async () => {
    showWordExplorer.value = !showWordExplorer.value

    if (showWordExplorer.value && wordsData.value.length === 0) {
        await fetchWords()
    }
}

const fetchWords = async () => {
    if (!kanjiData.value) return

    wordsLoading.value = true
    wordsError.value = null

    try {
        const response = await fetch(`https://kanjiapi.dev/v1/words/${encodeURIComponent(kanjiData.value.kanji)}`)

        if (!response.ok) {
            throw new Error(`Failed to fetch words: ${response.status} ${response.statusText}`)
        }

        wordsData.value = await response.json()
    } catch (err) {
        wordsError.value = err.message
        console.error('Error fetching words:', err)
    } finally {
        wordsLoading.value = false
    }
}

const loadMoreWords = () => {
    loadingMoreWords.value = true
    setTimeout(() => {
        wordsPage.value += 1
        loadingMoreWords.value = false
    }, 300)
}

const getWrittenForm = (word) => {
    return word.variants[0]?.written || '—'
}

const getPronunciation = (word) => {
    return word.variants[0]?.pronounced || '—'
}

const getMeaning = (word) => {
    if (word.meanings.length === 0) return 'No meaning available'
    return word.meanings[0].glosses.join(', ') || '—'
}

onMounted(() => {
   
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