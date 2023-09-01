<script setup>
import JobHeader from './job-details/JobHeader.vue';
import JobDescription from "./job-details/JobDescription.vue"
import SkillsAndRequirements from './job-details/SkillsAndRequirements.vue';
</script>

<template>
  <div class="py-10 px-6 w-full bg-mainWhite rounded-md grid gap-9 tab:gap-10 tab:px-12">
    <JobHeader/>
    <JobDescription/>
    <SkillsAndRequirements/>
    <SkillsAndRequirements class="smDesk:mt-2" :isSkill="true"/>
  </div>
</template>
