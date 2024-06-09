/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    fontFamily: {
      primary: "Poppins"
    },
    extend: {
      animation: {
        'fadeIn': 'fadeIn 0.4s ease-in-out',

      },
      colors: {
        primary: "#222222",
        secondary: "#F5E6E0",
      },
      backgroundColor: {
        'orange-400': '#ffb84d',
        'blue-300': '#b3ecff',
        'teal-300': '#AAF0D1',
        'green-300': '#ccffd9',
      },
      iconColor: {
        'orange-400': '#ff5c33',
        'blue-400': '#4d79ff',
        'teal-500': '#339933',
        'green-500': '#4dff4d',
      },
    },
    container: {
      padding: {
        DEFAULT: "30px",
        lg: "0"
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px"
    },

  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('flowbite/plugin'),
  ],
}