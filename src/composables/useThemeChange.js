// - USE WHEN LISTENING TO CHNAGES IN REAL-TIME

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
//   if (matches) {
//     console.log('change to dark mode!')
//   } else {
//     console.log('change to light mode!')
//   }
// })

// Reminder save preference to local storage

const useThemeChange = () => {
  const htmlEle = document.documentElement
  //
  const checkSystemPreference = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      htmlEle.classList.remove('light')
      htmlEle.classList.add('dark')
    } else {
      htmlEle.classList.remove('dark')
      htmlEle.classList.add('light')
    }
  }
  //
  const setInitialTheme = () => {
    
  }
  //
  return {
    setInitialTheme,
    checkSystemPreference
  }
}

export default useThemeChange
