/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["EB Garamond", "serif"],
        secondary: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
