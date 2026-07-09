/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:        'var(--bg)',
        surface:   'var(--surface)',
        surface2:  'var(--surface-2)',
        ink:       'var(--ink)',
        accent:    'var(--accent)',
        accentDk:  'var(--accent-dark)',
        mid:       'var(--mid)',
        muted:     'var(--muted)',
        line:      'var(--border)',
        lineMd:    'var(--border-md)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      boxShadow: {
        soft: '0 10px 28px var(--shadow)',
        glow: 'var(--glow)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
