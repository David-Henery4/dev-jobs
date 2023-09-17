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
    <ul
      class="text-base leading-[26px] text-darkGrey mt-8 list-inside grid gap-2 tab:mt-6"
    >
      <li class="flex justify-start items-baseline gap-7" v-for="(item, i) in content.items" :key="i">
        <div v-show="!isSkill" class="w-1 h-1 rounded-full relative bottom-[2.5px] bg-violet"></div>
        <div v-show="isSkill" class="text-violet">{{ i + 1 }}</div>
        <p class="flex-1">{{ item }}</p>
      </li>
    </ul>
  </div>
</template>

<!-- :class="[isSkill ? 'list-decimal' : 'list-disc']" -->