<template>
    <MainLayout>
        <div class="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-8">
            <div class="container mx-auto px-4">
                <HeaderSection title="Reading Section" subtitle="Discover kanji characters by their readings" />

                <SearchSection v-model="kanaQuery" :quick-suggestions="quickSuggestions" 
                    placeholder="Enter a reading in hiragana or katakana (e.g. みず, カ, しょう)"
                    aria-label="Enter a reading in hiragana or katakana" button-text="Search Reading"
                    @search="searchReading" @suggestion-selected="setSuggestion" 
                />

                <!-- Loading & Error -->
                <Loader :show="loading" message="Searching for readings..." />
                <ErrorAlert :error="error " />

                <!-- Results Section -->
                <div v-if="readingData" class="mb-8">
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-6 text-center">
                            Kanji with reading: <span class="text-red-600">{{ readingData.reading }}</span>
                        </h2>

                        <!-- Main Kanji Section -->
                        <div v-if="mainKanjiWithDetails.length > 0" class="mb-8">
                            <h3 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Main Kanji</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div v-for="kanji in mainKanjiWithDetails" :key="kanji.character"
                                    class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div class="text-center">
                                        <div class="text-5xl font-bold text-red-700 mb-2">{{ kanji.character }}</div>
                                        <p class="text-gray-600 mb-2">{{ kanji.meanings ? kanji.meanings.join(', ') :
                                            'Loading...' }}</p>

                                        <div
                                            class="flex justify-center items-center space-x-4 text-sm text-gray-500 mb-3">
                                            <span v-if="kanji.jlpt">JLPT N{{ kanji.jlpt }}</span>
                                            <span v-if="kanji.grade">Grade {{ kanji.grade }}</span>
                                            <span v-if="kanji.stroke_count">{{ kanji.stroke_count }} strokes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Name Kanji Section -->
                        <div v-if="nameKanjiWithDetails.length > 0">
                            <h3 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Name Kanji</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div v-for="kanji in nameKanjiWithDetails" :key="kanji.character"
                                    class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div class="text-center">
                                        <div class="text-5xl font-bold text-red-700 mb-2">{{ kanji.character }}</div>
                                        <p class="text-gray-600 mb-2">{{ kanji.meanings ? kanji.meanings.join(', ') :
                                            'Loading...' }}</p>

                                        <div
                                            class="flex justify-center items-center space-x-4 text-sm text-gray-500 mb-3">
                                            <span v-if="kanji.jlpt">JLPT N{{ kanji.jlpt }}</span>
                                            <span v-if="kanji.grade">Grade {{ kanji.grade }}</span>
                                            <span v-if="kanji.stroke_count">{{ kanji.stroke_count }} strokes</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Empty Results -->
                        <div v-if="mainKanjiWithDetails.length === 0 && nameKanjiWithDetails.length === 0"
                            class="text-center py-8">
                            <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p class="text-gray-600">No kanji found with this reading.</p>
                        </div>
                    </div>
                </div>

                <!-- Reading Type Info -->
                <div v-if="readingData" class="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">About This Reading</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-red-50 rounded-lg p-4">
                            <h4 class="font-medium text-red-800 mb-2">Reading Type</h4>
                            <p class="text-gray-700">
                                <span class="font-mono text-lg">{{ readingData.reading }}</span> is
                                <span class="font-semibold">{{ detectReadingType(readingData.reading) }}</span>
                            </p>
                        </div>
                        <div class="bg-red-50 rounded-lg p-4">
                            <h4 class="font-medium text-red-800 mb-2">Total Kanji Found</h4>
                            <p class="text-gray-700">
                                <span class="text-2xl font-bold text-red-700">{{ totalKanjiCount }}</span> kanji
                                use this reading
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Reading Type Explanation -->
                <div v-if="readingData" class="bg-white rounded-xl shadow-lg p-6">
                    <h3 class="text-xl font-semibold text-gray-800 mb-4">Understanding Japanese Readings</h3>
                    <div class="prose max-w-none">
                        <p>Japanese kanji can have multiple readings, which generally fall into two categories:</p>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            <div class="bg-blue-50 p-4 rounded-lg">
                                <h4 class="font-semibold text-blue-800 mb-2">On'yomi (音読み)</h4>
                                <p>The "sound reading" based on the original Chinese pronunciation. These are often used
                                    in compound words.</p>
                                <p class="mt-2"><strong>Example:</strong> 水 (water) has on'yomi reading スイ as in 水泳
                                    (すいえい - swimming).</p>
                            </div>

                            <div class="bg-green-50 p-4 rounded-lg">
                                <h4 class="font-semibold text-green-800 mb-2">Kun'yomi (訓読み)</h4>
                                <p>The "meaning reading" based on native Japanese words. These are often used when a
                                    kanji appears alone.</p>
                                <p class="mt-2"><strong>Example:</strong> 水 (water) has kun'yomi reading みず as in 水 (みず
                                    - water).</p>
                            </div>
                        </div>

                        <div class="mt-6 bg-yellow-50 p-4 rounded-lg">
                            <h4 class="font-semibold text-yellow-800 mb-2">Name Readings (名乗り読み)</h4>
                            <p>Special readings used almost exclusively in names. These can be unusual and not follow
                                standard patterns.</p>
                            <p class="mt-2"><strong>Example:</strong> 月 (moon) is normally read as つき or ゲツ but can be
                                read as がつ in names.</p>
                        </div>
                    </div>
                </div>

                <!-- Empty State -->
                <EmptySection v-if="!readingData && !loading" title="Explore Kanji Readings"
                    description="Enter a reading in hiragana or katakana to discover kanji that use that reading"
                    :quick-suggestions="quickSuggestions">
                    <template #icon>
                        <svg class="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </template>
                </EmptySection>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import MainLayout from '../components/layouts/MainLayout.vue'
