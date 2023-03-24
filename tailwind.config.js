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
      backgroundImage: {
        
        about: "url('./assets/about1.png')",
      },
      dropShadow:{
        '3xl':'5px 5px 10px white',
        'blue':'2px 2px 4px blue',
      }
    },
  },
  plugins: [],
};
