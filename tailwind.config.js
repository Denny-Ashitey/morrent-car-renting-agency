/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'car-pattern': "url(/src/assets/BG.png)",
        'dark-car-pattern': "url(/src/assets/dark-car.png)"
      }
    },
  },
  plugins: [],
}

