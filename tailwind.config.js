/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      mainWhite: '#ffffff',
      violet: '#5964E0',
      lightViolet: '#939BF4',
      veryDarkBlue: '#19202D',
      midNight: '#121721',
      lightGrey: '#F4F6F8',
      darkGrey: '#6E8098',
      gray: '#9DAEC2'
    },
    fontFamily: {
      kumbhSans: "'Kumbh Sans', sans-serif"
    },
    gridTemplateColumns: {
      mainGridMob: '24px repeat(10, 1fr) 24px',
    },
    gridTemplateRows: {
      mainRows: "96px 40px 1fr"
    },
    extend: {}
  },
  plugins: []
}

