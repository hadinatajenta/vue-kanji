<!-- src/views/LandingPage.vue -->
<template>
    <div class="min-h-screen bg-gray-50 flex flex-col">
        <!-- Hero Section -->
        <section class="flex flex-col items-center justify-center text-center py-20 px-4">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                Belajar <span class="text-emerald-600">Kanji</span> Lebih Mudah
            </h1>
            <p class="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
                Cari arti, bacaan <span class="text-gray-800 font-medium">音読み (onyomi)</span> &
                <span class="text-gray-800 font-medium">訓読み (kunyomi)</span>, contoh kata, dan banyak lagi.
            </p>

            <!-- Search Box -->
            <div class="w-full max-w-xl flex shadow-md rounded-lg overflow-hidden">
                <input v-model="query" type="text" placeholder="Cari kanji atau kata..."
                    class="flex-1 px-4 py-3 focus:outline-none text-lg" @keyup.enter="handleSearch" />
                <button @click="handleSearch"
                    class="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3">
                    Cari
                </button>
            </div>
        </section>

        <!-- History / Explore Section -->
        <section class="bg-white py-10 px-6 shadow-inner rounded-t-2xl">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">Riwayat Pencarian</h2>
                <div v-if="history.length" class="flex flex-wrap gap-3">
                    <button v-for="char in history" :key="char" @click="goDetail(char)"
                        class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-lg font-medium">
                        {{ char }}
                    </button>
                </div>
                <p v-else class="text-gray-500">Belum ada riwayat. Mulai cari kanji favoritmu!</p>
            </div>
        </section>

        <!-- Extra Section (explore / fun fact) -->
        <section class="flex-1 py-16 px-6 bg-gray-50">
            <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                    <h3 class="font-bold text-xl mb-2 text-emerald-600">Stroke Order</h3>
                    <p class="text-gray-600">Pelajari urutan goresan kanji agar tulisannya rapi dan natural.</p>
                </div>
                <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                    <h3 class="font-bold text-xl mb-2 text-emerald-600">JLPT Level</h3>
                    <p class="text-gray-600">Temukan kanji berdasarkan level JLPT (N5 – N1) sesuai kebutuhanmu.</p>
                </div>
                <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                    <h3 class="font-bold text-xl mb-2 text-emerald-600">Contoh Kata</h3>
                    <p class="text-gray-600">Lihat kata nyata yang menggunakan kanji tersebut untuk pemahaman lebih
                        baik.</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useKanjiStore } from '../stores/kanjiStore'

const router = useRouter()
const store = useKanjiStore()
const query = ref('')

const history = store.history

function handleSearch() {
    if (!query.value.trim()) return
    const char = query.value.trim()
    router.push(`/kanji/${char}`)
    query.value = ''
}

function goDetail(char) {
    router.push(`/kanji/${char}`)
}
</script>
