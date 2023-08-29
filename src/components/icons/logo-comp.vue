<script setup>
  import { defineAsyncComponent } from 'vue';
  //
  const props = defineProps({
    path: {
      type: String,
      required: true,
    }
  })
  //
  const icon = defineAsyncComponent(() =>
    import(`/src/assets/logos/${props.path}`)
  );
</script>

<template>
  <component :is="icon" class="" />
</template>