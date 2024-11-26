<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <HeaderPage class="" />
    <main class="grow">
      <RouterView />
    </main>
    <FooterPage />
  </div>
</template>
