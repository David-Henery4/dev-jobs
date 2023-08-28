<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderSection from './components/shared/HeaderSection.vue';
</script>

<template>
  <div class="w-full grid grid-cols-mainGridMob font-kumbhSans grid-rows-mainRows">
    <HeaderSection/>
    <RouterView />
  </div>
</template>

<style></style>
