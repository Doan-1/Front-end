/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00A4B4',
        'content': '#666666'
      },
      fontFamily:{
        'theme': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
