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
        "background-color-dark": "#212428",
        "color-title": "#A4AEBB",
        "color-navbar-item": "#F8F5F8",
        "color-text": "#A7B0BD",
        primary: "#FACC15",
      },
      boxShadow: {
        "item-banner": " -1px 1px 9px 5px rgba(255,255,255,0.05);",
      },
      screens: {
        small: "375px",
      },
    },
  },
  plugins: [],
};
export default config;
