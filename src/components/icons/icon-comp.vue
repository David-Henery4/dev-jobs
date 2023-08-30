<script setup>
  import { defineAsyncComponent } from 'vue';
  //
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  });
  //
  const icon = defineAsyncComponent(() =>
    import(`../../../src/assets/${props.path}/${props.name}.svg`)
  );
</script>

<template>
  <component :is="icon" class="" />
</template>