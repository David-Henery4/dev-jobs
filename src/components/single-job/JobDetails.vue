<script setup>
import JobHeader from './job-details/JobHeader.vue'
import JobDescription from './job-details/JobDescription.vue'
import SkillsAndRequirements from './job-details/SkillsAndRequirements.vue'
const props = defineProps({
  activeJob: {
    type: Object,
    required: true
  }
})
const { postedAt, contract, position, location, description, requirements, role } =
  props.activeJob.activeJob
</script>

<template>
  <div class="py-10 px-6 w-full bg-mainWhite rounded-md grid gap-9 tab:gap-10 tab:px-12 dark:bg-veryDarkBlue">
    <JobHeader :headerInfo="{ postedAt, contract, position, location }" />
    <JobDescription :description="description" />
    <SkillsAndRequirements :content="requirements" />
    <SkillsAndRequirements class="smDesk:mt-2" :isSkill="true" :content="role" />
  </div>
</template>
