/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "header-mobile": "calc(100vh - 68px)",
        "header-desktop": "calc(100vh - 143.2px)",
      },
    },
  },
  plugins: [],
};
