<template>
    <MainLayout>
        <HeroSection/>
        <FeatureSection/>
        <PreviewKanji/>
    </MainLayout>
</template>

<script setup>
import FeatureSection from '../components/common/FeatureSection.vue';
import HeroSection from '../components/common/HeroSection.vue';
import PreviewKanji from '../components/common/PreviewKanji.vue';
import MainLayout from '../components/layouts/MainLayout.vue';
import { useHead } from '@vueuse/head'

useHead({
  title: 'Vue Kanji'
})

</script>