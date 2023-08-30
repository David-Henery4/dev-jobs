<script setup>

</script>

<template>
  <div
      class="py-4 flex justify-center items-center gap-4 hover:cursor-pointer lgTab:pr-5 lgTab:w-full lgTab:justify-start"
    >
      <icon-comp
        class="fill-violet hidden lgTab:block"
        name="icon-search"
        path="desktop"
      ></icon-comp>
      <div class="relative w-full">
        <label
          class="absolute pointer-events-none top-0 left-0 text-base font-normal text-veryDarkBlue/50"
          for="filter-text-input"
        >
          Filter by title
        </label>
        <input
          class="w-full outline-none hover:cursor-pointer"
          id="filter-text-input"
          name="filter-text-input"
          type="text"
        />
      </div>
    </div>
</template>
