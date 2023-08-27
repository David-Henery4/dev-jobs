<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ThemeToggle from "./components/shared/ThemeToggle.vue";
</script>

<template>
  <div class="w-full grid grid-cols-mainGridMob font-kumbhSans grid-rows-mainRows">
    <header class="w-full col-start-1 col-end-13 relative grid grid-cols-mainGridMob row-start-1 row-end-3 items-start pt-8">
      <div class="w-full flex justify-between items-center z-10 relative col-start-2 col-end-12">
        <h1 class="text-3xl text-mainWhite">devjobs</h1>
        <ThemeToggle/>
      </div>
      <div class="absolute top-0 left-0 w-full h-full">
        <icon-comp class="w-full h-full" name="bg-pattern-header" path="mobile"></icon-comp>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style></style>
