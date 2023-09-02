import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import jobsData from "../local-data/data.json";

export const userJobsStore = defineStore("jobs",() => {
  const jobsList = ref(jobsData)
  const activeJob = ref({})
  //
  const setActiveJob = (id) => {
    activeJob.value = jobsList.value.find((j) => j.id === +id)
  }
  //
  return {jobsList, activeJob, setActiveJob}
})