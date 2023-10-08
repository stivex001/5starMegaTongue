/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-20": "#444BD3",
        "purple-25": "rgba(68,75,211,0.7)",
        "red-20": "#DB2C2C",
        "dark-20": "#121127",
        "light-text": "rgba(0, 0, 0, 0.49)",
        "light-green": "#12B76A",
        "dark-blue": "#1C1C1C",
        "light-gray": "#858585",
        "bg-purple": "rgba(162, 89, 255, 0.42)",
        "bg-gray": "rgba(147, 167, 200, 0.20)",
        "bg-light": "#F2F3FF",
        "bg-btn": "#41C6EC",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
  },
  plugins: [],
};
