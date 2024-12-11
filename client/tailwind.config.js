/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      sans: ['Chilanka', 'cursive'],
      serif: ['Walter Turncoat', 'cursive']
    },
    extend: {},
  },
  plugins: [],
}

