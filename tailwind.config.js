/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
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

