/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'surgir-direita': 'surgir-direita 2.0s forwards',
        'surgir-esquerda': 'surgir-esquerda 2.0s forwards',
        surgir: 'surgir 2.0s forwards',
      },
      keyframes: {
        'surgir-direita': {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'surgir-esquerda': {
          '0%': { opacity: '0', transform: '-translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        surgir: {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
