/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e5e7eb',
          300: '#cfd4da',
          400: '#aeb4bb',
          500: '#5a6a7a', // Accent xanh xám nhẹ
          600: '#444c53', // Xám đậm (sidebar)
          700: '#36393b', // Xám đậm hơn (dark mode)
          800: '#23272b',
          900: '#181a1b',
        },
        accent: {
          100: '#e5e7eb',
          200: '#cfd4da',
          300: '#aeb4bb',
          400: '#5a6a7a',
          500: '#444c53',
        },
        neutral: {
          50: '#fff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#e5e5e5',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#181818',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-in-out forwards',
        'slide-right': 'slideRight 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    ...[50,100,200,300,400,500,600,700,800,900].flatMap(shade => [
      `from-accent-${shade}`,
      `via-accent-${shade}`,
      `to-accent-${shade}`,
    ]),
  ],
};