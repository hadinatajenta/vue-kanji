<template>
    <MainLayout>
        <div class="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-8">
            <div class="container mx-auto px-4">
                <!-- Header Section -->
                <div class="text-center mb-12">
                    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">How It Works</h1>
                    <p class="text-lg text-gray-700">Learn how to make the most of our kanji learning platform</p>
                </div>

                <!-- Navigation Tabs -->
                <div class="bg-white rounded-xl shadow-lg p-4 mb-8 sticky top-4 z-10">
                    <div class="flex flex-wrap gap-2 justify-center">
                        <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id"
                            class="px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                            :class="[
                                activeTab === tab.id
                                    ? 'bg-red-600 text-white'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            ]">
                            {{ tab.label }}
                        </button>
                    </div>
                </div>

                <!-- Flashcard Guide -->
                <div v-if="activeTab === 'flashcards'" class="space-y-8">
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <svg class="w-8 h-8 text-red-600 mr-3" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            Flashcard Learning
                        </h2>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-4">
                                <h3 class="text-lg font-semibold text-gray-700">Getting Started</h3>
                                <ol class="list-decimal list-inside space-y-2 text-gray-600">
                                    <li>Pilih level JLPT yang ingin Anda pelajari (N5 untuk pemula hingga N1 untuk
                                        mahir)</li>
                                    <li>Sistem akan menampilkan daftar kanji sesuai level yang dipilih</li>
                                    <li>Klik kartu untuk membalik dan melihat detail kanji</li>
                                    <li>Gunakan tombol navigasi atau keyboard (panah kiri/kanan) untuk berpindah kartu
                                    </li>
                                </ol>
                            </div>

                            <div class="space-y-4">
                                <h3 class="text-lg font-semibold text-gray-700">Tips & Tricks</h3>
                                <ul class="list-disc list-inside space-y-2 text-gray-600">
                                    <li>Gunakan tombol <span class="font-semibold">Shuffle</span> untuk mengacak urutan
                                        kartu</li>
                                    <li>Tekan <span class="bg-gray-100 px-2 py-1 rounded">Spasi</span> untuk membalik
                                        kartu dengan cepat</li>
                                    <li>Gunakan tombol <span class="bg-gray-100 px-2 py-1 rounded">Reset</span> untuk
                                        kembali ke kartu pertama</li>
                                    <li>Progress belajar disimpan secara otomatis di browser Anda</li>
                                </ul>
                            </div>
                        </div>

                        <div class="mt-6 p-4 bg-red-50 rounded-lg">
                            <h4 class="font-semibold text-red-800 mb-2">💡 Did You Know?</h4>
                            <p class="text-red-700">Metode flashcard adalah salah satu teknik paling efektif untuk
                                mempelajari kanji karena menggunakan prinsip pengulangan berkala (spaced repetition).
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Dictionary Guide -->
                <div v-if="activeTab === 'dictionary'" class="space-y-8">
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <svg class="w-8 h-8 text-red-600 mr-3" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            Kanji Dictionary
                        </h2>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-4">
                                <h3 class="text-lg font-semibold text-gray-700">Cara Menggunakan</h3>
                                <ol class="list-decimal list-inside space-y-2 text-gray-600">
                                    <li>Masukkan karakter kanji yang ingin Anda cari di kolom pencarian</li>
                                    <li>Tekan Enter atau klik tombol "Search" untuk menampilkan hasil</li>
                                    <li>Gunakan saran cepat untuk mencoba contoh kanji populer</li>
                                    <li>Klik "Show Word Explorer" untuk melihat contoh kata yang menggunakan kanji
                                        tersebut</li>
                                </ol>
                            </div>

                            <div class="space-y-4">
                                <h3 class="text-lg font-semibold text-gray-700">Informasi yang Disediakan</h3>
                                <ul class="list-disc list-inside space-y-2 text-gray-600">
                                    <li>Arti dan makna kanji</li>
                                    <li>Bacaan On'yomi (China-derived) dan Kun'yomi (Jepang asli)</li>
                                    <li>Jumlah goresan (stroke count)</li>
                                    <li>Level JLPT dan grade sekolah</li>
                                    <li>Contoh kata dan penggunaan</li>
                                </ul>
                            </div>
                        </div>

                        <div class="mt-6 p-4 bg-red-50 rounded-lg">
                            <h4 class="font-semibold text-red-800 mb-2">💡 Pro Tip</h4>
                            <p class="text-red-700">Gunakan Word Explorer untuk mempelajari kata-kata praktis yang
                                menggunakan kanji yang sedang Anda pelajari. Ini membantu memahami konteks penggunaan
                                kanji.</p>
                        </div>
                    </div>
                </div>

                <!-- Reading Explorer Guide -->
                <div v-if="activeTab === 'reading'" class="space-y-8">
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <svg class="w-8 h-8 text-red-600 mr-3" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            Reading Explorer
                        </h2>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-4">
                                <h3 class="text-lg font-semibold text-gray-700">Cara Kerja</h3>
                                <ol class="list-decimal list-inside space-y-2 text-gray-600">
                                    <li>Masukkan bacaan dalam hiragana atau katakana di kolom pencarian</li>
                                    <li>Sistem akan menampilkan semua kanji yang memiliki bacaan tersebut</li>
                                    <li>Hasil dibagi menjadi Main Kanji (penggunaan umum) dan Name Kanji (untuk nama)
                                    </li>
                                    <li>Klik pada kanji untuk melihat detail lengkapnya</li>
                                </ol>
                            </div>

                            <div class="space-y-4">
                                <h3 class="text-lg font-semibold text-gray-700">Contoh Pencarian</h3>
                                <ul class="list-disc list-inside space-y-2 text-gray-600">
                                    <li>みず → Kanji seperti 水 (air) dan 瀣</li>
                                    <li>カ → Kanji seperti 化 (perubahan) dan 課 (pelajaran)</li>
                                    <li>しょう → Kanji seperti 小 (kecil) dan 章 (bab)</li>
                                    <li>あめ → Kanji seperti 雨 (hujan) dan 飴 (permen)</li>
                                </ul>
                            </div>
                        </div>

                        <div class="mt-6 p-4 bg-red-50 rounded-lg">
                            <h4 class="font-semibold text-red-800 mb-2">📝 Catatan Penting</h4>
                            <p class="text-red-700">Beberapa bacaan memiliki banyak kanji terkait. Bacaan dalam hiragana
                                biasanya menunjukkan kun-yomi (bacaan Jepang), sedangkan katakana menunjukkan on-yomi
                                (bacaan China).</p>
                        </div>
                    </div>
                </div>

                <!-- Learn Page Guide -->
                <div v-if="activeTab === 'learn'" class="space-y-8">
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                            <svg class="w-8 h-8 text-red-600 mr-3" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            Learn Page
                        </h2>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-4">
                                <h3 class="text-lg font-semibold text-gray-700">Mode Belajar</h3>
                                <ul class="list-disc list-inside space-y-2 text-gray-600">
                                    <li><span class="font-semibold">JLPT Level</span>: Belajar kanji berdasarkan level
                                        ujian kemampuan bahasa Jepang</li>
                                    <li><span class="font-semibold">School Grade</span>: Belajar kanji berdasarkan
                                        tingkat kesulitan (kelas 1-6)</li>
                                    <li><span class="font-semibold">Jōyō Kanji</span>: Belajar semua 2,136 kanji standar
                                        bahasa Jepang</li>
                                </ul>
                            </div>

                            <div class="space-y-4">
                                <h3 class="text-lg font-semibold text-gray-700">Pelacakan Progress</h3>
                                <ul class="list-disc list-inside space-y-2 text-gray-600">
                                    <li>Setiap kanji memiliki status: belum dipelajari, sedang dipelajari, atau sudah
                                        dikuasai</li>
                                    <li>Progress disimpan secara lokal di browser Anda</li>
                                    <li>Progress bar menunjukkan perkembangan belajar Anda</li>
                                    <li>Statistik menunjukkan jumlah kanji dalam setiap kategori</li>
                                </ul>
                            </div>
                        </div>

                        <div class="mt-6 p-4 bg-red-50 rounded-lg">
                            <h4 class="font-semibold text-red-800 mb-2">🎯 Strategi Belajar</h4>
                            <p class="text-red-700">Mulailah dari level termudah (N5 atau Grade 1) dan naik level secara
                                bertahap. Fokus pada penguasaan kanji dasar sebelum melanjutkan ke level yang lebih
                                sulit.</p>
                        </div>
                    </div>
                </div>

                <!-- General Tips -->
                <div class="bg-white rounded-xl shadow-lg p-6 mt-8">
                    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Tips Belajar Kanji Efektif</h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div class="bg-red-50 p-4 rounded-lg">
                            <div
                                class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="font-semibold text-center text-red-800 mb-2">Konsistensi</h3>
                            <p class="text-sm text-red-700 text-center">Belajar sedikit setiap hari lebih efektif
                                daripada belajar banyak sekaligus.</p>
                        </div>

                        <div class="bg-red-50 p-4 rounded-lg">
                            <div
                                class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <h3 class="font-semibold text-center text-red-800 mb-2">Variasi</h3>
                            <p class="text-sm text-red-700 text-center">Gunakan berbagai metode (flashcard, menulis,
                                membaca) untuk hasil terbaik.</p>
                        </div>

                        <div class="bg-red-50 p-4 rounded-lg">
                            <div
                                class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 class="font-semibold text-center text-red-800 mb-2">Pengulangan</h3>
                            <p class="text-sm text-red-700 text-center">Ulangi kanji yang sudah dipelajari secara
                                berkala untuk memperkuat memori.</p>
                        </div>

                        <div class="bg-red-50 p-4 rounded-lg">
                            <div
                                class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                                <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 class="font-semibold text-center text-red-800 mb-2">Komunitas</h3>
                            <p class="text-sm text-red-700 text-center">Bergabunglah dengan komunitas pembelajar bahasa
                                Jepang untuk motivasi dan dukungan.</p>
                        </div>
                    </div>
                </div>

                <!-- Call to Action -->
                <div class="text-center mt-12">
                    <router-link to="/learn"
                        class="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500">
                        Mulai Belajar Sekarang
                    </router-link>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import { ref } from 'vue'
import MainLayout from '../components/layouts/MainLayout.vue'

const activeTab = ref('flashcards')

const tabs = [
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'dictionary', label: 'Dictionary' },
    { id: 'reading', label: 'Reading Explorer' },
    { id: 'learn', label: 'Learn Page' }
]
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

.sticky {
    position: sticky;
}
</style>