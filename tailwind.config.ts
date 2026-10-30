import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0c0c0b",
        papyrus: "#f5efe5",
        sand: "#d3a256",
        lapis: "#123c56",
      },
      boxShadow: {
        luxe: "0 20px 80px rgba(0, 0, 0, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
