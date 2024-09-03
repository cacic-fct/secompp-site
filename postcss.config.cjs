/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
