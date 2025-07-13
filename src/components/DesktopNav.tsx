import {
  Search,
  MessageSquare,
  Bell,
  BookOpen,
  ArrowLeftToLine,
  ArrowRightToLine
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ModeToggle } from './modeToggle'

const DesktopNav = ({
  isCollapsed,
  setIsCollapsed
}: {
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
}) => {
  return (
    <header className='fixed left-0 w-full z-20 bg-slate-800 border-b border-slate-700 px-6 py-4'>
      <div className='flex justify-between items-center w-full'>
        {/* Logo */}
        <div className='flex items-center space-x-2 '>
          <div className='flex items-center space-x-2'>
            <BookOpen className='h-8 w-8 text-default' />
            <span className='text-xl font-bold'>QuizHub</span>
          </div>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`${
              isCollapsed
                ? 'transform translate-x-15'
                : 'transform translate-x-30'
            } text-white hover:text-primary transition cursor-pointer p-2 hover:bg-slate-600 rounded-md`}
          >
            {isCollapsed ? (
              <ArrowRightToLine size={20} />
            ) : (
              <ArrowLeftToLine size={20} />
            )}
          </button>
        </div>

        {/* Center: Toggle + Search */}
        <div className='flex items-center gap-6 flex-1 max-w-xl mx-8'>
          <div className='relative flex-1'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4' />
            <Input
              placeholder='Search quizzes, categories, creators...'
              className='pl-10 bg-main border border-slate-600 placeholder-white-primary w-full'
            />
          </div>
        </div>

        {/* Right: Icons + Avatar */}
        <div className='flex items-center gap-6'>
          {/* Messages */}
          <div className='relative'>
            <div className='p-2 border border-slate-600 rounded-md hover:border-white'>
              <MessageSquare className='h-4 w-4 text-slate-300 cursor-pointer hover:text-white' />
            </div>
            <div className='absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-500 text-xs flex items-center justify-center'>
              2
            </div>
          </div>

          {/* Notifications */}
          <div className='relative'>
            <div className='p-2 border border-slate-600 rounded-md hover:border-white'>
              <Bell className='h-4 w-4 text-slate-300 cursor-pointer hover:text-white' />
            </div>
            <div className='absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs flex items-center justify-center'>
              3
            </div>
          </div>

          {/* Theme Toggle */}
          <ModeToggle />

          {/* Wallet */}
          <div className='flex items-center gap-2 p-2 border border-slate-600 rounded-lg'>
            <span className='text-yellow-400 font-semibold'>$124.50</span>
            <div className='w-4 h-4 bg-yellow-400 rounded-full' />
          </div>

          {/* Avatar */}
          <Avatar className='h-8 w-8'>
            <AvatarImage src='/placeholder.svg?height=32&width=32' />
            <AvatarFallback className='text-default'>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

export default DesktopNav
