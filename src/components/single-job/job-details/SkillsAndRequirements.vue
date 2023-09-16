<script setup>
import BodyText from '../../shared/BodyText.vue'
defineProps({
  isSkill: {
    type: Boolean,
    required: false,
    default: false
  },
  content: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div>
    <h3 class="text-veryDarkBlue font-bold mb-6 tab:mb-7 dark:text-mainWhite">Requirements</h3>
    <BodyText>
      {{ content.content }}
    </BodyText>
    <ul class="text-base leading-[26px] text-darkGrey mt-8 list-inside grid gap-2 tab:mt-6" :class="[isSkill ? 'list-decimal' : 'list-disc']">
      <li v-for="(item,i) in content.items" :key="i">{{ item }}</li>
    </ul>
  </div>
</template>
