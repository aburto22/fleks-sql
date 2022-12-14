/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "fleks-dark": "#29194a",
        "fleks-light": "#ff4a7e",
      },
      spacing: {
        112: "28rem",
      },
    },
  },
  plugins: [],
};
