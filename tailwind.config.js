/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: ['dark']
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}

