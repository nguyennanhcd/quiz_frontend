'use client'
import { Search, MessageSquare, Bell, Banknote } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ModeToggle } from '@/components/mode-toggle'
import { SidebarTrigger } from '@/components/ui/sidebar'

export function AppHeader() {
  return (
    <header className='sticky top-0 z-50 flex h-16 shrink-0 items-center bg-slate-800 border-b border-slate-700 px-2 sm:px-4 w-full'>
      {/* Left Section: SidebarTrigger and Separator */}
      <div className='flex items-center gap-2 shrink-0 '>
        <SidebarTrigger className='dark:text-white-primary hover:bg-default-hover' />
      </div>

      {/* Gap between Left and Middle/Right sections */}
      <div className='w-4 sm:w-4' />

      {/* Middle Section: Search - Hidden on mobile, shown on desktop */}
      <div className='hidden sm:flex items-center gap-2 flex-1 min-w-0 max-w-sm sm:max-w-md lg:max-w-xl'>
        <div className='relative flex-1 min-w-0'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4' />
          <Input
            placeholder='Search quizzes, categories, creators...'
            className='pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400 w-full text-sm'
          />
        </div>
      </div>

      {/* Gap between Middle and Right sections */}
      <div className='w-4 sm:w-4 flex-1' />

      {/* Right Section: Icons */}
      <div className='flex items-center gap-2 sm:gap-2 md:gap-3 shrink-0'>
        {/* Messages - Shown on all screens */}
        <div className='relative'>
          <div className='p-1.5 sm:p-2 border border-slate-600 rounded-md hover:border-white'>
            <MessageSquare className='h-4 w-4 text-slate-300 cursor-pointer hover:text-white' />
          </div>
          <div className='absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-500 text-xs flex items-center justify-center text-white'>
            2
          </div>
        </div>

        {/* Notifications - Shown on all screens */}
        <div className='relative'>
          <div className='p-1.5 sm:p-2 border border-slate-600 rounded-md hover:border-white'>
            <Bell className='h-4 w-4 text-slate-300 cursor-pointer hover:text-white' />
          </div>
          <div className='absolute -top-1 -right-1 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-red-500 text-xs flex items-center justify-center text-white'>
            <span className='text-xs'>3</span>
          </div>
        </div>

        {/* Theme Toggle - Shown on all screens */}
        <div>
          <ModeToggle />
        </div>

        {/* Wallet - Hidden on mobile, shown on desktop */}
        <div className='hidden sm:flex items-center gap-1 p-1 sm:p-2 border border-slate-600 rounded-lg'>
          <span className='text-yellow-400 text-xs sm:text-sm font-medium'>
            $124.50
          </span>
          <Banknote className='h-3 w-3 sm:h-4 sm:w-4 text-yellow-400' />
        </div>

        {/* Avatar - Shown on all screens */}
        <Avatar className='h-7 w-7 sm:h-8 sm:w-8 shrink-0'>
          <AvatarImage src='/avatarPlaceholder.webp' />
          <AvatarFallback className='bg-slate-600 text-white text-xs'>
            JD
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
