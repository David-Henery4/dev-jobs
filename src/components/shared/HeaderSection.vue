<script setup>
  import ThemeToggle from './ThemeToggle.vue';
  import {RouterLink} from "vue-router"
  // import headerImgMob from "../../assets/mobile/bg-pattern-header.svg"
  // import headerImgTablet from "../../assets/tablet/bg-pattern-header.svg"
  // import headerImgDesk from "../../assets/desktop/bg-pattern-header.svg"
  
</script>

<template>
  <header
    class="w-full col-start-1 col-end-13 relative grid grid-cols-mainGridMob row-start-1 row-end-3 items-start pt-8 smMob:grid-cols-mainGridTab lap:overflow-hidden lap:rounded-bl-[103px] smDesk:grid-cols-mainGridLap lgDesk:grid-cols-mainGridDesk"
  >
    <div class="w-full flex justify-between items-center z-10 relative col-start-2 col-end-12 max-w-[1110px] mx-auto">
      <RouterLink to="/">
        <h1 class="text-3xl font-bold text-mainWhite hover:cursor-pointer">devjobs</h1>
      </RouterLink>
      <ThemeToggle />
    </div>
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
      <picture>
        <source :srcset="'/src/assets/desktop/bg-pattern-header.svg'" media="(min-width: 62.81em)">
        <source :srcset="'/src/assets/tablet/bg-pattern-header.svg'" media="(min-width: 42.18em)">
        <img
          class="w-full h-full object-cover object-center"
          :src="'/src/assets/mobile/bg-pattern-header.svg'"
          alt="The headers blue background pattern"
          :srcset="'/src/assets/mobile/bg-pattern-header.svg'"
        />
      </picture>
    </div>
  </header>
</template>

