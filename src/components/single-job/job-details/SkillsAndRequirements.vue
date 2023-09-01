<script setup>
import BodyText from '../../shared/BodyText.vue'
defineProps({
  isSkill: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<template>
  <div>
    <h3 class="text-veryDarkBlue font-bold mb-6 tab:mb-7">Requirements</h3>
    <BodyText>
      Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet,
      lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh
      felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
      pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac,
      leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl
    </BodyText>
    <ul class="text-base leading-[26px] text-darkGrey mt-8 list-inside grid gap-2 tab:mt-6" :class="[isSkill ? 'list-decimal' : 'list-disc']">
      <li>Morbi interdum mollis sapien. Sed</li>
      <li>Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus</li>
      <li>
        Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac
        urna. Etiam pellentesque mauris ut lectus.
      </li>
      <li>Morbi interdum mollis sapien. Sed</li>
    </ul>
  </div>
</template>
