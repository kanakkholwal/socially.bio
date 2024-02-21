import type { Metadata } from 'next';
import ClientProvider from './client-provider'
import { DM_Sans } from 'next/font/google';
import './globals.css';
const dm_sans = DM_Sans({ subsets: ['latin'], preload: true })

export const metadata: Metadata = {
  title: 'Socially Bio',
  description: "Socially Bio - The only link you'll ever need.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  )
}
