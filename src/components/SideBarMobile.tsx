'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { LogOut, Menu } from 'lucide-react'
import { sidebarItems } from '@/constant/sideBarItems'

const SideBarMobile = () => {
  return (
    <Sheet>
      {/* Toggle Button */}
      <SheetTrigger asChild>
        <button
          className='fixed top-4 left-4 z-50 p-2 bg-main border border-slate-700 rounded-md text-white-primary hover:bg-slate-700 transition xl:hidden'
          aria-label='Toggle sidebar'
        >
          <Menu className='h-5 w-5' />
        </button>
      </SheetTrigger>

      {/* Sheet Sidebar */}
      <SheetContent
        side='left'
        className='p-0 w-64 bg-main text-white border-slate-700'
      >
        <div className='flex flex-col h-full justify-between'>
          <div className='flex-1 overflow-auto'>
            <nav className='mt-10 px-4 space-y-3'>
              {sidebarItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                    item.active
                      ? 'bg-default text-primary'
                      : 'text-white-primary hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <item.icon className='h-5 w-5' />
                  <span className='ml-3 text-sm font-medium'>{item.label}</span>
                </div>
              ))}
            </nav>
          </div>

          <div className='p-4 border-t border-slate-700'>
            <div className='flex items-center px-3 py-2 rounded-lg cursor-pointer text-slate-300 hover:bg-slate-700 hover:text-white transition-colors'>
              <LogOut className='h-5 w-5' />
              <span className='ml-3 text-sm font-medium'>Logout</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SideBarMobile
