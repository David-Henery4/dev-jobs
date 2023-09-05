import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import jobsData from '../local-data/data.json'

export const userJobsStore = defineStore('jobs', () => {
  const isDevToolsWorking  = ref(false) // will delete
  const activeJob = ref({})
  const jobsList = ref(jobsData)
  const filteredJobsList = ref([])
  // const filteredJobsList = ref(jobsData)
  const isFullTimeFilterActive = ref(false)
  const filteredByTitleValue = ref("")
  const filteredByLocationValue = ref("")
  //
  const isFilterMode = computed(() => {
    return isFullTimeFilterActive.value === true || filteredByLocationValue.value !== "" || filteredByTitleValue.value !== ""
  })
  //
  watch([isFullTimeFilterActive, filteredByLocationValue, filteredByLocationValue], isFilterMode)
  //
  const setActiveJob = (id) => {
    activeJob.value = jobsList.value.find((j) => j.id === +id)
  }
  //
  const filterByFullTime = (isChecked) => {
    isFullTimeFilterActive.value = isChecked
  }
  //
  const filterByTitle = (value) => {
    filteredByTitleValue.value = value
  }
  //
  const filterByLocation = (value) => {}
  //
  const handleFullTimeFilter = () => {
    if (isFullTimeFilterActive.value) {
      const newRay = jobsList.value.filter((job) => job.contract === 'Full Time')
      filteredJobsList.value = [...filteredJobsList.value, ...newRay]
    }
    if (!isFullTimeFilterActive.value){
      filteredJobsList.value = filteredJobsList.value.filter((job) => job.contract !== 'Full Time')
    }
  }
  //
  const submitFilters = () => {
    handleFullTimeFilter()
  }
  //
  return {
    jobsList,
    activeJob,
    setActiveJob,
    filterByFullTime,
    isFullTimeFilterActive,
    filterByTitle,
    isDevToolsWorking,
    filteredJobsList,
    isFilterMode,
    //
    filteredByLocationValue,
    filteredByTitleValue,
    // filterByLocation
    //
    submitFilters
  }
})
