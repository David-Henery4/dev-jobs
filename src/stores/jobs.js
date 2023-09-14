import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import jobsData from '../local-data/data.json'

export const userJobsStore = defineStore('jobs', () => {
  const activeJob = ref({})
  const jobsList = ref(jobsData)
  const filteredJobsList = ref([])
  const currentActiveJobsList = ref(jobsList.value)
  const isFullTimeFilterActive = ref(false)
  const filteredByTitleValue = ref('')
  const filteredByLocationValue = ref('')
  //
  const isFilterMode = computed(() => {
    return (
      isFullTimeFilterActive.value === true ||
      filteredByLocationValue.value !== '' ||
      filteredByTitleValue.value !== ''
    )
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
  const filterByLocation = (value) => {
    filteredByLocationValue.value = value.trim()
  }
  //
  const handleLocationFilter = () => {
    if (
      filteredByLocationValue.value !== '' &&
      filteredByTitleValue.value === '' &&
      !isFullTimeFilterActive.value
    ) {
      filteredJobsList.value = jobsList.value.filter(
        (job) =>
          job.location.toLowerCase().includes(filteredByLocationValue.value.toLowerCase()) && job
      )
    }
  }
  //
  const handleFullTimeFilter = () => {
    if (
      isFullTimeFilterActive.value &&
      filteredByTitleValue.value === '' &&
      filteredByLocationValue.value === ''
    ) {
      filteredJobsList.value = jobsList.value.filter((job) => job.contract === 'Full Time')
    }
  }
  //
  const handleTitleFilter = () => {
    if (
      filteredByTitleValue.value !== '' &&
      !isFullTimeFilterActive.value &&
      filteredByLocationValue.value === ''
    ) {
      filteredJobsList.value = jobsList.value.filter(
        (job) =>
          job.position.toLowerCase().includes(filteredByTitleValue.value.toLowerCase()) && job
      )
    }
  }
  //
  const handleTwoFilters = () => {
    // Title & fulltime
    if (
      filteredByTitleValue.value !== '' &&
      isFullTimeFilterActive.value &&
      filteredByLocationValue.value === ''
    ) {
      filteredJobsList.value = jobsList.value.filter(
        (job) =>
          job.position.toLowerCase().includes(filteredByTitleValue.value.toLowerCase()) &&
          job.contract === 'Full Time' &&
          job
      )
    }
    // Location & Fulltime
    if (
      filteredByTitleValue.value === '' &&
      isFullTimeFilterActive.value &&
      filteredByLocationValue.value !== ''
    ) {
      filteredJobsList.value = jobsList.value.filter(
        (job) =>
          job.location.toLowerCase().includes(filteredByLocationValue.value.toLowerCase()) &&
          job.contract === 'Full Time' &&
          job
      )
    }
    // Title & Location
    if (
      filteredByTitleValue.value !== '' &&
      !isFullTimeFilterActive.value &&
      filteredByLocationValue.value !== ''
    ) {
      filteredJobsList.value = jobsList.value.filter(
        (job) =>
          job.location.toLowerCase().includes(filteredByLocationValue.value.toLowerCase()) &&
          job.position.toLowerCase().includes(filteredByTitleValue.value.toLowerCase()) &&
          job
      )
    }
  }
  //
  const handleAllFilters = () => {
    if (
      filteredByTitleValue.value !== '' &&
      isFullTimeFilterActive.value &&
      filteredByLocationValue.value !== ''
    ) {
      filteredJobsList.value = jobsList.value.filter(
        (job) =>
          job.position.toLowerCase().includes(filteredByTitleValue.value.toLowerCase()) &&
          job.location.toLowerCase().includes(filteredByLocationValue.value.toLowerCase()) &&
          job.contract === 'Full Time' &&
          job
      )
    }
  }
  //
  const submitFilters = () => {
    if (isFilterMode.value) {
      handleLocationFilter()
      handleFullTimeFilter()
      handleTitleFilter()
      //
      handleTwoFilters()
      handleAllFilters()
      currentActiveJobsList.value = filteredJobsList.value
    }
    if (!isFilterMode.value) {
      currentActiveJobsList.value = jobsData
    }
  }
  //
  return {
    jobsList,
    activeJob,
    setActiveJob,
    //
    filterByFullTime,
    filterByTitle,
    filterByLocation,
    //
    filteredJobsList,
    isFilterMode,
    //
    isFullTimeFilterActive,
    filteredByLocationValue,
    filteredByTitleValue,
    //
    submitFilters,
    //
    currentActiveJobsList
  }
})
