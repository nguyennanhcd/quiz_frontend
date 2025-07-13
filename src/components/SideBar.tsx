'use client'
import SideBarDesktop from './SideBarDesktop'
import SideBarMobile from './SideBarMobile'

interface SideBarProps {
  isCollapsed: boolean
}

const SideBar = ({ isCollapsed }: SideBarProps) => {
  return (
    <div>
      <div className='hidden xl:block'>
        <SideBarDesktop isCollapsed={isCollapsed} />
      </div>
      <div className='xl:hidden'>
        <SideBarMobile />
      </div>
    </div>
  )
}

export default SideBar
