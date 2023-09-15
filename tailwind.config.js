/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['ui-serif', 'Georgia', '"Times New Roman"', 'serif'],
      mono: ['ui-monospace', '"Courier New"', 'monospace']
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dark']
  }
};
