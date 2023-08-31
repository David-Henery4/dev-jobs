<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderSection from './components/shared/HeaderSection.vue';
</script>

<template>
  <div class="w-full grid grid-cols-mainGridMob font-kumbhSans grid-rows-mainRows pb-16 smMob:grid-cols-mainGridTab tab:grid-rows-mainRowsLg smDesk:grid-cols-mainGridLap lgDesk:grid-cols-mainGridDesk desk:pb-[104px]">
    <HeaderSection/>
    <RouterView />
  </div>
</template>

<style></style>
