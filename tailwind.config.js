/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-primary": "#0079FF",
        "app-primary-hover": "#60ABFF",
        "app-grey": "#90A4D4",
        "app-grey-1": "#697C9A",
        "app-grey-2": "#4B6A9B",
        "app-grey-3": "#1E2A47",
        "app-grey-4": "#2B3442",
        "app-grey-5": "#222731",
        "app-red": "#F74646",

        "app-light": "#F6F8FF",
        "app-dark": "#141D2F",

        "app-disabled-light": "rgba(75, 106, 155, 0.5)",
        "app-disabled-dark": "rgb(255, 255, 255, 0.5)",
      },
      boxShadow: {
        app: "0 16px 30px -10px rgba(70, 96, 187, 0.20)",
      },
    },
  },
  plugins: [],
};
