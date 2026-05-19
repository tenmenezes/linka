/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2F3B69",
        secondary: "#3E829A",
        background: "#FAFAFF",
        accent: "#FFDE59",

        primaryDark: "#24305A",
        primaryLight: "#44517F",

        secondaryDark: "#2F6B80",
        secondaryLight: "#63A3B8",

        accentDark: "#E8C93F",
        accentLight: "#FFE985",

        white: "#FFFFFF",
        surface: "#FFFFFF",
        surfaceMuted: "#F4F5FA",

        text: "#1F2937",
        textPrimary: "#2F3B69",
        textMuted: "#6B7280",
        textLight: "#FFFFFF",

        border: "#E5E7EB",
        danger: "#EF4444",
        success: "#16A34A",
      },
      fontFamily: {
        atkinson: ["Atkinson-Regular"],
        "atkinson-bold": ["Atkinson-Bold"],
      },
    },
  },
  plugins: [],
};
