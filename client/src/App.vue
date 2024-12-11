<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col bg-violet-50">
    <HeaderPage class="px-4 py-4" />
    <main class="grow px-4 md:px-14 lg:px-16 py-6 md:py-8 lg:py-10">
      <RouterView />
    </main>
    <FooterPage class="px-4 py-4" />
  </div>
</template>
