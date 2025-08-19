import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jay Bharat - Authentic Indian Sweets & Snacks',
  description: 'Serving authentic Indian sweets & snacks since 1985. Fresh daily, nationwide shipping, 100% vegetarian.',
}

export default async function RootLayout({ 
  children, 
  params 
}: { 
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <>
      <a className="skip-to-content-link button visually-hidden" href="#MainContent">
        Skip to content
      </a>
      
      {children}

      {/* JavaScript files are loaded in the root layout to avoid duplicates */}
    </>
  )
}