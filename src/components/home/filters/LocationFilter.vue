<script setup>
  const props = defineProps({
    isModal: {
      type: Boolean,
      required: false,
      default: false,
    }
  })
  console.log(props.isModal)
</script>

<template>
  <div
    class="py-4 h-full border-x border-darkGrey/20 justify-start items-center gap-4 lgTab:w-full lgTab:max-w-[300px] lgTab:pl-6"
    :class="[isModal ? 'flex' : 'hidden lgTab:flex']"
  >
    <icon-comp name="icon-location" path="desktop" />
    <p>Filter by location...</p>
  </div>
</template>
