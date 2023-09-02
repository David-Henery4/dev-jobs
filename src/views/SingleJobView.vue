<script setup>
// import {computed} from "vue"
import {useRoute} from "vue-router"
import { userJobsStore } from "../stores/jobs";
import CompanyDetails from "../components/single-job/CompanyDetails.vue"
import JobDetails from "../components/single-job/JobDetails.vue";
import JobFooter from "../components/single-job/JobFooter.vue";
const route = useRoute()
  const store = userJobsStore()
  store.setActiveJob(route.params.id)
  const activeJob = store.activeJob
  // console.log(activeJob.id)
  // const activeJob = computed(() => store.jobsList.find(job => +job.id === +route.params.id))
  // console.log(activeJob.value)
</script>

<template>
  <main class="w-full col-start-2 col-end-12 row-start-2 row-end-4 z-10 grid justify-items-center max-w-[730px] mx-auto gap-6 tab:gap-8">
    <CompanyDetails :activeJob="{activeJob}" />
    <JobDetails :activeJob="{activeJob}"/>
  </main>
  <JobFooter :activeJob="{activeJob}"/>
</template>


