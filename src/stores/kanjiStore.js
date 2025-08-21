import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '../api/api'

export const useKanjiStore = defineStore('kanji', () => {
    // state
    const currentKanji = ref(null)
    const wordExamples = ref([])
    const history = ref(JSON.parse(localStorage.getItem('searchHistory') || '[]'))
    const loading = ref(false)
    const error = ref(null)

    // actions
    async function fetchKanji(char) {
        loading.value = true
        error.value = null
        try {
            const { data } = await api.get(`/kanji/${char}`)
            currentKanji.value = data
            addHistory(char)
        } catch (err) {
            error.value = err.message || 'Something went wrong'
            currentKanji.value = null
        } finally {
            loading.value = false
        }
    }

    async function fetchExamples(word) {
        loading.value = true
        error.value = null
        try {
            const { data } = await api.get(`/words/${word}`)
            wordExamples.value = data
        } catch (err) {
            error.value = err.message || 'Something went wrong'
            wordExamples.value = []
        } finally {
            loading.value = false
        }
    }

    function addHistory(char) {
        if (!history.value.includes(char)) {
            history.value.unshift(char)
            history.value = history.value.slice(0, 10) 
            localStorage.setItem('searchHistory', JSON.stringify(history.value))
        }
    }

    return {
        // state
        currentKanji,
        wordExamples,
        history,
        loading,
        error,

        // actions
        fetchKanji,
        fetchExamples,
        addHistory,
    }
})
