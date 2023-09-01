<script setup>
import {useRoute} from "vue-router"
import CompanyDetails from "../components/single-job/CompanyDetails.vue"
import JobDetails from "../components/single-job/JobDetails.vue";
import JobFooter from "../components/single-job/JobFooter.vue";
const route = useRoute()
  console.log(route.params)
</script>

<template>
  <main class="w-full col-start-2 col-end-12 row-start-2 row-end-4 z-10 grid justify-items-center max-w-[730px] mx-auto gap-6 tab:gap-8">
    <CompanyDetails/>
    <JobDetails/>
  </main>
  <JobFooter/>
</template>


