/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      background: "#F7F8FA",
      green: "#29CC39",
      purple: "#8833FF",
      orange: "#FF6633",
      sky: "#33BFFF",
      blue: "#3361FF",
      darkBlue: "#1A2233",
      secondColor: "#FFFFFF",
      pink: "#E62E7B",
      yellow: "#FFCB33",
      cyan: "#2EE6CA",
      textColor1: "#6B7A99",
      textColor2: "#C3CAD9",
      textColor3: "#7D8FB3",
      textColor4: "#ADB8CC",
      textColor5: "#4D5E80",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
