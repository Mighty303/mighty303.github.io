/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '3xl': '2045px',
        // => @media (min-width: 1280px) { ... }
      },
      boxShadow: {
        // '3xl': '0 35px 35px rgba(100, 100, 100, 0.25)',
        '3xl': '0 0 80px 5px rgba(90, 90, 90, 0.3)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    }
  },
  plugins: [require("daisyui")],
}