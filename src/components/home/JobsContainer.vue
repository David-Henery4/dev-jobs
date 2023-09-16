<script setup>
import {computed} from "vue"
import JobBox from './job/JobBox.vue'
import {RouterLink} from "vue-router"
import {userJobsStore} from "../../stores/jobs";
const store = userJobsStore()
const triggerShownJobs = store.handleShowMoreJobs
const allJobsShown = computed(() => store.isAllJobsShown)
</script>

<template>
  <div class="w-full mt-14 grid gap-y-12 gap-x-3 grid-cols-jobsGrid tab:mt-[69px] tab:gap-y-16 smDesk:gap-x-[30px] desk:grid-cols-jobsGridLg desk:mt-[104px]">
    <RouterLink :to="{path: `/job/${job.id}`}" v-for="job in store?.currentlyShownJobs" :key="job?.id">
      <JobBox :job="job" />
    </RouterLink>
  </div>
  <button @click="triggerShownJobs" class="py-4 px-8 rounded-md bg-violet text-mainWhite mt-8 font-bold hover:bg-lightViolet active:bg-violet tab:mt-14" :class="[allJobsShown ? 'hidden' : 'block']">Load More</button>
  <p class="mt-8 tab:mt-14" :class="[allJobsShown ? 'block' : 'hidden']">
    No more jobs available 😮
  </p>
</template>
