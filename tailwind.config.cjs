/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      bg: 'var(--bg-color)',
      header: 'var(--header)',
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
      tertiary: 'var(--tertiary)',
      button: 'var(--button-bg)',
      highlight: 'var(--highlight)',
      main: 'var(--main)',
    },
    extend: {},
  },
  plugins: [],
}
