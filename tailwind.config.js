/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontSize: {
      lt: '0.5rem',
      st: '0.7rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    screens: {
      ts: '375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'Arial', 'sans-serif']
      },
      colors: {
        'almost-black': '#121212',
        'brunch': '#F00000',
      },
      spacing: {
        '11': '-240px',
        '14': '3.5rem',
        '18': '4.5rem',
        '68': '16rem',
        '92': '23rem'
      }
    },
  },
  plugins: [],
}


