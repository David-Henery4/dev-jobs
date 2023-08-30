<script setup>

</script>

<template>
  <div class="w-full px-4 bg-mainWhite rounded-md shadow-2xl flex justify-between items-center">
      <div class="py-4 flex justify-center items-center gap-4 hover:cursor-pointer lgTab:pr-5 lgTab:w-full lgTab:justify-start">
        <icon-comp class="fill-violet hidden lgTab:block" name="icon-search" path="desktop"></icon-comp>
        <div class="relative w-full">
          <label class="absolute pointer-events-none top-0 left-0 text-base font-normal text-veryDarkBlue/50" for="filter-text-input">
            Filter by title
          </label>
          <input class="w-full outline-none hover:cursor-pointer" id="filter-text-input" name="filter-text-input" type="text">
        </div>
        </div>
      <div class="py-4 h-full border-x border-darkGrey/20 hidden lgTab:flex justify-start items-center gap-4 lgTab:w-full lgTab:max-w-[300px] lgTab:pl-6">
        <icon-comp name="icon-location" path="desktop"/>
        <p>Filter by location...</p>
      </div>
      <div class="py-4 flex justify-center items-center gap-6 lgTab:w-full lgTab:gap-0 lgTab:justify-between lgTab:pl-5 lgTab:max-w-[329px]">
        <icon-comp class="lgTab:hidden" name="icon-filter" path="mobile"></icon-comp>
        <div class="hidden lgTab:flex justify-center items-center gap-4">
          <input class="w-6 h-6" type="checkbox" name="fullTime" id="fullTime">
          <label for="fullTime" class="text-veryDarkBlue font-bold">Full Time <span class="hidden XtraLgDesk:inline">
            Only
          </span></label>
        </div>
        <button class="grid place-items-center py-4 px-[14px] bg-violet rounded-md lgDesk:px-9">
          <icon-comp class="fill-mainWhite lgTab:hidden" name="icon-search" path="desktop"></icon-comp>
          <span class="hidden text-mainWhite lgTab:block">Search</span>
        </button>
      </div>
    </div>
</template>
