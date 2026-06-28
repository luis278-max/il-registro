/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#16191c',
        paper: '#e7e5dd',
        card: '#faf9f5',
        line: 'rgba(22, 25, 28, 0.14)',
        critico: '#9e1b1b',
        muted: '#6b6f76',
        stamp: '#9e1b1b',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
