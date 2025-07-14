import { MessageSquare, Bell } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ModeToggle } from './modeToggle'

const MobileNav = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-20 bg-slate-800 border-b border-slate-700 px-4 py-3'>
      <div className='flex items-center justify-end w-full'>
        {/* Right: Icons + Avatar */}
        <div className='flex items-center gap-3'>
          {/* Messages */}
          <div className='relative'>
            <div className='p-2 hover:bg-slate-600 rounded-md'>
              <MessageSquare className='h-5 w-5 text-slate-300 cursor-pointer hover:text-white' />
              <div className='absolute -top-1 -right-1 h-3 w-3 rounded-full bg-blue-500 text-[10px] flex items-center justify-center text-white'>
                2
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className='relative'>
            <div className='p-2 hover:bg-slate-600 rounded-md'>
              <Bell className='h-5 w-5 text-slate-300 cursor-pointer hover:text-white' />
              <div className='absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 text-[10px] flex items-center justify-center text-white'>
                3
              </div>
            </div>
          </div>

          {/* Theme Toggle */}
          <ModeToggle />

          {/* Avatar */}
          <Avatar className='h-7 w-7'>
            <AvatarImage src='/placeholder.svg?height=28&width=28' />
            <AvatarFallback className='text-default text-sm'>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

export default MobileNav
