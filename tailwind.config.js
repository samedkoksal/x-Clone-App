/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", //
  ],
  theme: {
    extend: {
      boxShadow: {
        box: "rgba(255,255,255,0.2) 0px 0px 15px, rgba(255,255,255, 0.15) 0px 0px 3px 1px",
      },
      width: {
        1265: "1265px",
        350: "350px",
        360: "360px",
        599: "599px",
        26.25: "26.25px",
      },
      padding: {
        21: "21px",
        97: "97px",
      },
      margin: {
        35: "35px",
        38: "38px",
        "5px": "5px",
      },
      gap: {
        30: "30px",
      },
      colors: {
        primary: {
          base: "rgb(29 161 242)",
          dark: "rgb(13, 142, 222)",
          darker: "rgb(16 105 165)",
          light: "rgb(203,215,227)",
        },
        gray: {
          dark: "rgb(101 119 134),",
          light: "rgb(170 184 194)",
          extraLight: "rgb(225 232 237)",
          Lighter: "rgb(245 248 250)",
          ffffff1a: "#ffffff1a",
          eff3f41a: "#eff3f41a",
          tw: "rgb(113, 118, 123)",
        },
        bblack: "rgb(20 23 26)",
        white: "#e0e1e0 ",
        ffffffe5: "#ffffffe5",
        ffffff: "#ffffff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        chirp: ["TwitterChirp", "sans-serif"],
      },
    },
  },
  plugins: [],
};
