import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Alexandre Ginisty | Développeur Full-Stack',
  description: 'Portfolio d\'Alexandre Ginisty - Développeur Full-Stack spécialisé dans la création de solutions digitales innovantes avec les dernières technologies.',
  keywords: 'Alexandre Ginisty, développeur, full-stack, React, Node.js, TypeScript, Three.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-dark text-light`}>
        {children}
      </body>
    </html>
  )
}
