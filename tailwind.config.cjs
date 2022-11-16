/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./public//solar.jpg')",
      },
    }
  },
  plugins: [],
}
