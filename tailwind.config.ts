import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iron: {
          950: "#17140F",
          900: "#1E1A14",
          800: "#2B241C",
          700: "#3A3128",
        },
        ember: {
          400: "#F2792E",
          500: "#E8590C",
        },
        gold: {
          300: "#FDBA3D",
        },
        steel: {
          300: "#B8B2A8",
          500: "#8A8378",
        },
        plate: {
          50: "#F2EEE6",
          100: "#E8E2D6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        "ticker-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "ticker-scroll": "ticker-scroll 32s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
