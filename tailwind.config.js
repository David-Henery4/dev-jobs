/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      smMob: '29.68em', // 475px
      tab: '42.18em', // 675px
      lgTab: '47.5em', // 760px
      lap: '52.81em', // 845px was - 940px
      smDesk: '60.31em', // 965px
      desk: '62.81em', // 1005px was-1060px
      lgDesk: '75em', // 1200px
      XtraLgDesk: '81.25em' // 1300px
    },
    colors: {
      mainWhite: '#ffffff',
      black: '#000000',
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
      mainGridTab: '40px repeat(10, 1fr) 40px',
      mainGridLap: '100px repeat(10, 1fr) 100px',
      mainGridDesk: '165px repeat(10, 1fr) 165px',
      jobsGrid: 'repeat(auto-fill, minmax(250px, 1fr))',
      jobsGridLg: 'repeat(auto-fill, minmax(260px, 1fr))'
    },
    gridTemplateRows: {
      mainRows: '96px 40px 1fr',
      mainRowsLg: '120px 40px 1fr',
      compantDetailsRows: '25px 25px 1fr'
    },
    extend: {}
  },
  plugins: []
}

