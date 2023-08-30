<script setup>
  import LocationFilter from '../filters/LocationFilter.vue';
  import FullTimeFilter from '../filters/FullTimeFilter.vue';
  import SearchBtn from '../filters/SearchBtn.vue';
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full bg-black/50 z-10 grid place-content-center px-6">
    <div class="p-6 rounded-md bg-mainWhite w-[87vw]">
      <div>
        <LocationFilter :isModal="true"/>
      </div>
      <div>
        <FullTimeFilter/>
        <SearchBtn/>
      </div>
    </div>
  </div>
</template>

