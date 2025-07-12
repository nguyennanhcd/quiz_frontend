import React from 'react'
import { Search, MessageSquare, Bell, BookOpen, Badge } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Header = () => {
  return (
    <header className='flex items-center justify-between px-6 py-4 bg-slate-800 border-b border-slate-700'>
      <div className='flex items-center space-x-4'>
        <div className='flex items-center space-x-2'>
          <BookOpen className='h-8 w-8 text-default' />
          <span className='text-xl font-bold'>QuizHub</span>
        </div>
      </div>

      <div className='flex-1 max-w-md mx-8'>
        <div className='relative'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4' />
          <Input
            placeholder='Search quizzes, categories, creators...'
            className='pl-10 bg-main border-slate-600 placeholder-white-primary'
          />
        </div>
      </div>

      <div className='flex items-center space-x-4'>
        <div className='relative'>
          <MessageSquare className='h-6 w-6 text-slate-300 cursor-pointer hover:text-white' />
          <Badge className='absolute -top-2 -right-2 h-5 w-5 rounded-full bg-blue-500 text-xs flex items-center justify-center p-0'>
            2
          </Badge>
        </div>
        <div className='relative'>
          <Bell className='h-6 w-6 text-slate-300 cursor-pointer hover:text-white' />
          <Badge className='absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-xs flex items-center justify-center p-0'>
            3
          </Badge>
        </div>
        <div className='flex items-center space-x-2 bg-slate-700 px-3 py-1 rounded-lg'>
          <span className='text-yellow-400 font-semibold'>$124.50</span>
          <div className='w-4 h-4 bg-yellow-400 rounded-full'></div>
        </div>
        <Avatar className='h-8 w-8'>
          <AvatarImage src='/placeholder.svg?height=32&width=32' />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

export default Header
