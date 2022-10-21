/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#06283D',
        green: '#256D85',
        blue: '#47B5FF',
        grey: '#DFF6FF',
      },
      height: {
        500: '500px',
      },
    },
  },
  plugins: [],
}
