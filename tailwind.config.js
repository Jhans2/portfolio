/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Noto Sans', 'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      },
    },
  },
  plugins: [],
}
