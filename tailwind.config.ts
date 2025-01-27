import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
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
        alegreya: ['var(--font-alegreya)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        starScale: {
          "from, to": {
            transform: "rotate(0) scale(0)",
            opacity: '0',
          },

          "50%": {
            transform: "rotate(180deg) scale(1)",
            opacity: '1',
          },
        },
      },
      animation: {
        //...
        starScale: "starScale 800ms ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
} satisfies Config;
