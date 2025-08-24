<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Header />

        <main class="flex-grow pb-16 md:pb-0">
            <slot></slot>
        </main>

        <Footer />

        <a href="#main-content" class="skip-link focus:not-sr-only sr-only" aria-label="Skip to main content">
            Skip to main content
        </a>
    </div>
</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<style scoped>
.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: white;
    padding: 8px;
    z-index: 100;
    transition: top 0.3s;
}

.skip-link:focus {
    top: 0;
}
</style>