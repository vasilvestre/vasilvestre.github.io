const tailwindcss = require('tailwindcss')
module.exports = {
    plugins: [
        require('postcss-import'),
        'postcss-preset-env',
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
    ],
}
