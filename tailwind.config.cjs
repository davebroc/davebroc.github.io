/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/solar.jpg')",
      },
      spacing: {
        '104': '26rem',
      }
    }
  },
  plugins: [],
}
