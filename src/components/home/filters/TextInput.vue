<script setup>
import {ref} from "vue"
import {userJobsStore} from "../../../stores/jobs"
import {storeToRefs} from "pinia"
const {filteredByTitleValue} = storeToRefs(userJobsStore())
const isLabelActive = ref(false)
//
const handleLabelChange = () => {
  isLabelActive.value = filteredByTitleValue.value === "" ?  false : true
}
//
</script>

<template>
  <div
      class="w-full py-4 flex justify-center items-center gap-4 lgTab:pr-5 lgTab:justify-start"
    >
      <icon-comp
        class="fill-violet hidden lgTab:block"
        name="icon-search"
        path="desktop"
      ></icon-comp>
      <div class="relative w-full flex-1">
        <label
          class="absolute pointer-events-none top-0 left-0 text-base font-normal text-veryDarkBlue/50 dark:text-mainWhite"
          :class="[isLabelActive? 'hidden' : 'block']"
          for="title-input"
          :on-focus="handleLabelChange()"
        >
          Filter by title
        </label>
        <input
          class="w-full outline-none bg-[transparent] dark:text-mainWhite"
          id="title-input"
          name="title-input"
          type="text"
          v-model="filteredByTitleValue"
        />
      </div>
    </div>
</template>
