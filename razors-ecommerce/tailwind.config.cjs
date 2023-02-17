/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{svelte,ts,js}'],
  theme: {
    extend: {
      screens: {
        xs: '450px',
        ...defaultTheme.screens,
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#f47e60',
          light: '#ffcd9a',
          dark: '#e15b64',
        },
      },
      backgroundImage: {
        'hero-background': 'url("/images/hero.jpg")',
        'about-background': 'url("/images/about.png")',
      },
      backgroundSize: {
        'about-custom': '50% 100%',
      },
    },
  },
  plugins: [],
}
