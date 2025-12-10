import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hello World - Builder.io Test',
  description: 'A simple landing page displaying Hello World with Builder.io integration',
  keywords: ['Next.js', 'Builder.io', 'Landing Page', 'Hello World'],
  authors: [{ name: 'DARX AI' }],
  openGraph: {
    title: 'Hello World - Builder.io Test',
    description: 'A simple landing page displaying Hello World with Builder.io integration',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hello World - Builder.io Test',
    description: 'A simple landing page displaying Hello World with Builder.io integration',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}