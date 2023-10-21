/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00b4ff", // Set your primary color
        secondary: "#9e9e9e", // Set your secondary color
        defaultText: "#484848",
        borderColor: "#ced4da",
        primaryBg: "linear-gradient(to top,#0068c6,var(--primary-color))",
        tabContent: "#89cff0",
        mainTitleBg:
          "linear-gradient(to left,var(--primary-color),#007cd5,#00a1f1,var(--primary-color))",
      },
    },
  },
  plugins: [],
};
