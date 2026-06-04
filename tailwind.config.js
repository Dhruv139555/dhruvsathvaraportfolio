/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          charcoal: '#121212',
          darker: '#080808',
          cream: '#F4F4F0',
          bone: '#F9F9F6',
          gold: '#D4AF37',
          bronze: '#CD7F32',
          silver: '#C0C0C0',
          indigoDeep: '#0D0C1D',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cinzel"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 8s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.1))' },
          '100%': { filter: 'drop-shadow(0 0 35px rgba(255,255,255,0.3))' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
