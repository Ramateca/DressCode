/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dresscode: {
          main: "#DC2626", // rosso brillante
          dark: "#841515", // rosso scuro
          light: "#FFFFFF", // bianco
          muted: "#F3F4F6", // grigio chiaro neutro
          accent: "#cf3083", // accento dorato tenue
        },
        // Shortcut per bg e text diretti
        bg: {
          base: "#FFFFFF",
          muted: "#F9FAFB",
        },
        text: {
          base: "#111111",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        pill: "2rem",
        xl: "1.25rem",
        "2xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 12px rgba(0,0,0,0.05)",
        elegant: "0 4px 24px rgba(140, 21, 21, 0.25)", // rosso scuro sfumato
      },
      spacing: {
        layout: "4rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
