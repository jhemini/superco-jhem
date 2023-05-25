let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('src/js/theme.js', 'assets')
    .sass('src/styles/theme.scss', 'assets')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('tailwind.config.js') ]
    });