import Header from '@/components/Header'
import SideBar from '@/components/SideBar'

export default function QuizHubDashboard() {
  return (
    <div className='min-h-screen bg-slate-900 text-white'>
      {/* Top Navigation */}
      <Header />

      {/* Sidebar */}
      <SideBar />
    </div>
  )
}
