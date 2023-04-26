/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "tablet":"481px",
      'laptop': '769px',
      "desktop":"1025px"

    },
  },
  plugins: [],
}
