import React from 'react'
import { LogOut } from 'lucide-react'
import { sidebarItems } from '@/constant/sideBarItems'

const SideBar = () => {
  return (
    <aside className='w-64 bg-main min-h-screen border-r border-slate-700 flex flex-col gap-50'>
      <nav className='p-4 space-y-2'>
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
              item.active
                ? 'bg-default text-primary'
                : 'text-white-primary hover:bg-slate-700 hover:text-white'
            }`}
          >
            <item.icon className='h-5 w-5' />
            <span className='text-sm font-medium'>{item.label}</span>
          </div>
        ))}
      </nav>

      <div className='p-4 space-y-2'>
        <div className='flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer text-slate-300 hover:bg-slate-700 hover:text-white transition-colors'>
          <LogOut className='h-5 w-5' />
          <span className='text-sm font-medium'>Logout</span>
        </div>
      </div>
    </aside>
  )
}

export default SideBar
