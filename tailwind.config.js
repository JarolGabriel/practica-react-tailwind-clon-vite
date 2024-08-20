/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "rgba(60, 60, 67, .56)",
        "custon-gray-black": "#3c3c43",
        "custon-buton-morado": "#8180fe",
      },
    },
  },
  plugins: [],
};
