/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-green": "#384239",
        "main-gray": "#D2D1CA",
        "sec-green": "#0D300E",
      },
      fontFamily: {
        climate: ['"Climate Crisis"', "cursive"],
        lato: ["Lato", "sans-serif"],
      },
      lineHeight: {
        zero: "1",
      },
    },
  },
  plugins: [],
};
