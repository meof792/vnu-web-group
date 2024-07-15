const { green } = require("@mui/material/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green_dark: "#067C20",
        green_400: "#49bf67",
        green_200: "#02b337",
        yellow_300: "#F7EB7C",
        blue: "#2B4CA1",
        sidebar: "#d2d2d2",
        click_sidebar: "#f9f9f9",
      },
    },
  },
  plugins: [],
};
