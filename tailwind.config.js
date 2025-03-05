import daisyui from "./node_modules/daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
        shine: 'shine 5s linear infinite',
      },
      colors: {
        primary: {
          100: "#0f0f0f",
        },
        secondary: {
          100: "#1c1c1c",
        },
        third: {
          100: "#ecfaff",
        },
      },
    },
  },
  plugins: [daisyui],
};
