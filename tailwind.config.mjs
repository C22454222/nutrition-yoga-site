/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        terra: {
          500: '#B45B29',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Nunito Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
