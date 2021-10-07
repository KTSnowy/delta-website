module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-black": "#202020",
        "lighter-black": "#252525"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
