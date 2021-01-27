module.exports = {
  purge: [
    "index.html"
  ],
  darkMode: false,
  theme: {
    fontFamily: { 
      sans: ["Inter"],
      mono: ["Roboto Mono"],
    },
    extend: {},
  },
  variants: {
    extend: {
      strokeWidth: ['hover'],
      stroke: ['hover']
    },
  },
  plugins: [],
}
