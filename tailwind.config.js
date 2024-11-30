/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      colors: {
        pastelPink: "#FFC0CB",
        pastelBlue: "#B3E5FC",
        pastelPurple: "#E1BEE7",
      },
      fontFamily: {
        girly: ["Quicksand", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

