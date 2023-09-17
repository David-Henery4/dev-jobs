<script setup>
defineProps({
  activeJob: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <footer class="mt-16 col-start-1 col-end-13 bg-mainWhite py-6 grid grid-cols-mainGridMob tab:mt-11 smMob:grid-cols-mainGridTab smDesk:mt-20 smDesk:grid-cols-mainGridLap lgDesk:grid-cols-mainGridDesk dark:bg-veryDarkBlue">
    <div class="w-full col-start-2 col-end-12 justify-between items-center max-w-[730px] mx-auto tab:flex">
      <div class="hidden tab:flex flex-col justify-center items-start gap-2">
        <h3 class="font-bold text-xl text-veryDarkBlue dark:text-mainWhite">{{activeJob.activeJob.position}}</h3>
        <p class="text-darkGrey">{{ activeJob.activeJob.company }}</p>
      </div>
      <button class="w-full bg-violet py-4 rounded-md text-mainWhite font-bold hover:bg-lightViolet active:bg-violet tab:max-w-[141px]">
        Apply <span class="hidden tab:inline">Now</span>
      </button>
    </div>
  </footer>
</template>
