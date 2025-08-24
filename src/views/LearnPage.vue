<template>
    <MainLayout>
        <div class="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-8">
            <div class="container mx-auto px-4">
                <HeaderSection title="Kanji Learning Path"
                    subtitle="Systematically learn Japanese kanji through structured progression" />

                <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Select Learning Mode</h2>

                    <!-- Mode Tabs -->
                    <div class="flex flex-wrap gap-2 mb-6">
                        <button v-for="mode in learningModes" :key="mode.id" @click="selectMode(mode.id)"
                            class="px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                            :class="[
                                activeMode === mode.id
                                    ? 'bg-red-600 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            ]">
                            {{ mode.label }}
                        </button>
                    </div>

                    <div v-if="activeMode !== 'joyo'" class="mb-6">
                        <h3 class="text-lg font-medium text-gray-800 mb-3">Select Level</h3>
                        <div class="flex flex-wrap gap-2">
                            <button v-for="level in levels" :key="level" @click="selectLevel(level)"
                                class="px-3 py-1 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                                :class="[
                                    activeLevel === level
                                        ? 'bg-red-600 text-white shadow-md'
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                ]">
                                {{ activeMode === 'jlpt' ? `N${level}` : `Grade ${level}` }}
                            </button>
                        </div>
                    </div>

                    <!-- Progress Summary -->
                    <div v-if="kanjiList.length > 0" class="bg-red-50 rounded-lg p-4">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-sm font-medium text-red-800">Progress</span>
                            <span class="text-sm font-medium text-red-800">{{ learnedCount }} / {{ kanjiList.length }}
                                learned</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5">
                            <div class="bg-red-600 h-2.5 rounded-full transition-all duration-500"
                                :style="{ width: `${(learnedCount / kanjiList.length) * 100}%` }"></div>
                        </div>
                    </div>
                </div>

                <!-- Loading State -->
                <Loader :show="loading" message="Loading..." />

                <!-- Error State -->
                <ErrorAlert :error="error" />

                <!-- Kanji Grid -->
                <div v-if="kanjiList.length > 0" class="mb-8">
                    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                        <div v-for="kanji in kanjiList" :key="kanji" @click="openKanjiDetails(kanji)"
                            class="aspect-square bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
                            :class="{
                                'bg-green-100 border-2 border-green-300': getProgressStatus(kanji) === 'learned',
                                'bg-yellow-100 border-2 border-yellow-300': getProgressStatus(kanji) === 'learning',
                                'bg-white border border-gray-200': getProgressStatus(kanji) === 'not-learned'
                            }" :aria-label="`Kanji ${kanji}, status: ${getProgressStatus(kanji)}`">
                            <div class="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{{ kanji }}</div>

                            <div class="flex items-center justify-center mt-auto">
                                <svg v-if="getProgressStatus(kanji) === 'learned'" class="w-5 h-5 text-green-600"
                                    fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"></path>
                                </svg>

                                <svg v-else-if="getProgressStatus(kanji) === 'learning'" class="w-4 h-4 text-yellow-600"
                                    fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                                        clip-rule="evenodd"></path>
                                </svg>

                                <div v-else class="w-2 h-2 bg-gray-400 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Empty State -->
                <div v-if="!loading && kanjiList.length === 0 && !error" class="text-center py-12">
                    <div class="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
                        <svg class="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <h2 class="text-xl font-semibold text-gray-800 mb-2">Select a Learning Path</h2>
                        <p class="text-gray-600 mb-4">Choose a learning mode and level to start your kanji journey</p>
                    </div>
                </div>

                <!-- Kanji Detail Modal -->
                <div v-if="selectedKanji"
                    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div class="bg-white rounded-xl shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                        <div
                            class="sticky top-0 bg-white p-4 border-b border-gray-200 flex justify-between items-center">
                            <h3 class="text-xl font-semibold text-gray-800">Kanji Details</h3>
                            <button @click="selectedKanji = null"
                                class="text-gray-500 hover:text-gray-700 focus:outline-none">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div class="p-6" v-if="kanjiDetails[selectedKanji]">
                            <div class="text-center mb-6">
                                <div class="text-7xl font-bold text-red-700 mb-2">{{ selectedKanji }}</div>
                                <p class="text-lg text-gray-700">{{ kanjiDetails[selectedKanji].meanings.join(', ') }}
                                </p>
                            </div>

                            <div class="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                                        On'yomi</h4>
                                    <p class="text-lg font-medium">{{ kanjiDetails[selectedKanji].on_readings.join('、')
                                        || '—' }}</p>
                                </div>
                                <div>
                                    <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                                        Kun'yomi</h4>
                                    <p class="text-lg font-medium">{{ kanjiDetails[selectedKanji].kun_readings.join('、')
                                        || '—' }}</p>
                                </div>
                                <div>
                                    <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                                        Strokes</h4>
                                    <p class="text-lg font-medium">{{ kanjiDetails[selectedKanji].stroke_count }}</p>
                                </div>
                                <div>
                                    <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">JLPT
                                    </h4>
                                    <p class="text-lg font-medium">{{ kanjiDetails[selectedKanji].jlpt ?
                                        `N${kanjiDetails[selectedKanji].jlpt}` : '—' }}</p>
                                </div>
                            </div>

                            <div class="flex justify-center space-x-4 mt-6">
                                <button @click="setProgressStatus(selectedKanji, 'not-learned')"
                                    class="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400">
                                    Mark as New
                                </button>
                                <button @click="setProgressStatus(selectedKanji, 'learning')"
                                    class="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400">
                                    Learning
                                </button>
                                <button @click="setProgressStatus(selectedKanji, 'learned')"
                                    class="px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400">
                                    Learned
                                </button>
                            </div>
                        </div>

                        <div v-else class="p-6 text-center">
                            <svg class="animate-spin mx-auto mb-4 h-8 w-8 text-red-600"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            <p>Loading details...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import MainLayout from '../components/layouts/MainLayout.vue'
