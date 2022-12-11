/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideLeft: "slideLeft 0.3s ease-in-out",
        slideRight: "slideRight 0.3s ease-in-out",
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(80vh)" },
          "100%": { transform: "translateX(0px)" },
        },
        slideRight: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(80vh)" },
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
