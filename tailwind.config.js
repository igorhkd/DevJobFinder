/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F1F5F9",
        secondary: "#1F2937",
        link: "#0080FF",
      },
    },
  },
  plugins: [],
};
