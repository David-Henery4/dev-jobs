<script setup>
defineProps({
  activeJob: {
    type: Object,
    required: true,
  }
})
// console.log(props.activeJob.activeJob.company)
</script>

<!-- Can make this component re-usable with the one in the "JobBox" -->

<template>
  <div class="w-full text-center grid grid-rows-compantDetailsRows tab:text-left">
    <div class="bg-mainWhite rounded-md w-full h-full col-start-1 col-end-2 row-start-2 row-end-4 tab:row-start-1 dark:bg-veryDarkBlue"></div>
    <div class="flex flex-col justify-center items-center gap-6 pb-8 row-start-1 row-end-4 z-10 col-start-1 col-end-2 tab:flex-row tab:p-0 tab:justify-start tab:gap-10 tab:pr-10">
      <div class="w-12 h-12 grid place-items-center rounded-2xl tab:w-[140px] tab:h-[140px] tab:rounded-l-md tab:rounded-r-none" :style="{backgroundColor: activeJob.activeJob.logoBackground}">
        <logo-comp class="" :path="activeJob.activeJob.logo" />
      </div>
      <div>
        <h2 class="text-veryDarkBlue font-bold text-xl dark:text-mainWhite">{{ activeJob.activeJob.company }}</h2>
        <a href="#" class="text-darkGrey lowercase">{{ `${activeJob.activeJob.company}.com` }}</a>
      </div>
      <div class="tab:ml-auto">
        <a href="#" class="text-violet font-bold px-5 py-4 bg-violet/10 rounded-md hover:bg-violet/30 dark:text-mainWhite dark:bg-mainWhite/10 hover:dark:bg-mainWhite/25">Company Site</a>
      </div>
    </div>
  </div>
</template>
