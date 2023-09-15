<script setup>
import LocationFilter from './filters/LocationFilter.vue'
import FullTimeFilter from './filters/FullTimeFilter.vue'
import SearchBtn from './filters/SearchBtn.vue'
import TextInput from './filters/TextInput.vue'
import FilterModal from './modal/FilterModal.vue'
import { ref, watch } from 'vue'
import {useMedia} from "../../composables/useMedia";
const isModalActive = ref(false)
//
const handleModalToggle = (ev) => {
  if (!ev?.closest('#modal')) {
    isModalActive.value = !isModalActive.value
    if (isModalActive.value) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'visible'
    }
  }
  if(ev.closest("#search-btn-modal")){
    isModalActive.value = false
    document.body.style.overflowY = 'visible'
  }
}
//
const isDesktop = useMedia('(min-width:47.5em)')
//
watch(isDesktop, () => {
  if (isDesktop.value){
    isModalActive.value = false
    document.body.style.overflowY = 'visible'
  }
})
//
</script>

<template>
  <div class="w-full px-4 bg-mainWhite rounded-md shadow-2xl flex justify-between items-center">
    <FilterModal v-show="isModalActive" @toggle-modal="handleModalToggle" />
    <TextInput />
    <LocationFilter />
    <div
      class="py-4 flex justify-center items-center gap-6 lgTab:gap-1 lgTab:w-full lgTab:justify-between lgTab:pl-5 lgTab:max-w-[329px]"
    >
      <icon-comp
        @click="handleModalToggle($event.target)"
        class="lgTab:hidden hover:cursor-pointer"
        name="icon-filter"
        path="mobile"
      ></icon-comp>
      <FullTimeFilter />
      <SearchBtn />
    </div>
  </div>
</template>
