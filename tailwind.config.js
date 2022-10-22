/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: {
    enabled: true,
    content: ['./src/**/*.tsx'],
  },
  theme: {
    typography: (theme) => ({}),
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}