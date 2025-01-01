/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        robot: "var(--font-robot)",
      },
      colors: {
        "primary-yellow": "#FEBF00",
      },
    },
  },
  plugins: [],
};
