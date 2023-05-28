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
    fontFamily: {
      'GTSuper': ['GT Super', 'serif'],
      'Platform': ['Platform', 'sans-serif']
    },
    fontSize: {
      body: ['14px', '16px'],
      med: ['24px', '32px'],
      h1: ['80px', '80px'],
      h2: ['80px', '80px'],
      h3: ['64px', '64px'],
      h4: ['32px', '32px']
    },
    colors: {
      teel: '#85ABBD',
      neon: '#E3FF21',
      black: '#000000'
    },
    backgroundColor: theme=> ({
      teel: '#85ABBD',
      neon: '#E3FF21',
      black: '#000000'
    })
  },
  plugins: [],
}

