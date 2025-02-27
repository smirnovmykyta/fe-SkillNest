import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Adjust based on your project structure
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Add daisyUI here
};
