import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // ═══════════════════════════════════════════════════════════════
        // RIVER PALETTE v2.0 — "Navigate the Current"
        // ═══════════════════════════════════════════════════════════════
        river: {
          depths: "#0d1b2a",    // Primary background - deep navy
          current: "#1b4965",   // Supporting blue - the visible flow
          deep: "#142638",      // Card surfaces - where depth creates dimension
          mid: "#2a6f8e",       // Accent blue - lighter current
          mist: "#e8dfd0",      // Light text - morning fog on water
        },
        korean: {
          red: "#c73032",       // Cultural accent - fire of Korean identity
        },
        sovereign: {
          gold: "#d4a74a",      // Wisdom, highlights - the gold thread
          dark: "#8b6914",      // Gold shadow - depth
        },
        // Text colors
        cream: {
          DEFAULT: "#f0ebe3",   // Primary text
          muted: "#a0b4c8",     // Secondary text
        },
        // Legacy support - maps to new palette
        friendship: {
          blue: "#1b4965",      // Now Current Blue
          red: "#c73032",       // Now Korean Red
          white: "#f0ebe3",     // Now Cream
        },
        blue: {
          50: "#e8f4f8",
          100: "#d1e9f1",
          200: "#a3d3e3",
          300: "#75bdd5",
          400: "#47a7c7",
          500: "#2a6f8e",        // River Mid
          600: "#1b4965",        // Current Blue (primary)
          700: "#163b52",
          800: "#112d3f",
          900: "#0d1b2a",        // River Depths
          950: "#091420",
        },
        red: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#c73032",        // Korean Red (primary)
          600: "#b12b2d",
          700: "#9b2628",
          800: "#852123",
          900: "#6f1c1e",
          950: "#450a0a",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        heading: ["var(--font-heading)", "Playfair Display", "Georgia", "Times New Roman", "serif"],
        korean: ["var(--font-korean)", "Noto Serif KR", "Apple SD Gothic Neo", "Malgun Gothic", "serif"],
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 2s infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-25%)",
          },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

export default config
