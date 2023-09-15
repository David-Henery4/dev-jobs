<script setup>
import {userJobsStore} from "../../../stores/jobs";
defineProps({
  isModal: {
    type: Boolean,
    required: false,
    default: false
  }
})
//
const {filterByFullTime, isFullTimeFilterActive} = userJobsStore()
//
</script>

<template>
  <div class="items-center gap-4" :class="[isModal ? 'flex' : 'hidden lgTab:flex justify-center']">
    <input class="w-4 h-4 lgDesk:w-6 lgDesk:h-6" type="checkbox" name="fullTime" :checked="isFullTimeFilterActive" id="fullTime" @click="filterByFullTime"/>
    <label for="fullTime" class="text-veryDarkBlue font-bold"
      >Full Time <span :class="[isModal || 'hidden XtraLgDesk:inline']"> Only </span></label
    >
  </div>
</template>
