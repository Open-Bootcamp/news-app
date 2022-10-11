/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      dk: "1440px",
    },
    colors: {
      primary: "#3B0D11",
      white: "#ffffff",
      secondary: "#748386",
      black: {
        100: "#0D0B0B",
        75: "#494848",
        50: "#868585",
        25: "#C2C2C2",
        10: "#E7E7E7",
      },
    },
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        notoSerif: ["Noto Serif", "serif"],
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(350px, 1fr))",
      },
    },
    plugins: [[require("prettier-plugin-tailwindcss")]],
  },
};
