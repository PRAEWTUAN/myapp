/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ['./templates/**/*.html'],
  theme: {
    extend: {
      fontFamily:{
        angsana: ["angsana"],
        Sriracha: ["Sriracha"],
        KoHo: ["KoHo"]
      }
    },
  },
  plugins: [],
}

