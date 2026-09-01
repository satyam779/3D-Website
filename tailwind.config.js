/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#050407",
          soft: "#0B0710",
          card: "rgba(18, 12, 28, 0.65)",
        },
        foreground: "#FFFFFF",
        robot: {
          purple: "#7916A5",
          "purple-light": "#A855F7",
          "purple-dark": "#3B0757",
          "purple-glow": "#9333EA",
          gold: "#D6A33A",
          "gold-light": "#F3C769",
          silver: "#E6E6E6",
        },
        muted: {
          DEFAULT: "#A09BAA",
          dark: "#5E5669",
          light: "#D8D4E2",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      letterSpacing: {
        widest: "0.2em",
        mega: "0.3em",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
