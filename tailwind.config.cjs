/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.astro',
    './src/**/*.{astro,js,jsx,ts,tsx,vue}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('preline/plugin')],
};
