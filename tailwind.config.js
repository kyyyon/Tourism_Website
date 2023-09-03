/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "12rem",
      },
    },
  },
  plugins: [],
};
