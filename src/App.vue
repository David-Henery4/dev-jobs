<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderSection from './components/shared/HeaderSection.vue';
</script>

<template>
  <div class="w-full grid grid-cols-mainGridMob font-kumbhSans grid-rows-mainRows pb-16 smMob:grid-cols-mainGridTab lap:grid-cols-mainGridLap desk:grid-cols-mainGridDesk">
    <HeaderSection/>
    <RouterView />
  </div>
</template>

<style></style>
