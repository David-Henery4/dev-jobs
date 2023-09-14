<script setup>
import { ref, watch } from 'vue'
import {userJobsStore} from "../../../stores/jobs";
const {filterByLocation} = userJobsStore()
const locationValue = ref('')
watch(locationValue, (newValue) => {
  filterByLocation(newValue)
})
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
      <label class="text-veryDarkBlue/50 absolute top-0 left-0 pointer-events-none"
        >Filter by location...</label
      >
      <input class="w-full h-full outline-none" type="text" v-model="locationValue"/>
    </div>
  </div>
</template>
