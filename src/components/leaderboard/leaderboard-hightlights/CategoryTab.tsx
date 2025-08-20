'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Target, BarChart3, Zap, Star } from 'lucide-react'
import { LeaderboardUser } from '../leaderboard-highlights'

interface GlobalTabProps {
  users: LeaderboardUser[]
  isLoading: boolean
}

export default function GlobalTab({ users, isLoading }: GlobalTabProps) {
  if (isLoading) return null

  return (
    <div className='space-y-4'>
      <div className='relative'>
        <div className='flex items-end justify-center gap-4 mb-8'>
          {/* Second Place */}
          {users[1] && (
            <div className='flex flex-col items-center'>
              <div className='relative mb-3'>
                <div className='w-20 h-20 rounded-full overflow-hidden border-4 border-slate-400'>
                  <Image
                    src={users[1].avatar || '/placeholder.svg'}
                    alt={users[1].name}
                    width={80}
                    height={80}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='absolute -top-2 -right-2 w-8 h-8 bg-slate-400 rounded-full flex items-center justify-center'>
                  <span className='font-bold text-sm text-black'>2</span>
                </div>
                {users[1].isOnline && (
                  <div className='absolute -bottom-1 -left-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900' />
                )}
              </div>
              <h3 className='text-white font-bold text-base mb-1'>
                {users[1].name}
              </h3>
              <p className='text-slate-300 text-sm mb-2'>
                {users[1].points.toLocaleString()} pts
              </p>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-slate-600 hover:bg-slate-700 text-xs'>
                  💎 Platinum
                </Badge>
                <Badge
                  variant='outline'
                  className='border-yellow-400 text-yellow-400 text-xs'
                >
                  ⭐65
                </Badge>
              </div>
              <div className='bg-slate-800/50 rounded-lg p-4 w-32 h-24'></div>
            </div>
          )}

          {/* First Place */}
          {users[0] && (
            <div className='flex flex-col items-center -mt-8'>
              <div className='relative mb-3'>
                <div className='w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400'>
                  <Image
                    src={users[0].avatar || '/placeholder.svg'}
                    alt={users[0].name}
                    width={96}
                    height={96}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center'>
                  <span className='font-bold text-sm text-black'>1</span>
                </div>
                <div className='absolute -top-6 left-1/2 transform -translate-x-1/2'>
                  <div className='text-3xl'>👑</div>
                </div>
                {users[0].isOnline && (
                  <div className='absolute -bottom-1 -left-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900' />
                )}
              </div>
              <h3 className='text-white font-bold text-lg mb-1'>
                {users[0].name}
              </h3>
              <p className='text-slate-300 text-base mb-2'>
                {users[0].points.toLocaleString()} pts
              </p>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-blue-600 hover:bg-blue-700 text-sm'>
                  💎 Diamond
                </Badge>
                <Badge
                  variant='outline'
                  className='border-yellow-400 text-yellow-400 text-sm'
                >
                  ⭐78
                </Badge>
              </div>
              <div className='bg-slate-800/50 rounded-lg p-4 w-36 h-32'></div>
            </div>
          )}

          {/* Third Place */}
          {users[2] && (
            <div className='flex flex-col items-center'>
              <div className='relative mb-3'>
                <div className='w-20 h-20 rounded-full overflow-hidden border-4 border-orange-400'>
                  <Image
                    src={users[2].avatar || '/placeholder.svg'}
                    alt={users[2].name}
                    width={80}
                    height={80}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='absolute -top-2 -right-2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center'>
                  <span className='font-bold text-sm text-black'>3</span>
                </div>
                {users[2].isOnline && (
                  <div className='absolute -bottom-1 -left-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900' />
                )}
              </div>
              <h3 className='text-white font-bold text-base mb-1'>
                {users[2].name}
              </h3>
              <p className='text-slate-300 text-sm mb-2'>
                {users[2].points.toLocaleString()} pts
              </p>
              <div className='flex items-center gap-2 mb-2'>
                <Badge className='bg-yellow-600 hover:bg-yellow-700 text-xs'>
                  🥇 Gold
                </Badge>
                <Badge
                  variant='outline'
                  className='border-yellow-400 text-yellow-400 text-xs'
                >
                  ⭐59
                </Badge>
              </div>
              <div className='bg-slate-800/50 rounded-lg p-4 w-32 h-20'></div>
            </div>
          )}
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-6'>
          <div className='bg-slate-800/50 p-3 rounded-lg text-center'>
            <div className='flex items-center justify-center mb-2'>
              <Target className='w-4 h-4 text-green-400' />
            </div>
            <p className='text-lg font-bold text-white'>{users[0]?.winRate}%</p>
            <p className='text-xs text-slate-400'>Top Win Rate</p>
          </div>
          <div className='bg-slate-800/50 p-3 rounded-lg text-center'>
            <div className='flex items-center justify-center mb-2'>
              <BarChart3 className='w-4 h-4 text-blue-400' />
            </div>
            <p className='text-lg font-bold text-white'>
              {users[0]?.quizzesCompleted}
            </p>
            <p className='text-xs text-slate-400'>Most Quizzes</p>
          </div>
          <div className='bg-slate-800/50 p-3 rounded-lg text-center'>
            <div className='flex items-center justify-center mb-2'>
              <Zap className='w-4 h-4 text-orange-400' />
            </div>
            <p className='text-lg font-bold text-white'>
              {Math.max(...users.map((u) => u.streak))}
            </p>
            <p className='text-xs text-slate-400'>Longest Streak</p>
          </div>
          <div className='bg-slate-800/50 p-3 rounded-lg text-center'>
            <div className='flex items-center justify-center mb-2'>
              <Star className='w-4 h-4 text-yellow-400' />
            </div>
            <p className='text-lg font-bold text-white'>
              {Math.max(...users.map((u) => u.stars))}
            </p>
            <p className='text-xs text-slate-400'>Top Rating</p>
          </div>
        </div>
      </div>
    </div>
  )
}
