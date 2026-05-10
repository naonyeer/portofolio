import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        night: "#03051f",
        electric: "#2667ff",
        plasma: "#ff4df8",
        acid: "#c9ff32",
        chrome: "#d8d8e6",
        royal: "#3511a8",
      },
      boxShadow: {
        "hard-black": "6px 6px 0 #000",
        "window": "0 0 0 2px #101028, 8px 8px 0 rgba(0,0,0,.55)",
        "neon": "0 0 18px rgba(255,77,248,.55), 0 0 40px rgba(38,103,255,.35)",
      },
      fontFamily: {
        display: ["Arial Black", "Impact", "Haettenschweiler", "sans-serif"],
        body: ["Trebuchet MS", "Verdana", "sans-serif"],
        pixel: ["Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
