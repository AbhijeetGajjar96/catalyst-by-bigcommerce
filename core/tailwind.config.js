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
      },
      colors: {
        // From your Shopify color_schemes
        brand:   { surface: '#e5e6d6', text: '#37241e', primary: '#000000', onPrimary: '#ffffff' }, // scheme-1
        brand2:  { surface: '#ffffff', text: '#121212', primary: '#121212', onPrimary: '#f3f3f3' }, // scheme-2
        brand3:  { surface: '#7e5039', text: '#ffffff', primary: '#ffffff', onPrimary: '#000000' }, // sold out
        brand4:  { surface: '#bc9256', text: '#ffffff', primary: '#ffffff', onPrimary: '#121212' }, // sale
      },
      borderRadius: { none: '0px', card: '30px' }, // buttons 0, cards 30
      boxShadow: { none: '0 0 #0000' },            // shadows off by default
      spacing: { grid: '8px' },                    // 8px rhythm
    },
  },
  plugins: [],
}

export default config