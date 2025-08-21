<template>
    <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div class="flex flex-col md:flex-row gap-4 items-center">
            <div class="flex-1 w-full relative">
                <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
                    @keyup.enter="$emit('search')" type="text" :placeholder="placeholder"
                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    :aria-label="ariaLabel" />
                <button @click="$emit('search')"
                    class="absolute right-2 top-2 p-1 text-gray-500 hover:text-red-600 focus:outline-none"
                    aria-label="Search">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
            <button @click="$emit('search')"
                class="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500">
                {{ buttonText }}
            </button>
        </div>

        <div v-if="quickSuggestions && quickSuggestions.length" class="mt-4 flex flex-wrap gap-2">
            <span class="text-sm text-gray-600">Try:</span>
            <button v-for="suggestion in quickSuggestions" :key="suggestion"
                @click="$emit('suggestion-selected', suggestion)"
                class="text-sm bg-red-100 hover:bg-red-200 text-red-700 px-2 py-1 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-red-500">
                {{ suggestion }}
            </button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    modelValue: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        default: "Search..."
    },
    ariaLabel: {
        type: String,
        default: "Search input"
    },
    buttonText: {
        type: String,
        default: "Search"
    },
    quickSuggestions: {
        type: Array,
        default: () => []
    }
})

defineEmits(['update:modelValue', 'search', 'suggestion-selected'])
</script>