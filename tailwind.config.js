/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Codystar',
      },
      colors: {
        darkest: '#343a40',
        dark: '#495057',
        medium: '#ced4da',
        light: '#f1f3f5',
        cyan: '#1098ad',
        orange: '#ffa94d',
      },
      screens: {
        sm: '370px',
        // => @media (min-width: 576px) { ... }

        md: '498px',
        // => @media (min-width: 960px) { ... }

        lg: '742px',
        // => @media (min-width: 1440px) { ... }

        xl: '1022px',
      },
    },
  },
  plugins: [],
};
