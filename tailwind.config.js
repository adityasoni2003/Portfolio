module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
      baloo:'"baloo 2"',
      
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#97DEFF',
      },
      dropShadow:{
        '3xl':'10px 10px 10px #8e24aa ',
        '3xl-blue':'10px 10px 10px #60A5FA ',
        'blue':'2px 2px 4px blue',

        
      },
      boxShadow:{
        'inner-shadow':'inset 2px 2px 5px #8e24aa , inset -2px -2px 5px #8e24aa',
        'outer-project':'4px 4px 12px #60A5FA ,-4px -4px 12px #60A5FA '
      }
    },
  },
  plugins: [],
};
