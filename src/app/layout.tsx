import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'
import LayoutClientWrapper from '@/components/LayoutClientWrapper'

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetBrains-mono',
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
      <body
        className={`${jetbrainsMono.variable} antialiased bg-slate-900 text-white`}
      >
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
