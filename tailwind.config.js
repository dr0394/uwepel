/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf8f5',
          100: '#f3ede3',
          200: '#e8ddc9',
          300: '#d9c5a5',
          400: '#caa77d',
          500: '#c49663',
          600: '#b68657',
          700: '#98704a',
          800: '#7b5c40',
          900: '#644c35',
        },
        dark: {
          50: '#f6f5f4',
          100: '#e7e5e2',
          200: '#d0cbc5',
          300: '#b3aba2',
          400: '#958b7f',
          500: '#7d7366',
          600: '#6a5f54',
          700: '#574d44',
          800: '#4a4139',
          900: '#3d3731',
          950: '#1a1410',
        },
      },
    },
  },
  plugins: [],
};
