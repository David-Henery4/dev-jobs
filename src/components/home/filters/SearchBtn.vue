<script setup>
import {userJobsStore} from "../../../stores/jobs"
const {submitFilters} = userJobsStore()
defineProps({
  isModal: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <button class="grid place-items-center py-4 px-[14px] bg-violet rounded-md lgDesk:px-9" :class="[isModal && 'w-full mt-6']" @click="submitFilters">
    <icon-comp class="fill-mainWhite" :class="[isModal ? 'hidden' : 'lgTab:hidden']" name="icon-search" path="desktop"></icon-comp>
    <span class="text-mainWhite" :class="[isModal ? '' : 'hidden lgTab:block']">Search</span>
  </button>
</template>
