import tailwindcssAnimate from "tailwindcss-animate";
import type { Config } from "tailwindcss";


const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
		border: "var(--border)",
      },
      fontFamily: {
        humane: ["Humane", "sans-serif"],
        bronx: ["Bronx", "sans-serif"],
        kano: ["Kano", "sans-serif"],
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
