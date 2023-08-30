<script setup>
import JobBox from './job/JobBox.vue'
import localData from "../../local-data/data.json";
</script>

<template>
  <div class="w-full mt-14 grid gap-y-12 gap-x-3 grid-cols-jobsGrid tab:mt-[69px] tab:gap-y-16 smDesk:gap-x-[30px] desk:grid-cols-jobsGridLg desk:mt-[104px]">
    <JobBox v-for="job in localData" :job="job" :key="job?.id" />
  </div>
  <button class="py-4 px-8 rounded-md bg-violet text-mainWhite mt-8 font-bold hover:bg-lightViolet active:bg-violet tab:mt-14">Load More</button>
</template>
