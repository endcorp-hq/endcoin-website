/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'endcoin-sm': '321px',
        'endcoin-md': '688px',
        'endcoin-lg': '1024px',
        'endcoin-xl': '1200px',
      },
      colors: {
        'end-button-green':'#298021',
        'end-fade-gold':'#868472',
        'end-hover-gold':'#D3B280',
      },
      fontFamily: {
        'endcoin': ['"Jacques Francois"', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};
