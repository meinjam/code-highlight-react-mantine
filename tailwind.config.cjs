/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '4rem',
        '2xl': '4rem',
      },
    },
    extend: {
      colors: {
        primary: '#31b5c4',
      },
    },
  },
  plugins: [],
};
