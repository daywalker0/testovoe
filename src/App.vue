<template>
  <div id="app">
    <Header />
    <div class="main-content">
      <MainSection />
      <SliderSection />
      <BlockSection />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import MainSection from './components/MainSection.vue'
import SliderSection from './components/SliderSection.vue'
import BlockSection from './components/BlockSection.vue'

useHead({
  title: 'Тестовое задание',
  meta: [
    {
      name: 'description',
      content: 'Описание'
    }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png'
    }
  ]
})
</script>

<style lang="scss">
@use '@/assets/styles/_main.scss' as *;
</style>
