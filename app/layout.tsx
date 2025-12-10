import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Builder.io Test - Hello World',
  description: 'A simple landing page to test Builder.io space creation alongside Vercel deployment',
  keywords: ['builder.io', 'nextjs', 'vercel', 'test'],
  authors: [{ name: 'DARX' }],
  openGraph: {
    title: 'Builder.io Test - Hello World',
    description: 'A simple landing page to test Builder.io space creation alongside Vercel deployment',
    type: 'website',
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