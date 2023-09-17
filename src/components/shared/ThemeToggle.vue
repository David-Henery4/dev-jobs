<script setup>
import useThemeChange from "../../composables/useThemeChange";
const {toggleTheme} = useThemeChange()
</script>

<template>
  <div class="flex justify-center items-center gap-4">
    <icon-comp name="icon-sun" path="desktop"/>
    <div class="w-12 h-6 rounded-xl group bg-mainWhite relative hover:cursor-pointer" @click="toggleTheme()" >
      <div class="w-[14px] h-[14px] transition-all rounded-full bg-violet absolute top-1/2 left-0 -translate-y-1/2 translate-x-[5px] group-hover:bg-lightViolet dark:translate-x-[29px]"></div>
    </div>
    <icon-comp name="icon-moon" path="desktop"/>
  </div>
</template>

