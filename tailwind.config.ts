import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#F2683C",
          dark: "#D9542C",
        },
        teal: {
          DEFAULT: "#1E4845",
          deep: "#0F2C2A",
          soft: "#26615C",
        },
        cream: "#F5EFE2",
        charcoal: "#1A2826",
        highlight: "#F5C518",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
