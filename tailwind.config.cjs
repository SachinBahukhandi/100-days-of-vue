/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'source-code-pro': ['Source Code Pro', 'monospace'],
        'lobster':['Lobster', 'cursive']
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
