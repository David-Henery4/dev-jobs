<script setup>

</script>

<template>
  <div class="w-full p-4 bg-mainWhite rounded-md shadow-2xl flex justify-between items-center">
      <div class="relative hover:cursor-pointer">
        <label class="absolute pointer-events-none top-0 left-0 text-base font-normal text-veryDarkBlue/50" for="filter-text-input">
          Filter by title
        </label>
        <input class="w-full outline-none hover:cursor-pointer" id="filter-text-input" name="filter-text-input" type="text">
      </div>
      <div class="flex justify-center items-center gap-6">
        <icon-comp name="icon-filter" path="mobile"></icon-comp>
        <button class="grid place-items-center h-12 w-12 bg-violet rounded-md">
          <icon-comp class="fill-mainWhite" name="icon-search" path="desktop"></icon-comp>
        </button>
      </div>
    </div>
</template>
