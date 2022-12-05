/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/solar.jpg')",
      },
      spacing: {
        '104': '26rem',
        'half-screen': '50vh',
        '18': '4.5rem'
      }

    }
  },
  plugins: [],
}
