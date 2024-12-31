import daisyui from "./node_modules/daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
      },
      colors: {
        primary: {
          100: "#220088",
        },
        secondary: {
          100: "#e2ecf5",
        },
        third: {
          100: "#ecfaff",
        },
      },
    },
  },
  plugins: [daisyui],
};
