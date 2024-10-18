import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground-rgb)",
        "background-start": "var(--background-start-rgb)",
        "background-end": "var(--background-end-rgb)",
        donker: "#0a192f",
        white: "#ccd6f6",
        gray: "#8892b0",
        teal: "#64ffda",
        black: "#000000",
        dark: "#728C9F",
        purple: "#AA60DB",
        red: "#EB5757",
        blue: "#2D9CDB",
        yellow: "#FFE082",
        orange: "#E08020",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },

  plugins: [],
};
export default config;
