/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'light-black': '#1a2947',
        'dark-white': '#ebeef5',
        'dark-black-primary': '#25282e',
        'dark-black-secondary': '#292c33',
      },
      fontFamily: {
        body: [
          'Poppins',
          '"Helvetica Neue"',
          'Arial',
          '"Hiragino Kaku Gothic ProN"',
          '"Hiragino Sans"',
          'Meiryo',
          'sans-serif',
        ],
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      gridTemplateColumns: {
        100: '100%',
        repeat: 'repeat(auto-fit, minmax(234px, 1fr))',
      },
    },
  },
  plugins: [],
};
