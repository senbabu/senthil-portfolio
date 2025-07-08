/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  extend: {
    colors: {
      charcoal: {
        DEFAULT: '#264653',
        100: '#080e11',
        200: '#0f1c22',
        300: '#172b32',
        400: '#1f3943',
        500: '#264653',
        600: '#3f7489',
        700: '#609db6',
        800: '#95bece',
        900: '#cadee7',
      },
      persian_green: {
        DEFAULT: '#2a9d8f',
        100: '#081f1d',
        200: '#113f39',
        300: '#195e56',
        400: '#217e73',
        500: '#2a9d8f',
        600: '#3acbba',
        700: '#6cd8cb',
        800: '#9de5dc',
        900: '#cef2ee',
      }
    }
  }
},
  plugins: [],
}
