/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
   
  ],
  theme: {
    extend: {},
    fontFamily:{
      'sans':'Martel Sans'
    },
    colors: {
      primary: '#887C68',
    },
    boxShadow:{
      xs:'17px 12px 60px 0px rgba(0, 0, 0, 0.25)'
    }
  },
  plugins: [],
};

