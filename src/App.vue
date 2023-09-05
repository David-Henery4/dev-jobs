<script setup>
import { RouterView } from 'vue-router'
import HeaderSection from './components/shared/HeaderSection.vue';
</script>

<template>
  <div class="w-full grid grid-cols-mainGridMob font-kumbhSans grid-rows-mainRows smMob:grid-cols-mainGridTab tab:grid-rows-mainRowsLg smDesk:grid-cols-mainGridLap lgDesk:grid-cols-mainGridDesk">
    <HeaderSection/>
    <RouterView />
  </div>
</template>


