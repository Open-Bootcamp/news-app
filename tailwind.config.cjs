/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#3B0D11',
      white: '#ffffff'
    },
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        notoSerif: ['Noto Serif', 'serif']
      }
    },
    plugins: [[require('prettier-plugin-tailwindcss')]]
  }
}
