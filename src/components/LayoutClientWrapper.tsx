'use client'

import { useState } from 'react'
import SideBar from './SideBar'
import Header from './Header'

export default function LayoutClientWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className='flex min-h-[calc(100vh-4rem)]'>
      <Header isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <SideBar isCollapsed={isCollapsed} />

      <main
        className={`transition-all mt-20 duration-300 p-4 ${
          isCollapsed
            ? 'ml-16 w-[calc(100%-4rem)]'
            : 'ml-64 w-[calc(100%-16rem)]'
        }`}
      >
        {children}
      </main>
    </div>
  )
}
