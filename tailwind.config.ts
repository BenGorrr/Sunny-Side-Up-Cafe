import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sun: {
          50: "#fffaf0",
          100: "#fff1cc",
          200: "#ffd877",
          300: "#ffc95b",
          400: "#ffbd45",
          500: "#f6aa1c",
        },
        cream: "#fffaf3",
        cocoa: "#7b5c44",
        espresso: "#3b2a21",
        sage: "#8fa67a",
      },
      boxShadow: {
        card: "0 18px 45px rgba(123, 92, 68, 0.12)",
        soft: "0 12px 30px rgba(59, 42, 33, 0.08)",
      },
      backgroundImage: {
        "sunrise-glow":
          "radial-gradient(circle at top left, rgba(255, 216, 119, 0.55), transparent 40%), radial-gradient(circle at bottom right, rgba(246, 170, 28, 0.2), transparent 35%)",
      },
    },
  },
  plugins: [],
};

export default config;
