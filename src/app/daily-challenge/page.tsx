import InfoCard from '@/components/daily-challenge/InfoCard'
import MainContent from '@/components/daily-challenge/MainContent'

export default function DailyChallenge() {
  return (
    <div className='min-h-screen text-white p-4 md:p-8 lg:p-12'>
      {/* Header */}
      <header className=' space-y-2'>
        <h1 className='text-2xl text-foreground md:text-3xl font-bold'>
          Daily Challenge
        </h1>
        <p className='text-foreground/80'>
          Test your knowledge and compete with others!
        </p>
      </header>

      {/* Info Cards */}
      <InfoCard />

      {/* Main Content */}
      <MainContent />
    </div>
  )
}
