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
      backgroundColor: ['group-hover'],
      strokeWidth: ['hover'],
      stroke: ['hover'],
      borderWidth: ['hover'],
      borderColor: ['hover']
    },
  },
  plugins: [],
}
