import daisyui from "./node_modules/daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        shine: "shine 5s linear infinite",
        marquee: "marquee 20s linear infinite",
      },
      colors: {
        primary: {
          100: "#111827",
        },
        secondary: {
          100: "#145a30",
        },
        third: {
          100: "#ecfaff",
        },
      },
    },
  },
  plugins: [daisyui],
};
