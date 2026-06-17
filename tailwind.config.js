// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-6px)' },
          '75%': { transform: 'translateX(6px)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
        shake: 'shake 0.2s ease-in-out 3',
      },
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(69, 147, 236, 0.35) 0%, rgba(69, 147, 236, 0) 50%), linear-gradient(141.27deg, rgba(69, 147, 236, 0) 50%, rgba(69, 147, 236, 0.15) 100%)',
      },
    },
  },
  plugins: [],
};