/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#0a0a0a',
          elevated: '#111113',
          muted: '#18181b',
        },
        fg: {
          base: '#e5e7eb',
          muted: '#9ca3af',
          subtle: '#6b7280',
        },
        accent: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        border: {
          base: '#1f1f23',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        hairline: '0 0 0 1px rgba(255,255,255,0.04)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
