<script setup>
import JobBox from './job/JobBox.vue'
import localData from "../../local-data/data.json";
import {RouterLink} from "vue-router"
import {userJobsStore} from "../../stores/jobs";
const store = userJobsStore()
</script>

<template>
  <div class="w-full mt-14 grid gap-y-12 gap-x-3 grid-cols-jobsGrid tab:mt-[69px] tab:gap-y-16 smDesk:gap-x-[30px] desk:grid-cols-jobsGridLg desk:mt-[104px]">
    <RouterLink :to="{path: `/job/${job.id}`}" v-for="job in store?.jobsList" :key="job?.id">
      <JobBox :job="job" />
    </RouterLink>
  </div>
  <button class="py-4 px-8 rounded-md bg-violet text-mainWhite mt-8 font-bold hover:bg-lightViolet active:bg-violet tab:mt-14">Load More</button>
</template>
