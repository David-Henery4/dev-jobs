import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import jobsData from '../local-data/data.json'

export const userJobsStore = defineStore('jobs', () => {
  const activeJob = ref({})
  const jobsList = ref(jobsData)
  const filteredJobsList = ref([])
  const currentActiveJobsList = ref(jobsList.value)
  // const filteredJobsList = ref(jobsData)
  const isFullTimeFilterActive = ref(false)
  const filteredByTitleValue = ref("")
  const prevTitleValue = ref("")
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
    filteredByTitleValue.value = value.trim()
  }
  //
  const filterByLocation = (value) => {}
  //
  const handleFullTimeFilter = () => {
    if (isFullTimeFilterActive.value) {
      const newRay = jobsList.value.filter((job) => job.contract === 'Full Time')
      filteredJobsList.value = [...new Set([...filteredJobsList.value, ...newRay])]
    }
    if (!isFullTimeFilterActive.value){
      filteredJobsList.value = filteredJobsList.value.filter((job) => job.contract !== 'Full Time')
    }
  }
  //
  const handleTitleFilter = () => {
    if (filteredByTitleValue.value !== ''){
      const newRay = jobsList.value.filter(job => 
        job.position.toLowerCase().includes(filteredByTitleValue.value.toLowerCase()) && job
      )
      filteredJobsList.value = [...new Set([...filteredJobsList.value, ...newRay])]
      prevTitleValue.value = filteredByTitleValue.value
    }
    if (filteredByTitleValue.value === '' && prevTitleValue.value) {
      const newRay = [...new Set([...filteredJobsList.value])].filter(
        (job) => !job.position.toLowerCase().includes(prevTitleValue.value.toLowerCase()) && job
      )
      // filteredJobsList.value = [...new Set([...filteredJobsList.value, ...newRay])]
      filteredJobsList.value = newRay
      prevTitleValue.value = ""
    }
  }
  //
  const submitFilters = () => {
    if (isFilterMode.value) {
      handleFullTimeFilter()
      handleTitleFilter()
      currentActiveJobsList.value = filteredJobsList.value
    }
    if (!isFilterMode.value) {
      currentActiveJobsList.value = jobsData
    }
    // handleFullTimeFilter()
    // handleTitleFilter()
  }
  //
  return {
    jobsList,
    activeJob,
    setActiveJob,
    filterByFullTime,
    isFullTimeFilterActive,
    filterByTitle,
    filteredJobsList,
    isFilterMode,
    //
    filteredByLocationValue,
    filteredByTitleValue,
    // filterByLocation
    //
    submitFilters,
    prevTitleValue,
    //
    currentActiveJobsList
  }
})
