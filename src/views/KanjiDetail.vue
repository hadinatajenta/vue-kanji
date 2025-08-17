<template>
    <div class="min-h-screen bg-gray-50 py-10 px-4">
        <div class="max-w-4xl mx-auto">
            <!-- Loading / Error -->
            <div v-if="loading" class="text-center text-gray-500 py-10">Loading...</div>
            <div v-else-if="error" class="text-center text-red-600 py-10">{{ error }}</div>

            <!-- Kanji detail -->
            <div v-else-if="currentKanji" class="bg-white shadow-lg rounded-2xl p-8">
                <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <!-- Big kanji -->
                    <div class="text-7xl font-bold text-emerald-600">{{ currentKanji.kanji }}</div>

                    <!-- Info -->
                    <div class="flex-1 space-y-3">
                        <h2 class="text-2xl font-semibold text-gray-800">Informasi Kanji</h2>
                        <p class="text-gray-700"><span class="font-medium">Meaning:</span> {{
                            currentKanji.meanings?.join(', ') }}</p>
                        <p class="text-gray-700"><span class="font-medium">Onyomi (音読み):</span> {{
                            currentKanji.on_readings?.join(', ') || '-' }}</p>
                        <p class="text-gray-700"><span class="font-medium">Kunyomi (訓読み):</span> {{
                            currentKanji.kun_readings?.join(', ') || '-' }}</p>
                        <p class="text-gray-700"><span class="font-medium">Stroke Count:</span> {{
                            currentKanji.stroke_count }}</p>
                        <p class="text-gray-700"><span class="font-medium">JLPT Level:</span> {{ currentKanji.jlpt ||
                            '-' }}</p>
                        <p class="text-gray-700"><span class="font-medium">Grade:</span> {{ currentKanji.grade || '-' }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Word examples -->
            <div v-if="wordExamples.length" class="mt-10">
                <h3 class="text-xl font-semibold text-gray-800 mb-4">Contoh Kata</h3>
                <div class="grid md:grid-cols-2 gap-4">
                    <div v-for="(word, idx) in wordExamples.slice(0, 8)" :key="idx"
                        class="bg-white shadow rounded-lg p-4 hover:shadow-md transition">
                        <p class="text-xl font-bold text-emerald-600">{{ word.variants[0]?.written }}</p>
                        <p class="text-gray-600">{{ word.variants[0]?.pronounced }}</p>
                        <p class="text-gray-700 text-sm mt-2">{{ word.meanings[0]?.glosses?.join(', ') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useKanjiStore } from '../stores/kanjiStore'

const route = useRoute()
const store = useKanjiStore()

const { currentKanji, wordExamples, fetchKanji, fetchExamples, loading, error } = store

// Fetch when route param changes
const loadKanji = async (char) => {
    await fetchKanji(char)
    await fetchExamples(char)
}

onMounted(() => {
    if (route.params.char) loadKanji(route.params.char)
})

watch(() => route.params.char, (newChar) => {
    if (newChar) loadKanji(newChar)
})
</script>
