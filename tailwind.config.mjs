/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        terra: {
          50: '#fdf3ec',
          100: '#f8e2d0',
          200: '#eec19b',
          300: '#dc9968',
          400: '#c97a45',
          500: '#B45B29',
          600: '#9c4d23',
          700: '#7e3e1c',
          800: '#623016',
          900: '#482310',
        },
        cream: {
          50: '#fffaf5',
          100: '#fdf1e5',
          200: '#f7e0cc',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
