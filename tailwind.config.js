module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'blue': '#168FF7',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}