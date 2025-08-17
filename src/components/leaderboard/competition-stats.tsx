import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Medal, Users, Trophy } from 'lucide-react'

export function CompetitionStats() {
  return (
    <Card className='bg-transparent col-span-1 py-4 sm:py-6'>
      <CardHeader>
        <CardTitle className='text-white text-lg sm:text-xl font-bold'>
          Competition Stats
        </CardTitle>
        <CardDescription className='text-slate-400 text-sm sm:text-base'>
          Current season statistics and your ranking
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-4 sm:space-y-6'>
        {/* Active Participants */}
        <div className='flex items-center justify-between text-sm sm:text-base'>
          <span className='text-slate-400'>Active Participants</span>
          <span className='text-white font-bold'>1,248</span>
        </div>

        {/* Top Badge */}
        <div className='flex items-center justify-between text-sm sm:text-base'>
          <span className='text-slate-400'>Top Badge</span>
          <div className='flex items-center gap-2'>
            <Medal size={14} className='text-yellow-400 sm:w-5 sm:h-5' />
            <span className='text-white font-medium'>Diamond (5 users)</span>
          </div>
        </div>

        <div className='space-y-3 sm:space-y-4'>
          {/* Your Rank */}
          <div className='flex items-center bg-slate-800/50 flex-col w-full p-3 sm:p-4 rounded-xl gap-1 sm:gap-2'>
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center gap-1 sm:gap-2'>
                <Users className='w-4 h-4 sm:w-5 sm:h-5 text-slate-400' />
                <span className='text-slate-400 text-xs sm:text-sm'>
                  Your Rank
                </span>
              </div>
              <Badge className='bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm'>
                #42
              </Badge>
            </div>

            {/* Progress Info */}
            <div className='flex flex-row justify-between text-xs sm:text-sm text-slate-400 w-full'>
              <span>Next Level</span>
              <span className='text-white'>3,250 / 4,000 points</span>
            </div>

            {/* Progress Bar */}
            <div className='w-full bg-slate-700 rounded-full h-1.5 sm:h-2'>
              <div
                className='bg-white h-1.5 sm:h-2 rounded-full'
                style={{ width: '81.25%' }}
              />
            </div>

            {/* Next Level Info */}
            <div className='flex items-center justify-between w-full text-xs sm:text-sm'>
              <div className='flex items-center gap-1 sm:gap-2 text-slate-400'>
                <Trophy className='w-3 h-3 sm:w-4 sm:h-4' />
                <span>Silver</span>
              </div>
              <span className='text-white'>750 points to Gold</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
