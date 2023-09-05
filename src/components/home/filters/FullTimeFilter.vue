<script setup>
import {ref} from "vue"
import {userJobsStore} from "../../../stores/jobs";
const isFilterActive = ref(false)
defineProps({
  isModal: {
    type: Boolean,
    required: false,
    default: false
  }
})
//
const {filterByFullTime} = userJobsStore()
//
const toggleFilter = () => {
  isFilterActive.value = !isFilterActive.value
  filterByFullTime(isFilterActive.value)
}
//
</script>

<template>
  <div class="items-center gap-4" :class="[isModal ? 'flex' : 'hidden lgTab:flex justify-center']">
    <input class="w-4 h-4 lgDesk:w-6 lgDesk:h-6" type="checkbox" name="fullTime" :checked="isFilterActive" id="fullTime" @click="toggleFilter"/>
    <label for="fullTime" class="text-veryDarkBlue font-bold"
      >Full Time <span :class="[isModal || 'hidden XtraLgDesk:inline']"> Only </span></label
    >
  </div>
</template>
