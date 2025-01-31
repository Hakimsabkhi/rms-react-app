/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        cText: 'var(--color-cText)',
        cTextH: 'var(--color-cTextH)',
        cbutton: 'var(--color-cbutton)',
        Navbutton: 'var(--color-Navbutton)',
        NavbuttonText: 'var(--color-NavbuttonText)',
        NavbuttonH: 'var(--color-NavbuttonH)',
        NavbuttonHText: 'var(--color-NavbuttonHText)',
        boxshadow: 'var(--color-boxshadow)',
      },
    },
  },
  plugins: [],
}