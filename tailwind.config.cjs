/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        darkTheme: {
          ...require('daisyui/src/theming/themes')['[dark]'],
          'base-100': '#000000',
          'base-200': '#1d1e1f',
          'base-300': '#2f3133',
          'base-content': '#fefedf',
          'base-primary': '#fdbd00',
        },
      },
    ],
  },
};
