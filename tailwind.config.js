/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['NeueMontreal', 'system-ui', 'sans-serif'],
        mono: ['Nord', 'monospace'],
        serif: ['InstrumentSerif', 'Georgia', 'serif'],
        gothic: ['Chomsky', 'serif'],
        condensed: ['F37Stout', 'sans-serif'],
        script: ['Mayonice', 'cursive'],
      },
      colors: {
        dark: '#000000',
        light: '#f5f5f5',
        subdued: 'rgba(255, 255, 255, 0.5)',
        'subdued-dark': 'rgba(0, 0, 0, 0.5)',
        accent: '#f00'
      }
    },
  },
  plugins: [],
}
