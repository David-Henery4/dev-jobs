<script setup>
import FilterSearchBar from '../components/home/FilterSearchBar.vue';
import JobsContainer from "../components/home/JobsContainer.vue";
</script>

<template>
  <main class="w-full pb-16 col-start-2 col-end-12 row-start-2 row-end-4 z-10 grid justify-items-center max-w-[1110px] mx-auto desk:pb-[104px]">
    <FilterSearchBar/>
    <JobsContainer/>
  </main>
</template>
