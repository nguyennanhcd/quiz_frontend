import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'
import LayoutClientWrapper from '@/components/LayoutClientWrapper'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Quiz Hub',
  description: 'Quiz Hub Dashboard'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-slate-900 text-white`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <LayoutClientWrapper>{children}</LayoutClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
