/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverButton: "#dcdfec",
        primarytextcolor: "#323338",
        allgreybackgroundcolor: "#f6f7fb",
        colorwolfgray: "#c3c6d4",
        placeholdercolor: "#676879",
        layoutbordercolor: "#d0d4e4",
        customblue: "rgb(87, 155, 252)",
        customgreen: "rgb(0, 200, 117)",
      },
      gridTemplateColumns: {
        customTable:
          "170px minmax(auto, 200px) minmax(auto, 200px) minmax(auto, 200px) auto",
      },
      flexGrow: {
        6: "6",
      },
      boxSizing: {
        initial: "initial",
      },
      fontFamily: {
        custom: ["var(--font-family)"],
      },
      width: {
        70: "70%",
      },
      height: {
        551: "551px",
      },
      boxShadow: {
        custom: "0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        custom: "-10px 10px 30px rgba(29,140,242,0.3)",
      },
    },
  },
  plugins: [],
};
