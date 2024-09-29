/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{html,ts}",
     './node_modules/preline/preline.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'signika': ['Signika Negative', 'sans-serif'],
        'gurajada': ['Gurajada', 'sans-serif']
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

