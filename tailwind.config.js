/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./docs.html"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050506",
          900: "#0a0a0c",
          850: "#0e0e11",
          800: "#141418",
          750: "#1a1a1f",
          700: "#22222a",
          600: "#2e2e38",
        },
        neon: {
          DEFAULT: "#39ff6a",
          dim: "#2bd95a",
          soft: "rgba(57, 255, 106, 0.12)",
          line: "rgba(57, 255, 106, 0.32)",
        },
        flare: {
          DEFAULT: "#ff3d71",
          dim: "#e62e60",
          soft: "rgba(255, 61, 113, 0.14)",
          line: "rgba(255, 61, 113, 0.35)",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      boxShadow: {
        "neon-glow":
          "0 0 0 1px rgba(57,255,106,0.28), 0 0 44px -12px rgba(57,255,106,0.55)",
        "flare-glow":
          "0 0 0 1px rgba(255,61,113,0.3), 0 0 34px -14px rgba(255,61,113,0.6)",
        card: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 18px 40px -30px rgba(0,0,0,0.9)",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.82)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "fade-up": "fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};
