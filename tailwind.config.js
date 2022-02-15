module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#171313",
      citric: "#CDF567",
      white: "#FFFFFF",
      "muted-black": "#837E7E",
      sunflower: "#FFBC4B",
      blue: "#3E8EF1",
      pink: "#FFD0D5",
      "pale-blue": "#A4C9D8",
      "bookmark-border": "#7c8b9a40",
    },
    borderWidth: {
      default: "1px",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
