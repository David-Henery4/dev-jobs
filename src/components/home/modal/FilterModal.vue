<script setup>
import LocationFilter from '../filters/LocationFilter.vue'
import FullTimeFilter from '../filters/FullTimeFilter.vue'
import SearchBtn from '../filters/SearchBtn.vue'
const emit = defineEmits(['close-modal'])
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full bg-black/50 z-10 grid place-content-center px-6" @click="$emit('close-modal', $event.target)">
    <div id="modal" class="rounded-md bg-mainWhite w-[87vw]">
      <div class="p-6 border-b border-darkGrey/20">
        <LocationFilter :isModal="true" />
      </div>
      <div class="p-6">
        <FullTimeFilter :isModal="true" />
        <SearchBtn :isModal="true" />
      </div>
    </div>
  </div>
</template>
