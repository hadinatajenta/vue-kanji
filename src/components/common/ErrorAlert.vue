<template>
    <div v-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8 rounded" role="alert">
        <p class="font-bold">Error</p>
        <p>{{ error }}</p>
    </div>
</template>

<script setup>
defineProps({
    error: { type: String, default: null }
})
</script>
