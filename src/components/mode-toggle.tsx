'use client'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      size='icon'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='h-8 w-8 text-foreground hover:bg-main-hover border-gray-300 dark:border-slate-700 transition-colors bg-transparent border'
    >
      <Sun className='h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground ' />
      <Moon className='absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
