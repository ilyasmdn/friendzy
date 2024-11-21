/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        secondary: "#FF6584",
        accent: "#00C9A7",
      },
      fontFamily: {
        sans: ['Concert One', 'sans-serif'],
      }
    },
  },
  plugins: [],
}