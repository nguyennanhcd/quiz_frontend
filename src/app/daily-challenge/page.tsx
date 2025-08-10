import InfoCard from '@/components/daily-challenge/InfoCard'
import MainContent from '@/components/daily-challenge/MainContent'

export default function DailyChallenge() {
  return (
    <div className='min-h-screen p-4 md:p-6'>
      {/* Header */}
      <header className=' space-y-2'>
        <h1 className='text-3xl md:text-4xl font-bold'>Daily Challenge</h1>
        <p>Test your knowledge and compete with others!</p>
      </header>

      {/* Info Cards */}
      <InfoCard />

      {/* Main Content */}
      <MainContent />
    </div>
  )
}
