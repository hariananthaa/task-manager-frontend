/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
    },
    fontFamily: {
      futura: ["Futura", "sans-serif"],
      futuraBold: ["Futura Bold", "sans-serif"],
      futuraMedium: ["Futura Medium", "sans-serif"],
    },
    colors: {
      primary: "#0280FD",
      primary_hover: "#0576e7",
      primary_disable: "#9accfe",
      secondaryHoverLight: "#ebedef",
      primaryHoverLight: "#66666a",
      text: {
        default: "#252525",
        disable: "#989898",
      },
      input: {
        border: "#c1c1c1",
        text: "#252525",
        placeholder: "#989898",
      },
      gray_scale_1: "#c1c1c1", //Disable
      gray_scale_2: "#989898", // Placeholder
      white: "#ffffff",
      black: "#000000",
      error: "#f1406c",
      success: "#5fb663",
    },
  },
  plugins: [],
};
