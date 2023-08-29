<script setup>
  import ThemeToggle from './ThemeToggle.vue';
</script>

<template>
  <header
    class="w-full col-start-1 col-end-13 relative grid grid-cols-mainGridMob row-start-1 row-end-3 items-start pt-8 smMob:grid-cols-mainGridTab lap:grid-cols-mainGridLap desk:grid-cols-mainGridDesk"
  >
    <div class="w-full flex justify-between items-center z-10 relative col-start-2 col-end-12 max-w-[1110px] mx-auto">
      <h1 class="text-3xl font-bold text-mainWhite">devjobs</h1>
      <ThemeToggle />
    </div>
    <div class="absolute top-0 left-0 w-full h-full">
      <picture>
        <img
          class="w-full h-full object-cover object-center"
          src="/src/assets/mobile/bg-pattern-header.svg"
          alt="The headers blue background pattern"
          srcset="/src/assets/mobile/bg-pattern-header.svg"
        />
      </picture>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
