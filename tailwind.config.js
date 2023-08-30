/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT( {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'sky': '#215273',
    },
    borderRadius: {
      'lg': '10px',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

    },
    extend: {},
  },
  plugins: [require("daisyui")],
});

