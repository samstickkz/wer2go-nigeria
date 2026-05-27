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
        // wer2 GO cyan accent — pulled from the live brand mark
        brand: {
          DEFAULT: "#6ACEEA",
          dark: "#2BB6E1",
          soft: "#B8E4F1",
        },
        // Dark navy surfaces — primary dark in the mobile app
        teal: {
          DEFAULT: "#0F2238",
          deep: "#06101F",
          soft: "#1A3454",
        },
        // Cool tinted off-white — soft section backgrounds
        cream: "#F0F8FB",
        // Body + headline text colour (dark navy tint)
        charcoal: "#0F1B2E",
        // Brand yellow for badges and stars
        highlight: "#FFF421",
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
