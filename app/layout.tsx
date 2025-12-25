import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Free eSIM Internet Finder',
  description: 'Find eSIM providers with free lifetime internet subscriptions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}
