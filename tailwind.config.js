/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Defines the slower, more subtle "breathe" animation
      keyframes: {
        breathe: {
          '0%': { transform: 'scale(1.3)', opacity: '0' },
          '50%': { transform: 'scale(1)', opacity: '0.7' },
          '100%': { transform: 'scale(1.3)', opacity: '0' },
        },
      },
      animation: {
        'breathe': 'breathe 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};