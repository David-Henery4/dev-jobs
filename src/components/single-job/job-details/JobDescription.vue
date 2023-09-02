<script setup>
  import BodyText from '../../shared/BodyText.vue';
  defineProps({
    description: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <div class="w-full">
    <BodyText>
      {{ description }}
    </BodyText>
  </div>
</template>
