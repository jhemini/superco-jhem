/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './config/*.json',
    './layout/*.{json,liquid}',
    './assets/*.{json,liquid}',
    './sections/*.{json,liquid}',
    './snippets/*.{json,liquid}',
    './templates/**/*.{json,liquid}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

