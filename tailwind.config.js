/** @type {import('tailwindcss').Config} */
import containerQueries from '@tailwindcss/container-queries';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Raleway', 'sans-serif'],
      },
      colors: {
        'off-black': '#1d1d1d',
        primary: '#ffff00',
      },
      keyframes: {
        skeleton: {
          '0%': { backgroundColor: '#1d1d1d' },
          '100%': { backgroundColor: '#000000' },
        },
        blinker: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        skeleton: 'skeleton 0.75s ease-in-out infinite alternate',
        blinker: 'blinker 0.5s step-end infinite alternate',
      },
    },
  },
  plugins: [containerQueries],
};
