<script setup>
import {onMounted} from "vue"
import { RouterView } from 'vue-router'
import HeaderSection from './components/shared/HeaderSection.vue';
import useThemeChange from "./composables/useThemeChange";
const {checkSystemPreference} = useThemeChange()
onMounted(() => {
  // console.log("callled")
  checkSystemPreference()
})
</script>

<template>
  <div class="w-full grid grid-cols-mainGridMob font-kumbhSans grid-rows-mainRows smMob:grid-cols-mainGridTab tab:grid-rows-mainRowsLg smDesk:grid-cols-mainGridLap lgDesk:grid-cols-mainGridDesk">
    <HeaderSection/>
    <RouterView />
  </div>
</template>


