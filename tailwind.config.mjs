/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(135, 17, 193, 0.3) 0%, rgba(36, 114, 252, 0.3) 100%)",
      },
      fontFamily: {
        sans: ['"SF Pro Display"', "sans-serif"],
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
      },
      animation: {
        wave: "wave 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
