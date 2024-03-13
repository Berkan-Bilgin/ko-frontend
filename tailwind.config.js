/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#416D19",
        secondary: "#ffed4a",
        accent: "#e3342f",
      },
    },
  },
  plugins: [],
};
