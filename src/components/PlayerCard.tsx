import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CardContent } from '@/components/ui/card'
import { Users } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface PlayerCardProps {
  name: string
  country: string
  flag: string
  rank: number
  wins: number
  earned: number
  followers: string
  following: string
  level: 'Advanced' | 'Grandmaster' | 'Master'
  avatarUrl: string
  bgImageUrl: string
}

export function PlayerCard({
  name,
  country,
  flag,
  rank,
  wins,
  earned,
  followers,
  following,
  level,
  avatarUrl,
  bgImageUrl
}: PlayerCardProps) {
  const levelColorClass = {
    Advanced: 'bg-pink-500',
    Grandmaster: 'bg-purple-500',
    Master: 'bg-red-500'
  }

  return (
    <div className='relative w-[280px] xl:w-[350px] flex-shrink-0 overflow-hidden rounded-lg bg-transparent border text-white shadow-lg'>
      <div className='relative h-32 w-full'>
        <Image
          src={
            bgImageUrl ||
            '/placeholder.svg?height=200&width=400&query=abstract colorful background'
          }
          alt='Abstract background'
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 33vw'
        />
        <div
          className={cn(
            'absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold',
            levelColorClass[level]
          )}
        >
          {level}
        </div>
      </div>
      <div className='relative -mt-12 flex flex-col items-center px-4 pb-4'>
        <Avatar className='h-24 w-24 border-4 border-[#2a2a4a] bg-gray-700'>
          <AvatarImage
            src={
              avatarUrl ||
              '/placeholder.svg?height=100&width=100&query=person avatar'
            }
            alt={name}
          />
          <AvatarFallback>
            {name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
        <h3 className='mt-2 text-lg font-semibold'>{name}</h3>
        <p className='text-sm text-gray-400'>
          {flag} {country}
        </p>
        <CardContent className='mt-4 grid w-full grid-cols-3 gap-2 p-0 text-center'>
          <div className='flex flex-col items-center'>
            <span className='text-lg font-bold'>{rank}</span>
            <span className='text-xs text-gray-400'>Rank</span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-lg font-bold'>{wins}</span>
            <span className='text-xs text-gray-400'>Wins</span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-lg font-bold text-green-400'>
              $
              {earned.toLocaleString(undefined, {
                minimumFractionDigits: 1,
                maximumFractionDigits: 2
              })}
            </span>
            <span className='text-xs text-gray-400'>Earned</span>
          </div>
        </CardContent>
        <div className='mt-4 flex w-full justify-around gap-2'>
          <div className='flex flex-1 flex-col items-center rounded-md bg-main p-2'>
            <Users className='h-4 w-4 text-gray-400' />
            <span className='mt-1 text-base font-semibold'>{followers}</span>
            <span className='text-xs text-gray-400'>Followers</span>
          </div>
          <div className='flex flex-1 flex-col items-center rounded-md bg-main p-2'>
            <Users className='h-4 w-4 text-gray-400' />
            <span className='mt-1 text-base font-semibold'>{following}</span>
            <span className='text-xs text-gray-400'>Following</span>
          </div>
        </div>
      </div>
    </div>
  )
}
