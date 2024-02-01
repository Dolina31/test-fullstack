/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        themeColor: "#FFEFEF",
        navbarColor: "#FFDADA",
        transparentWhite: "#FEFCFC",
      },
      fontFamily: {
        italiana: ["Italiana", "sans-serif"],
        inria: ["Inria Serif", "serif"],
        flower: ["Indie Flower", "cursive"],
      },
    },
  },
  plugins: [],
};
