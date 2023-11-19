/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'offwhite': '#FFFFE3',
      },
      animation: {
        slideIn: 'slideIn .2s ease-out',
        slideOut: 'slideOut .1s ease-out',
        descriptionSlideIn: 'descriptionSlideIn .35s ease-out',
        fadeIn: 'fadeIn 2s ease-in-out',
        blobSpin: 'blobSpin 200s infinite',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'scale(0,1)' },
          '100%': { transform: 'scale(1,1)' },
        },
        slideOut: {
          '0%': { transform: 'scale(1,1)' },
          '100%': { transform: 'scale(0,1)' },
        },
        descriptionSlideIn: {
          '0%': { opacity: '0', transform: 'translate(0,32px)'},
          '100%': { opacity: '100' },
        },
        fadeIn: {
          '0%': { opacity: '0'},
          '100%': { opacity: '100' },
        },
        blobSpin: {
          '0%': { transform: 'rotate(0deg)'},
          '100%': { transform: 'rotate(360deg)'},
        }
      }
    },
  },
  plugins: [],
}

