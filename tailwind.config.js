/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '#7c3aed',
        accent: '#db2777',
        dark: '#1e293b',
        light: '#ffffff',
        background: '#f8fafc',
        'text-primary': '#1e293b',
        'text-secondary': '#475569',
      },
      animation: {
        'text-reveal': 'text-reveal 1.5s cubic-bezier(0.77,0,0.175,1) 0.5s',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'text-reveal': {
          '0%': {
            transform: 'translate(0, 100%)',
            opacity: 0
          },
          '100%': {
            transform: 'translate(0, 0)',
            opacity: 1
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(79, 70, 229, 0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(79, 70, 229, 0.5)' }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
