import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { AppSidebar } from '@/components/app-sidebar'
import { AppHeader } from '@/components/app-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { ToastContainer } from 'react-toastify'
import './globals.css'

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
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <AppHeader />
              <div className='flex flex-1 flex-col gap-4 p-4'>{children}</div>
            </SidebarInset>
          </SidebarProvider>
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
        </ThemeProvider>
      </body>
    </html>
  )
}