import EmptySection from '../components/common/EmptySection.vue'
import SearchSection from '../components/common/SearchSection.vue'
import { useHead } from '@vueuse/head'
import HeaderSection from '../components/common/HeaderSection.vue'
import Loader from '../components/common/Loader.vue'
import ErrorAlert from '../components/common/ErrorAlert.vue'
import * as wanakana from 'wanakana'
import api from '../api/api'
import { toast } from 'vue3-toastify'
useHead({
  title: 'Vue Kanji | Kanji Reading'
})

const readingQuery = ref('')
const readingData = ref(null)
const kanjiDetails = ref({})
const loading = ref(false)
const error = ref(null)

const kanaQuery = computed({
  get: () => wanakana.toKana(readingQuery.value, { IMEMode: true }),
  set: (val) => { readingQuery.value = val }
})

const quickSuggestions = ref(['みず', 'カ', 'しょう', 'あめ', 'き', 'はな'])

const mainKanjiWithDetails = computed(() => {
    if (!readingData.value || !readingData.value.main_kanji) return []
    return readingData.value.main_kanji.map(character => ({
        character,
        ...(kanjiDetails.value[character] || {})
    }))
})

const nameKanjiWithDetails = computed(() => {
    if (!readingData.value || !readingData.value.name_kanji) return []
    return readingData.value.name_kanji.map(character => ({
        character,
        ...(kanjiDetails.value[character] || {})
    }))
})

const totalKanjiCount = computed(() => {
    if (!readingData.value) return 0
    return (readingData.value.main_kanji?.length || 0) + (readingData.value.name_kanji?.length || 0)
})

// Methods
const setSuggestion = (suggestion) => {
    readingQuery.value = suggestion
    searchReading()
}

const searchReading = async () => {
    if (!readingQuery.value.trim()) return

    loading.value = true
    error.value = null
    readingData.value = null
    kanjiDetails.value = {}
    const kana = wanakana.toKana(readingQuery.value, { IMEMode: false })

    try {
        const response = await api.get(`/reading/${encodeURIComponent(kana)}`)
        const data =  response.data
        readingData.value = data

        await fetchKanjiDetails([...data.main_kanji, ...data.name_kanji])
    } catch (err) {
        error.value = err.message
        toast.error(`Error fetching kana!`)
        console.error('Error fetching reading:', err)
    } finally {
        loading.value = false
    }
}

const fetchKanjiDetails = async (kanjiList) => {
    if (!kanjiList || kanjiList.length === 0) return

    const fetchPromises = kanjiList.map(async (character) => {
        if (kanjiDetails.value[character]) return 

        try {
            const response = await api.get(`/kanji/${encodeURIComponent(character)}`)

            const data =  response.data
            kanjiDetails.value = {
                ...kanjiDetails.value,
                [character]: data
            }
        } catch (err) {
            toast.error(`Error fetch detail kanji!`)
            console.error(`Error fetching details for ${character}:`, err)
        }
    })

    await Promise.all(fetchPromises)
}

const detectReadingType = (reading) => {
    const hiraganaRegex = /^[\u3040-\u309F]+$/
    const katakanaRegex = /^[\u30A0-\u30FF]+$/

    if (hiraganaRegex.test(reading)) {
        return "Hiragana (likely Kun'yomi)"
    } else if (katakanaRegex.test(reading)) {
        return "Katakana (likely On'yomi)"
    } else {
        return "Mixed or other"
    }
}

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