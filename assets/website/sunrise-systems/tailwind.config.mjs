import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [
    tailwindcssAnimate, 
    typography,
    function ({ addBase }) {
      addBase({
        html: {
          scrollBehavior: 'smooth',
        },
      })
    },
  ],
  prefix: '',
  // Spacing follows 8px baseline rhythm
  // Use space-2, 4, 6, 8, 12, 16, 24, 32, 40 for consistent vertical rhythm
  safelist: [
    // Section spacing classes (8px baseline rhythm)
    'pt-0', 'pb-0',
    'pt-8', 'pb-8',
    'pt-12', 'pb-12',
    'pt-16', 'pb-16',
    'pt-24', 'pb-24',
    'pt-32', 'pb-32',
    'pt-40', 'pb-40',
    // Grid column spans - mobile (base)
    'col-span-1',
    'col-span-2',
    'col-span-3',
    'col-span-4',
    // Grid column spans - tablet (md)
    'md:col-span-1',
    'md:col-span-2',
    'md:col-span-3',
    'md:col-span-4',
    'md:col-span-6',
    'md:col-span-8',
    // Grid column spans - desktop (lg)
    'lg:col-span-1',
    'lg:col-span-2',
    'lg:col-span-3',
    'lg:col-span-4',
    'lg:col-span-5',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    // Grid column start positions
    'md:col-start-2',
    'md:col-start-3',
    'md:col-start-4',
    'lg:col-start-1',
    'lg:col-start-2',
    'lg:col-start-3',
    'lg:col-start-4',
    'lg:col-start-5',
    'lg:col-start-6',
    'lg:col-start-7',
    'lg:col-start-8',
    'lg:col-start-9',
    // Aspect ratios
    'aspect-square',
    'aspect-[2/1]',
    // Object position classes for background images
    'object-center',
    'object-top',
    'object-bottom',
    'object-left',
    'object-right',
    // Utility classes
    'text-sm',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
    'md:grid-cols-2',
    'md:grid-cols-3',
    'md:grid-cols-4',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'body-1',
    'body-2',
    'accent',
    'bg-[#F5F5F5]',
    'rounded-[5px]',
    'gap-[10px]',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        '2xl': '2rem',
        DEFAULT: '1rem',
        lg: '2rem',
        md: '2rem',
        sm: '1rem',
        xl: '2rem',
      },
      screens: {
        '2xl': '86rem',
        lg: '64rem',
        md: '48rem',
        sm: '40rem',
        xl: '80rem',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'scroll': 'scroll 30s linear infinite',
        'scroll-reverse': 'scroll-reverse 30s linear infinite',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        border: 'hsla(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        foreground: 'hsl(var(--foreground))',
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        ring: 'hsl(var(--ring))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        success: 'hsl(var(--success))',
        error: 'hsl(var(--error))',
        warning: 'hsl(var(--warning))',
        offwhite: '#FBFBFB',
        'card-bg': '#F5F5F5',
      },
      fontFamily: {
        heading: ['var(--font-dm-sans)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif'],
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
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(-33.333%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': '#111111',
              '--tw-prose-headings': '#111111',
              color: '#111111',
              h1: {
                color: '#111111',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: '600',
                fontSize: '4rem',
                lineHeight: '1.2',
              },
              h2: {
                color: '#111111',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: '600',
                fontSize: '3rem',
                lineHeight: '1.3',
              },
              h3: {
                color: '#111111',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: '600',
                fontSize: '2.5rem',
                lineHeight: '1.3',
              },
              h4: {
                color: '#111111',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: '600',
                fontSize: '2rem',
                lineHeight: '1.4',
              },
              p: {
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#111111',
              },
            },
          ],
        },
      }),
    },
  },
}

export default config
