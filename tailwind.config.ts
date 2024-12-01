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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "scale-up": "scaleUp 0.3s ease-in-out forwards",
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "slide-down": "slideDown 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "fade-out": "fadeOut 0.3s ease-in-out forwards",
        "pulse-slow": "pulse 2s infinite",
        "spin-slow": "spin 2s linear infinite",
        "bounce-slow": "bounce 2s infinite",
        "snow-fall": "snowFall 10s linear infinite", // Added animation for snow effect
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        snowFall: {
          "0%": { transform: "translateY(-10%)", opacity: "1" },
          "100%": { transform: "translateY(110%)", opacity: "0.3" },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