import { useHead } from '@vueuse/head'
import HeaderSection from '../components/common/HeaderSection.vue'
import Loader from '../components/common/Loader.vue'
import ErrorAlert from '../components/common/ErrorAlert.vue'

useHead({
  title: 'Vue Kanji | Learn'
})

const learningModes = ref([
    { id: 'jlpt', label: 'JLPT Level' },
    { id: 'grade', label: 'School Grade' },
    { id: 'joyo', label: 'Jōyō Kanji' }
])

const jlptLevels = ref(['5', '4', '3', '2', '1'])
const gradeLevels = ref(['1', '2', '3', '4', '5', '6'])

const activeMode = ref('jlpt')
const activeLevel = ref('5')
const kanjiList = ref([])
const kanjiDetails = ref({})
const selectedKanji = ref(null)
const loading = ref(false)
const error = ref(null)
const progress = ref({})

const levels = computed(() => {
    return activeMode.value === 'jlpt' ? jlptLevels.value : gradeLevels.value
})

const learnedCount = computed(() => {
    return kanjiList.value.filter(kanji => getProgressStatus(kanji) === 'learned').length
})

// Methods
const selectMode = (mode) => {
    activeMode.value = mode
    if (mode === 'joyo') {
        fetchKanjiList()
    }
}

const selectLevel = (level) => {
    activeLevel.value = level
    fetchKanjiList()
}

const fetchKanjiList = async () => {
    loading.value = true
    error.value = null
    kanjiList.value = []

    try {
        let apiUrl
        if (activeMode.value === 'joyo') {
            apiUrl = 'https://kanjiapi.dev/v1/kanji/joyo'
        } else {
            const type = activeMode.value === 'jlpt' ? 'jlpt' : 'grade'
            apiUrl = `https://kanjiapi.dev/v1/kanji/${type}-${activeLevel.value}`
        }

        const response = await fetch(apiUrl)

        if (!response.ok) {
            throw new Error(`Failed to fetch kanji list: ${response.status} ${response.statusText}`)
        }

        kanjiList.value = await response.json()

        // Preload details for the first few kanji
        const firstBatch = kanjiList.value.slice(0, 10)
        for (const character of firstBatch) {
            await fetchKanjiDetails(character)
        }
    } catch (err) {
        error.value = err.message
        console.error('Error fetching kanji list:', err)
    } finally {
        loading.value = false
    }
}

const fetchKanjiDetails = async (character) => {
    if (kanjiDetails.value[character]) return

    try {
        const response = await fetch(`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(character)}`)

        if (!response.ok) {
            console.warn(`Failed to fetch details for ${character}: ${response.status}`)
            return
        }

        const data = await response.json()
        kanjiDetails.value = {
            ...kanjiDetails.value,
            [character]: data
        }
    } catch (err) {
        console.error(`Error fetching details for ${character}:`, err)
    }
}

const openKanjiDetails = async (kanji) => {
    selectedKanji.value = kanji
    await fetchKanjiDetails(kanji)
}

// Progress tracking methods
const loadProgress = () => {
    const savedProgress = localStorage.getItem('kanjiProgress')
    if (savedProgress) {
        progress.value = JSON.parse(savedProgress)
    }
}

const saveProgress = () => {
    localStorage.setItem('kanjiProgress', JSON.stringify(progress.value))
}

const getProgressStatus = (kanji) => {
    return progress.value[kanji] || 'not-learned'
}

const setProgressStatus = (kanji, status) => {
    progress.value[kanji] = status
    saveProgress()
    selectedKanji.value = null
}

// Initialize
onMounted(() => {
    loadProgress()
})

// Watch for mode/level changes
watch([activeMode, activeLevel], () => {
    if (activeMode.value !== 'joyo') {
        fetchKanjiList()
    }
})

// Initial fetch
fetchKanjiList()
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