const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bkgrnd: "#070707",
        "pane-bkgrnd": "#151616",
      },
      fontFamily: {
        serif: ["Noto Serif", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        container: '1280px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
