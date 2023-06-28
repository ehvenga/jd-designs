module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 100: "#cccccc", 900: "#353535", "800_1e": "#2d33501e" },
        gray: {
          100: "#f7f7f7",
          800: "#484848",
          900: "#1e1e1e",
          "900_02": "#161616",
          "900_01": "#1e1c31",
        },
        white: { A700_3f: "#ffffff3f", A700: "#ffffff" },
        light_blue: { 400: "#1abcfe", A700: "#0086fd" },
        amber: { A400: "#f2cd00" },
        green: { A400: "#0acf83" },
        black: { 900: "#000000", "900_1e": "#0000001e", "900_38": "#00000038" },
        teal: { 700: "#007879" },
      },
      fontFamily: {
        aeonik: "Aeonik",
        inter: "Inter",
        manrope: "Manrope",
        montserrat: "Montserrat",
        notosans: "Noto Sans",
      },
      boxShadow: {
        bs1: "20px 40px  80px 0px #2d33501e",
        bs2: "25px 79px  75px 0px #0000001e",
        bs: "0px 39px  114px -29px #00000038",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
