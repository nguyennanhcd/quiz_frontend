'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, TrendingDown, Minus, Users, Zap } from 'lucide-react'
import { LeaderboardUser } from '../leaderboard-highlights'

interface TrendingTabProps {
  users: LeaderboardUser[]
  isLoading: boolean
}

export default function TrendingTab({ users, isLoading }: TrendingTabProps) {
  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className='w-3 h-3 text-green-400' />
    if (change < 0) return <TrendingDown className='w-3 h-3 text-red-400' />
    return <Minus className='w-3 h-3 text-slate-400' />
  }

  const getChangeText = (change: number) => {
    if (change > 0) return `+${change}`
    if (change < 0) return `${change}`
    return '0'
  }

  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-400'
    if (change < 0) return 'text-red-400'
    return 'text-slate-400'
  }

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'Diamond':
        return '💎'
      case 'Platinum':
        return '🥇'
      case 'Gold':
        return '🥈'
      case 'Silver':
        return '🥉'
      case 'Bronze':
        return '🏅'
      default:
        return '⭐'
    }
  }

  if (isLoading) return null

  return (
    <div className='space-y-4'>
      <div className='flex items-center gap-2 mb-4'>
        <TrendingUp className='w-5 h-5 text-green-400' />
        <h3 className='text-white font-semibold'>Trending This Week</h3>
      </div>
      <div className='space-y-3'>
        {users.map((user) => (
          <div
            key={user.id}
            className='flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors'
          >
            <div className='relative'>
              <div className='w-12 h-12 rounded-full overflow-hidden'>
                <Image
                  src={user.avatar || '/placeholder.svg'}
                  alt={user.name}
                  width={48}
                  height={48}
                  className='w-full h-full object-cover'
                />
              </div>
              {user.isOnline && (
                <div className='absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-slate-900' />
              )}
            </div>
            <div className='flex-1'>
              <div className='flex items-center gap-2'>
                <h4 className='text-white font-semibold'>{user.name}</h4>
                <Badge className={`${user.badgeColor} text-xs`}>
                  {getBadgeIcon(user.badge)} {user.badge}
                </Badge>
              </div>
              <p className='text-slate-400 text-sm'>{user.username}</p>
              <div className='flex items-center gap-2 mt-1 text-xs text-slate-400'>
                <span>{user.quizzesCompleted} quizzes</span>
                <span>•</span>
                <span>{user.winRate}% win rate</span>
              </div>
            </div>
            <div className='text-right'>
              <p className='text-white font-semibold'>
                {user.points.toLocaleString()} pts
              </p>
              <div className='flex items-center gap-1 text-xs'>
                {getChangeIcon(user.change)}
                <span className={getChangeColor(user.change)}>
                  {getChangeText(user.change)} this week
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-6'>
        <div className='bg-slate-800/50 p-3 rounded-lg text-center'>
          <div className='flex items-center justify-center mb-2'>
            <TrendingUp className='w-4 h-4 text-green-400' />
          </div>
          <p className='text-lg font-bold text-white'>+12</p>
          <p className='text-xs text-slate-400'>Biggest Gain</p>
        </div>
        <div className='bg-slate-800/50 p-3 rounded-lg text-center'>
          <div className='flex items-center justify-center mb-2'>
            <Users className='w-4 h-4 text-blue-400' />
          </div>
          <p className='text-lg font-bold text-white'>156</p>
          <p className='text-xs text-slate-400'>New Users</p>
        </div>
        <div className='bg-slate-800/50 p-3 rounded-lg text-center'>
          <div className='flex items-center justify-center mb-2'>
            <Zap className='w-4 h-4 text-orange-400' />
          </div>
          <p className='text-lg font-bold text-white'>89</p>
          <p className='text-xs text-slate-400'>Active Streaks</p>
        </div>
      </div>
    </div>
  )
}
