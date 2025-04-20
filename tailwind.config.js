/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        client: {
          Primary: 'var(--primary)',
          Secondary: 'var(--secondary)',
          Tertiary: 'var(--tertiary)',

          DivideMain: 'var(--divide-main)',

          TextPrimary: 'var(--text-primary)',
          TextPrimaryHover: 'var(--text-primary-hover)',
          TextPrimaryActive: 'var(--text-primary-active)',
          TextSecondary: 'var(--text-secondary)',
          TextTertiary: 'var(--text-tertiary)',
          TextLevel: 'var(--text-level)',
          TextStatusOnline: 'var(--text-status-online)',
          TextAnchor: 'var(--text-anchor)',
          TextAnchorHover: 'var(--text-anchor-hover)',
          TextCounter: 'var(--text-counter)',
          TextTitleCollection: 'var(--text-title-collection)',

          AnchorIcon: 'var(--anchor-icon)',
          AnchorIconHover: 'var(--anchor-icon-hover)',
          AnchorIconMedia: 'var(--anchor-icon-media)',
          AnchorIconMediaHover: 'var(--anchor-icon-media-hover)',

          InputRadio: 'var(--input-radio)',
        },
        'border-main': '#665b418e',
        'bg-main': '#171d2c',
        'border-header': '#483921',
        'aside-bg': '#010a13',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        navLinkHover:
          'linear-gradient(0deg, rgba(247,217,149,0.202) 0%, rgba(249,230,135,0) 55%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
