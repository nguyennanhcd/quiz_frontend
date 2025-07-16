import { Button } from '@/components/ui/button'
import { CalendarDays, Users, Trophy, Clock, ArrowRight } from 'lucide-react'

export default function QuizTournament() {
  return (
    <div className='min-h-screen text-white p-4 md:p-8 lg:p-12'>
      <div className='max-w-7xl'>
        <h1 className='text-3xl md:text-4xl font-bold mb-2'>
          Quiz Tournaments
        </h1>
        <p className='text-gray-400 text-lg mb-8'>
          Compete against other quiz enthusiasts and win amazing prizes
        </p>

        <div className='relative bg-gradient-to-br from-purple-800 to-indigo-950 rounded-xl p-6 md:p-10 lg:p-12 overflow-hidden shadow-lg'>
          {/* Abstract background shapes - simplified for demonstration */}
          <div className='absolute inset-0 opacity-20'>
            <div className='absolute w-64 h-64 bg-purple-700 rounded-full -top-16 -left-16 blur-3xl'></div>
            <div className='absolute w-96 h-96 bg-indigo-700 rounded-full -bottom-32 -right-32 blur-3xl'></div>
            <div className='absolute w-48 h-48 bg-purple-600 rounded-full top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 blur-3xl'></div>
          </div>

          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            {/* Left Section */}
            <div className='space-y-6'>
              <span className='inline-flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white'>
                FEATURED
              </span>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight'>
                Global Knowledge Championship
              </h2>
              <p className='text-lg text-gray-200'>
                Test your knowledge against the best quiz enthusiasts from
                around the world in this premier tournament with multiple rounds
                of challenging questions.
              </p>
              <div className='flex flex-wrap items-center gap-4 text-gray-300 text-sm'>
                <div className='flex items-center gap-2'>
                  <CalendarDays className='w-5 h-5' />
                  <span>May 15 - June 10, 2023</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Users className='w-5 h-5' />
                  <span>1,248 participants</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Trophy className='w-5 h-5' />
                  <span>$5,000 prize pool</span>
                </div>
              </div>
              <Button className='bg-white text-purple-800 hover:bg-gray-100 px-6 py-3 rounded-lg text-base font-semibold flex items-center gap-2'>
                Join Tournament
                <ArrowRight className='w-5 h-5' />
              </Button>
            </div>

            {/* Right Section */}
            <div className='bg-purple-900/50 backdrop-blur-sm rounded-lg p-6 space-y-6 lg:ml-auto lg:max-w-sm w-full'>
              <div className='flex items-center justify-between text-gray-200'>
                <span>Registration closes in</span>
                <div className='flex items-center gap-1'>
                  <Clock className='w-4 h-4' />
                  <span>3 days</span>
                </div>
              </div>
              <div className='w-full bg-purple-700 rounded-full h-2.5'>
                <div
                  className='bg-white h-2.5 rounded-full'
                  style={{ width: '70%' }}
                ></div>
              </div>
              <div className='grid grid-cols-3 gap-4'>
                <div className='bg-purple-800 rounded-lg p-4 text-center'>
                  <div className='text-3xl font-bold'>3</div>
                  <div className='text-gray-300 text-sm'>Rounds</div>
                </div>
                <div className='bg-purple-800 rounded-lg p-4 text-center'>
                  <div className='text-3xl font-bold'>15</div>
                  <div className='text-gray-300 text-sm'>Categories</div>
                </div>
                <div className='bg-purple-800 rounded-lg p-4 text-center'>
                  <div className='text-3xl font-bold'>50</div>
                  <div className='text-gray-300 text-sm'>Questions</div>
                </div>
              </div>
              <p className='text-gray-300 text-sm text-center'>
                Top 100 participants advance to the final round
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
