/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        enem:{
          "d8d8de": '#d8d8de',
          "118ab2": "#118ab2"
        }
      }
    },
  },
  plugins: [],
}