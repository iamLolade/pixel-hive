import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pixel Hive',
  description: 'Image gallery web application by Ololade Otemade',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
