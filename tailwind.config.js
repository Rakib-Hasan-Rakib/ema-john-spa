/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#8af229",

          "secondary": "#55fca3",

          "accent": "#d7e273",

          "neutral": "#2C1E33",

          "base-100": "#FFFFFF",

          "info": "#7BBDD5",

          "success": "#145C3A",

          "warning": "#FCB769",

          "error": "#F96353",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

