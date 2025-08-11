'use client'
import { Search, MessageSquare, Bell, Banknote } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ModeToggle } from '@/components/mode-toggle'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'

export function AppHeader() {
  return (
    <header className='flex h-16 shrink-0 items-center gap-2 bg-slate-800 border-b border-slate-700 px-4'>
      <SidebarTrigger className='text-white hover:bg-slate-700' />
      <Separator orientation='vertical' className='mr-2 h-4 bg-slate-600' />

      {/* Search */}
      <div className='flex items-center gap-6 flex-1 max-w-xl'>
        <div className='relative flex-1'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4' />
          <Input
            placeholder='Search quizzes, categories, creators...'
            className='pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400'
          />
        </div>
      </div>

      {/* Right side icons */}
      <div className='flex items-center gap-4 ml-auto'>
        {/* Messages */}
        <div className='relative'>
          <div className='p-2 border border-slate-600 rounded-md hover:border-white'>
            <MessageSquare className='h-4 w-4 text-slate-300 cursor-pointer hover:text-white' />
          </div>
          <div className='absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-500 text-xs flex items-center justify-center text-white'>
            2
          </div>
        </div>

        {/* Notifications */}
        <div className='relative'>
          <div className='p-2 border border-slate-600 rounded-md hover:border-white'>
            <Bell className='h-4 w-4 text-slate-300 cursor-pointer hover:text-white' />
          </div>
          <div className='absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs flex items-center justify-center text-white'>
            3
          </div>
        </div>

        {/* Theme Toggle */}
        <ModeToggle />

        {/* Wallet */}
        <div className='flex items-center gap-2 p-2 border border-slate-600 rounded-lg'>
          <span className='text-yellow-400 text-sm'>$124.50</span>
          <Banknote className='h-5 w-5 text-yellow-400' />
        </div>

        {/* Avatar */}
        <Avatar className='h-8 w-8'>
          <AvatarImage src='/avatarPlaceholder.webp' />
          <AvatarFallback className='bg-slate-600 text-white'>
            JD
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
