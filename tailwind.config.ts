// tailwind.config.js
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        highlight: '#19d1ff',
        mainText: '#FFF',
        darkGray: '#474747'
      },
      animation: {
        'slide-right-fade-out': 'slideRightFadeOut 0.5s ease-in-out forwards'
      },
      keyframes: {
        slideRightFadeOut: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(200%)', opacity: '0' }
        }
      }
    }
  },
  plugins: []
} satisfies Config;
