<script setup>
  import ThemeToggle from './ThemeToggle.vue';
  import {RouterLink} from "vue-router"
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
        <!-- Needed ?url because of the svg loader converting the svgs into components -->
        <source srcset="../../assets/desktop/bg-pattern-header.svg?url" media="(min-width: 62.81em)">
        <source srcset="../../assets/tablet/bg-pattern-header.svg?url" media="(min-width: 42.18em)">
        <img
          class="w-full h-full object-cover object-center"
          src="../../assets/mobile/bg-pattern-header.svg?url"
          alt="The headers blue background pattern"
          srcset="../../assets/mobile/bg-pattern-header.svg?url"
        />
      </picture>
    </div>
  </header>
</template>

