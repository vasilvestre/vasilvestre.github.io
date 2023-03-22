const Encore = require('@symfony/webpack-encore');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/**/*.html',
  ],
  theme: {
    extend: {
      maxWidth: {
        'prose': '70ch',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'green-tree': '#266149',
        beige: '#FFFCE8',
        'dark-beige': '#fefee2',
        'light-green': '#BDF4B2',
        green: '#597354',
        blue: '#25626e',
        'dark-blue': '#1C4952',
      },
      backgroundImage: {
        what: "url('./images/texture-what.jpg')",
      }
    },
  },
  variants: {},
  corePlugins: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  purge: Encore.isProduction(),
}
