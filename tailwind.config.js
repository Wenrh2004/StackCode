/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'rgb(var(--color-primary)/ <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
      },
      colors: {
        white: 'rgb(var(--color-white)/ <alpha-value>)',
        mainwhite: 'rgb(var(--color-mainwhite)/ <alpha-value>)',
      },
    },
  },
  plugins: [],
}
