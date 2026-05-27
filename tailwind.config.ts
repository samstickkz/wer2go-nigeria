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
        // wer2 GO cyan — primary accent
        brand: {
          DEFAULT: "#6ACEEA",
          dark: "#2BB6E1",
          soft: "#D8F0F8", // cyan tinted surface for "soft cyan" sections
        },
        // Dark navy surfaces — primary dark in the mobile app
        teal: {
          DEFAULT: "#0B1B2E",
          deep: "#04101F",
          soft: "#1A3454",
        },
        // Neutral light backgrounds (no longer blue-tinted; clearer hierarchy vs white)
        cream: "#F4F7F9",
        // Single warm surface for warm accent moments
        warm: "#FFFBF2",
        // Body + headline text colour
        charcoal: "#0B1B2E",
        // Brand yellow — used more boldly now
        highlight: "#FFF421",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        lift: "0 4px 24px -12px rgba(11,27,46,0.10)",
        liftHover: "0 12px 36px -16px rgba(11,27,46,0.18)",
        glow: "0 12px 32px -16px rgba(106,206,234,0.55)",
      },
    },
  },
  plugins: [],
};
export default config;
