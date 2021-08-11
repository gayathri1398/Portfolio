module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {     
       colors:{
          port:{
              50: '#e9f9e9',
              100: '#c9e8c9',
              200: '#a8d7a9',
              300: '#86c687',
              400: '#64b666',
              500: '#4b9d4c',
              600: '#3a7a3b',
              700: '#285729',
              800: '#2c5f2d',
              900: '#97bc62ff',
            }
                    
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
