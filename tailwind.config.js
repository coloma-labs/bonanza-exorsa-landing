module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeBg: "#1d2125",
        themeTan: "#edc298",
        themeDarkCoolGray: "#1F2933",
      },
      zIndex: {
        100: "100",
        999: "999",
      },
    },
  },
  plugins: [],
};
