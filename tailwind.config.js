/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F5F0E8',
        ink: '#252923',
        accent: '#A36F4F',
        brown: '#805234',
        olive: '#6f7960',
        clay: '#A36F4F',
        sand: '#F5F0E8',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
