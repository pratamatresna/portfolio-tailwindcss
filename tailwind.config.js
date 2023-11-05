/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode:"class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        pw1: "#1F3A5F",
        pw2: "#4d648d",
        pw3: "#acc2ef",
        pw4: "#3D5A80",
        pw5: "#cee8ff",
        pw6: "#0F1C2E",
        pw7: "#1f2b3e",
        pw8: "#374357",
        pw9: "#FFFFFF",
        pw10: "#e0e0e0",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
