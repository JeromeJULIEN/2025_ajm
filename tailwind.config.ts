import type { Config } from "tailwindcss";

// const plugin = require("tailwindcss/plugin");

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        mainColor: "#FFFFFF",
        mainColorDark: "#0a0a0a", //@0a0a0a
        mainButtonDark: "#fafafa",
        secondColor: "#EFEFEF",
        secondColorDark: "#525252",
        accentColor: "#8ab2be",
        "textColor-main": "#000000",
        "textColor-second": "rgb(var(--color-text-second) / <alpha-value>)",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        up: "0 -10px 6px -1px rgba(0, 0, 0, 0.05), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
        white: "0 0px 20px rgba(100, 100, 100, 0.1)",
      },
      dropShadow: {
        "custom-light": "0 0px 2px rgba(255, 255, 255, 0.2)", // ombre blanche légère
      },
      zIndex: {
        "60": "60",
      },
    },
  },
  /*plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
    plugin(function ({
      addUtilities,
      theme,
    }: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      addUtilities: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      theme: any;
    }) {
      const newUtilities = {
        ".text-h1": {
          fontSize: theme("fontSize.4xl"),
        },
        ".text-h2": {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
        },
        ".text-h3": {
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.extralight"),
        },
        ".text-h4": {
          fontSize: theme("fontSize.lg"),
          fontWeight: theme("fontWeight.extralight"),
        },
        ".text-body": {
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.thin"),
        },
        ".text-body-strong": {
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.bold"),
        },
        ".text-footnote": {
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.thin"),
        },
        ".text-caption": {
          fontSize: theme("fontSize.xs"),
          fontWeight: theme("fontWeight.thin"),
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],*/
} satisfies Config;

export default config;
