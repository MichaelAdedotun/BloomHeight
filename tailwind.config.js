/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': 'url("/src/assets/bg-0002-free-img.jpg")',
      },
      colors:{
        'dark-gray': '#191F2D',
        'client-bg': '#253D49'
      },
    },
    plugins: [],
  }
}

