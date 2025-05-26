/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Override any potentially oklch-based colors
        primary: "#3b82f6", // Safe blue
        secondary: "#64748b", // Gray
      },
    },
  },
  plugins: [],
};
