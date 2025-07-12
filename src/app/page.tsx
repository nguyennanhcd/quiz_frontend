import Header from '@/components/Header'
import PageContent from '@/components/HomeContent'
import SideBar from '@/components/SideBar'

export default function QuizHubDashboard() {
  return (
    <div className='min-h-screen bg-slate-900 text-white'>
      {/* Top Navigation */}
      <Header />

      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <PageContent />
    </div>
  )
}
