// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      screens: { '2xl': '1600px' }, // Shopify page_width = 1600
      padding: { DEFAULT: '1rem', lg: '2rem' },
    },
    extend: {
      fontFamily: {
        heading: ['"Baskerville No 2"', 'Baskerville', '"Times New Roman"', 'serif'], // Shopify headings (italic)
        body: ['var(--font-body)', 'system-ui', 'sans-serif'], // Montserrat body
        serif: ['Georgia', '"Times New Roman"', 'Times', 'serif'], // For the rotating text
      },
      colors: {
        // From your Shopify color_schemes
        brand:   { surface: '#e5e6d6', text: '#37241e', primary: '#000000', onPrimary: '#ffffff' }, // scheme-1
        brand2:  { surface: '#ffffff', text: '#121212', primary: '#121212', onPrimary: '#f3f3f3' }, // scheme-2
        brand3:  { surface: '#7e5039', text: '#ffffff', primary: '#ffffff', onPrimary: '#000000' }, // sold out
        brand4:  { surface: '#bc9256', text: '#ffffff', primary: '#ffffff', onPrimary: '#121212' }, // sale
        
        // Custom brand colors for Jay Bharat theme
        'brand-brown': '#7a4a34',
        'brand-brown-900': '#5c3526',
        'brand-gold': '#d2a44d',
        'brand-cream': '#e7e6d7',
        'brand-teal': '#13483f',
        'brand-teal-light': '#9fd6d3',
      },
      borderRadius: { none: '0px', card: '30px' }, // buttons 0, cards 30
      boxShadow: { none: '0 0 #0000' },            // shadows off by default
      spacing: { grid: '8px' },                    // 8px rhythm
    },
  },
  plugins: [],
}

export default config