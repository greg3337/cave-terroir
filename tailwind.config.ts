import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bordeaux: {
          DEFAULT: '#6B1E2C',
          dark: '#3D0B15',
          deep: '#2A0710',
          light: '#8B2E3C',
          muted: '#A04A5A',
        },
        cream: {
          DEFAULT: '#F5F0E8',
          dark: '#EDE4D4',
          deep: '#DDD0BC',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E2C882',
          dark: '#A88A2E',
          pale: '#F0E4B0',
        },
        charcoal: '#1A1410',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease-out both',
        'fade-in': 'fadeIn 1.2s ease-out both',
        'scale-in': 'scaleIn 0.8s ease-out both',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
