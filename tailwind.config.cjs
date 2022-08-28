/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      blue: colors.blue,
      green: colors.green,

      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      dark: '#191919',
      bgCard: '#1b1b1b'
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' }
        },
        tag: {
          '0%': { backgroundColor: '#fafafa' },
          '40%': { backgroundColor: '#fafafa' },

          '80%': { backgroundColor: '#fde68a' },
          '100%': { backgroundColor: '#fafafa' }
        }
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'tags-hand': 'tag 10s linear infinite'
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: 'repeat(1, minmax(0, 1fr))'
      }
    }
  },
  plugins: []
};
