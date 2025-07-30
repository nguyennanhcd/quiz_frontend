import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import LayoutClientWrapper from '@/components/LayoutClientWrapper'
import { ToastContainer } from 'react-toastify'

const inter = Inter({
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
        className={`${inter.className} antialiased bg-slate-900 text-white`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <LayoutClientWrapper>
            {children}{' '}
            <ToastContainer
              position='top-right'
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='dark'
            />
          </LayoutClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
