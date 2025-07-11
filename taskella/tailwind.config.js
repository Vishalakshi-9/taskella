/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // blush: '#FADADD',
        // cream: '#FFF5E1',
        rosegold: '#B76E79',
        petal: '#FFE4EC',
        sprout: '#A4CBB4',
        blush: '#FFE5EC',
        coral: '#FFBABA',
        cream: '#FFF2E2',
        dusty: '#EAC7C7',
        plum: '#B5838D',
        dark: '#111',

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        comfortaa: ['Comfortaa', 'cursive'],
        caveat: ['Caveat', 'cursive'],
      },
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    },
  },
  plugins: [],
}

