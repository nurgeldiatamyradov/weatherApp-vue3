/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
            "./src/**/*.{vue,js,ts,jsx,tsx"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#5AC69F",
        "weather-secondary": "#7CD2B3",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: "true",
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
}
