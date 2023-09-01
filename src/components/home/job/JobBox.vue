<script setup>
const props = defineProps({
  job: {
    type: Object,
    required: true
  }
})
</script>


<template>
  <div class="w-full bg-mainWhite p-8 pt-12 rounded-md relative">
    <div class="w-12 h-12 rounded-2xl grid place-items-center absolute -top-6 left-8" :style="{backgroundColor: job.logoBackground}">
      <logo-comp :path="job.logo"></logo-comp>
    </div>

    <!-- MAKE THIS A RE-USEABLE COMPONENT FOR THE "JobHeader.vue" job title on the single job page (Including location)  -->
    <div class="grid gap-3">
      <div class="text-darkGrey flex justify-start items-center gap-3">
        <p>{{ job.postedAt }}</p>
        <div class="rounded-full w-1 h-1 bg-darkGrey"></div>
        <p>{{ job.contract }}</p>
      </div>
      <h2 class="text-xl font-bold">{{ job.position }}</h2>
      <p class="text-darkGrey">{{ job.company }}</p>
    </div>

    <p class="text-sm text-violet font-bold mt-10">{{ job.location }}</p>
  </div>
</template>
