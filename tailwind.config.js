module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "scale-repeat": {
          "60%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "fade-out-slow": {
          "0%": { opacity: "1" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "20%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-slow": {
          "0%": { opacity: "0" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0)" },
          "20%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        "banner-load": {
          "0%": { height: "65vh", filter: "grayscale(0%)" },
          "50%": { height: "65vh", filter: "grayscale(0%)" },
          "100%": { height: "20vh", filter: "grayscale(60%)" },
        },
      },
      animation: {
        "scale-repeat": "scale-repeat 1.5s ease-in-out",
        "fade-out": "fade-out 2s ease",
        "fade-out-fast": "fade-out 1s ease",
        "fade-out-slow": "fade-out-slow 3s ease",
        "fade-in-slow": "fade-in-slow 4s ease",
        "fade-in": "fade-in 2s ease",
        "fade-in-fast": "fade-in 1s ease",
        "scale-in": "scale-in 2s ease",
        "banner-load": "banner-load 3s ease",
      },
      colors: {
        themeBg: "#1d2125",
        themeTan: "#edc298",
        themeDarkCoolGray: "#1F2933",
        themeDarkOrange: "#b83804",
        themeLightOrange: "#FFBA52",
      },
      zIndex: {
        100: "100",
        999: "999",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
