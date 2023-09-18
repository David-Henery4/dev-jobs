import { ref, computed, watchEffect } from 'vue'
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
  const baseNumOfVisibleJobs = ref(12)
  const numOfVisibleJobs = ref(12)
  const currentlyShownJobs =  ref(currentActiveJobsList.value.slice(0, numOfVisibleJobs.value))
  const isAllJobsShown = ref(false)
  //
  const isFilterMode = computed(() => {
    return (
      isFullTimeFilterActive.value === true ||
      filteredByLocationValue.value !== '' ||
      filteredByTitleValue.value !== ''
    )
  })
  //
  watchEffect(isFilterMode)
  //
  const handleShowMoreJobs = () => {
    numOfVisibleJobs.value = baseNumOfVisibleJobs.value + 12
    currentlyShownJobs.value = currentActiveJobsList.value.slice(0, numOfVisibleJobs.value)
    if (numOfVisibleJobs.value >= currentlyShownJobs.value.length) {
      numOfVisibleJobs.value = currentActiveJobsList.value.length
      currentlyShownJobs.value = currentActiveJobsList.value.slice(0, numOfVisibleJobs.value)
      isAllJobsShown.value = true
    }
  }
  //
  const showInitialJobs = () => {
    if (currentActiveJobsList.value.length <= baseNumOfVisibleJobs.value){
      isAllJobsShown.value = true
      numOfVisibleJobs.value = currentActiveJobsList.value.length
      currentlyShownJobs.value = currentActiveJobsList.value.slice(0, numOfVisibleJobs.value)
    }
    if (currentActiveJobsList.value.length > baseNumOfVisibleJobs.value) {
      isAllJobsShown.value = false
      numOfVisibleJobs.value = baseNumOfVisibleJobs.value
      currentlyShownJobs.value = currentActiveJobsList.value.slice(0, numOfVisibleJobs.value)
    }
  }
  //
  const setActiveJob = (id) => {
    activeJob.value = jobsList.value.find((j) => j.id === +id)
  }
  //
  const filterByFullTime = () => {
    isFullTimeFilterActive.value = !isFullTimeFilterActive.value
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
      showInitialJobs()
    }
    if (!isFilterMode.value) {
      currentActiveJobsList.value = jobsData
      showInitialJobs()
    }
  }
  //
  return {
    jobsList,
    activeJob,
    setActiveJob,
    //
    filterByFullTime,
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
    currentActiveJobsList,
    //
    handleShowMoreJobs,
    numOfVisibleJobs,
    currentlyShownJobs,
    isAllJobsShown,
    baseNumOfVisibleJobs
  }
})
