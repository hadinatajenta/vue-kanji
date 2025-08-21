<template>
    <div class="text-center py-12">
        <div class="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
            <slot name="icon">
                <svg class="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            </slot>

            <h2 class="text-xl font-semibold text-gray-800 mb-2">
                <slot name="title">{{ title }}</slot>
            </h2>

            <p class="text-gray-600 mb-4">
                <slot name="description">{{ description }}</slot>
            </p>

            <div v-if="quickSuggestions && quickSuggestions.length" class="text-sm text-gray-500">
                <p>
                    <slot name="suggestion-label">Try one of these examples:</slot>
                </p>
                <div class="flex justify-center mt-2 space-x-2">
                    <span v-for="suggestion in quickSuggestions" :key="suggestion"
                        class="bg-red-100 text-red-700 px-2 py-1 rounded">
                        {{ suggestion }}
                    </span>
                </div>
            </div>

            <slot name="additional-content"></slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: "No results found"
    },
    description: {
        type: String,
        default: "Try searching for something else"
    },
    quickSuggestions: {
        type: Array,
        default: () => []
    }
})
</script>