<script setup>
import {computed} from "vue"
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
const store = userJobsStore()
const isFilterActive = computed(() => store.isFullTimeFilterActive)
//
</script>


<template>
  <div class="items-center gap-4" :class="[isModal ? 'flex' : 'hidden lgTab:flex justify-center']">
    <div class="w-4 h-4 rounded-sm relative lgDesk:w-6 lgDesk:h-6" :class="[isFilterActive ? 'bg-violet' : 'bg-veryDarkBlue/10 dark:bg-mainWhite/10']">
      <icon-comp class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" name="icon-check"
        path="desktop" v-show="isFilterActive"/>
      <input class="absolute w-full h-full opacity-0 hover:cursor-pointer" type="checkbox" :name="[isModal ? 'fullTime-2' : 'fullTime-1']" :checked="isFullTimeFilterActive" :id="[isModal ? 'fullTime-2' : 'fullTime-1']" @click="filterByFullTime"/>
    </div>
    <label :for="[isModal ? 'fullTime-2' : 'fullTime-1']" class="text-veryDarkBlue font-bold dark:text-mainWhite"
      >Full Time <span :class="[isModal || 'hidden XtraLgDesk:inline']"> Only </span></label
    >
  </div>
</template>
