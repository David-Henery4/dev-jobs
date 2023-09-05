<script setup>
import {userJobsStore} from "../../../stores/jobs"
import {ref, watch} from "vue"
const titleValue = ref("")
const {filterByTitle} = userJobsStore()
watch(titleValue, (newValue) => {
  filterByTitle(newValue)
})
</script>

<template>
  <div
      class="w-full py-4 flex justify-center items-center gap-4 hover:cursor-pointer lgTab:pr-5 lgTab:justify-start"
    >
      <icon-comp
        class="fill-violet hidden lgTab:block"
        name="icon-search"
        path="desktop"
      ></icon-comp>
      <div class="relative w-full flex-1">
        <label
          class="absolute pointer-events-none top-0 left-0 text-base font-normal text-veryDarkBlue/50"
          for="filter-text-input"
        >
          Filter by title
        </label>
        <input
          class="w-full outline-none"
          id="filter-text-input"
          name="filter-text-input"
          type="text"
          v-model="titleValue"
        />
      </div>
    </div>
</template>
