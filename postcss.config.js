/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {}
  }
};
