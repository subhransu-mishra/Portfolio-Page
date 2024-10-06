import daisyui from "./node_modules/daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#1e355f",
        },
        secondary: {
          100: "#ddb26a",
        },
        third: {
          100: "#ecfaff",
        },
      },
    },
  },
  plugins: [daisyui],
};
