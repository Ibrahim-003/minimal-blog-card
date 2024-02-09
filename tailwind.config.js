/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heliotrope: {
          50: "#fdf5fe",
          100: "#f8e9fe",
          200: "#f2d3fb",
          300: "#ebb0f7",
          400: "#dc75f0",
          500: "#cd50e5",
          600: "#b330c9",
          700: "#9725a6",
          800: "#7d2088",
          900: "#691f70",
          950: "#44084a",
        },
      },
    },
  },
  plugins: [],
};
