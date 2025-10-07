/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mizzouGold: "#F1B82D",
        mizzouBlack: "#000000",
        mizzouWhite: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
