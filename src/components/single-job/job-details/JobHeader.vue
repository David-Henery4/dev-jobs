<script setup>
defineProps({
  headerInfo: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div
    class="w-full flex flex-col justify-center items-start gap-12 tab:flex-row tab:items-center tab:justify-between"
  >
    <div class="grid gap-3">
      <div class="text-darkGrey flex justify-start items-center gap-3">
        <p>{{ headerInfo.postedAt }}</p>
        <div class="rounded-full w-1 h-1 bg-darkGrey"></div>
        <p>{{ headerInfo.contract }}</p>
      </div>
      <h2 class="text-xl font-bold dark:text-mainWhite">{{ headerInfo.position }}</h2>
      <p class="text-violet">{{ headerInfo.location }}</p>
    </div>
    <a
      href="#"
      class="w-full p-4 text-center rounded-md font-bold bg-violet text-mainWhite tab:max-w-[141px]"
    >
      Apply Now
    </a>
  </div>
</template>
