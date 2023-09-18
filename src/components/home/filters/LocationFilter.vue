<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { userJobsStore } from '../../../stores/jobs'
const { filteredByLocationValue } = storeToRefs(userJobsStore())
const isLabelActive = ref(false)
//
const handleLabelChange = () => {
  isLabelActive.value = filteredByLocationValue.value === '' ? false : true
}

defineProps({
  isModal: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <div
    class="border-darkGrey/20 justify-start items-center gap-4 lgTab:w-full lgTab:max-w-[300px] lgTab:px-6"
    :class="[isModal ? 'flex' : 'hidden lgTab:flex border-x py-4']"
  >
    <icon-comp class="" name="icon-location" path="desktop" />
    <div class="relative w-full h-full flex-1">
      <label for="location-input" class="text-veryDarkBlue/50 absolute top-0 left-0 pointer-events-none dark:text-mainWhite" :class="[isLabelActive? 'hidden' : 'block']"
        >Filter by location...</label
      >
      <input
        name="location-input"
        id="location-input"
        class="w-full h-full outline-none bg-[transparent] dark:text-mainWhite"
        type="text"
        :on-focus="handleLabelChange()"
        v-model="filteredByLocationValue"
      />
    </div>
  </div>
</template>
