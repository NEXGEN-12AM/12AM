import type { Config } from "tailwindcss";

export default {
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
      },
      fontFamily: {
        humane: ["Humane", "sans-serif"],
        bronx: ["Bronx", "sans-serif"],
        kano: ["Kano", "sans-serif"],
      },
  },
  plugins: [],
} 
}satisfies Config;
