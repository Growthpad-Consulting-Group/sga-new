/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './contexts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#F15522',
        },
        dark: {
          charcoal: '#231F20',
        },
        light: {
          grey: '#E6EDF1',
        },
        navy: {
          blue: '#00043E',
        },
      },
    },
  },
  plugins: [],
}

