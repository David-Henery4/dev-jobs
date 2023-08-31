<script setup>
  defineProps({
    isModal: {
      type: Boolean,
      required: false,
      default: false,
    }
  })
</script>

<template>
  <div
    class="h-full border-darkGrey/20 justify-start items-center gap-4 lgTab:w-full lgTab:max-w-[300px] lgTab:pl-6"
    :class="[isModal ? 'flex' : 'hidden lgTab:flex border-x py-4']"
  >
    <icon-comp name="icon-location" path="desktop" />
    <p class="text-veryDarkBlue/50">Filter by location...</p>
  </div>
</template>
