module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myBlue: {
          norm: "#1186ff",
          wh: "#429af5"
        },
        "myOrange": "#ff6700",
        myGray: {
          light: "#ebebeb",
          dark: "#c0c0c0"
        },
        myBlack: {
          dark: "#131200"
        }
      },
      fontFamily: {
        'main': ["Poppins", "sans-serif"]
      }
    },
  },
  variants: {
    extend: {
      display: ['hover', 'focus']
    },
  },
  plugins: [],
}
