import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Header = ({
  isCollapsed,
  setIsCollapsed
}: {
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
}) => {
  return (
    <div>
      <div className='hidden xl:flex'>
        <DesktopNav isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      <div className='xl:hidden'>
        <MobileNav />
      </div>

      <div></div>
    </div>
  )
}

export default Header
