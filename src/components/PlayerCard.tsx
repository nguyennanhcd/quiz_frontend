import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CardContent } from '@/components/ui/card'
import { Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Player } from '@/constant/playersRank'

export function PlayerCard({
  name,
  country,
  flag,
  rank,
  wins,
  earned,
  followers,
  following,
  levelString,
  avatarUrl,
  bgImageUrl
}: Player) {
  // Map levelString to color classes (use levelString instead of level for consistency)
  const levelColorClass: Record<string, string> = {
    Advanced: 'bg-pink-500',
    Grandmaster: 'bg-purple-500',
    Master: 'bg-red-500',
    // Fallback for undefined or other level strings
    default: 'bg-gray-500'
  }

  return (
    <div className='relative overflow-hidden rounded-lg bg-slate-900 border text-white shadow-lg h-full'>
      <div className='relative h-32 w-full'>
        <Image
          src={bgImageUrl || '/placeholder.svg'}
          alt='Abstract background'
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 33vw'
        />
        {levelString && (
          <div
            className={cn(
              'absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold',
              levelColorClass[levelString] || levelColorClass.default
            )}
          >
            {levelString}
          </div>
        )}
      </div>

      <div className='relative -mt-12 flex flex-col items-center px-4 pb-4'>
        <Avatar className='h-24 w-24 border-4 border-[#2a2a4a] bg-gray-700'>
          <AvatarImage src={avatarUrl || '/placeholder.svg'} alt={name} />
          <AvatarFallback>
            {name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>

        <h3 className='mt-2 text-lg font-semibold'>{name}</h3>
        <p className='text-sm text-gray-400'>
          {flag && <span>{flag} </span>}
          {country}
        </p>

        <CardContent className='mt-4 grid w-full grid-cols-3 gap-2 p-0 text-center'>
          <div className='flex flex-col items-center'>
            <span className='text-lg font-bold'>{rank}</span>
            <span className='text-xs text-gray-400'>Rank</span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-lg font-bold'>{wins ?? 'N/A'}</span>
            <span className='text-xs text-gray-400'>Wins</span>
          </div>
          <div className='flex flex-col items-center'>
            <span className='text-lg font-bold text-green-400'>
              {earned !== undefined
                ? `$${earned.toLocaleString(undefined, {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 2
                  })}`
                : 'N/A'}
            </span>
            <span className='text-xs text-gray-400'>Earned</span>
          </div>
        </CardContent>

        <div className='mt-4 flex w-full justify-around gap-2'>
          <div className='flex flex-1 flex-col items-center rounded-md bg-main p-2'>
            <Users className='h-4 w-4 text-gray-400' />
            <span className='mt-1 text-base font-semibold'>
              {followers ?? 'N/A'}
            </span>
            <span className='text-xs text-gray-400'>Followers</span>
          </div>
          <div className='flex flex-1 flex-col items-center rounded-md bg-main p-2'>
            <Users className='h-4 w-4 text-gray-400' />
            <span className='mt-1 text-base font-semibold'>
              {following ?? 'N/A'}
            </span>
            <span className='text-xs text-gray-400'>Following</span>
          </div>
        </div>
      </div>
    </div>
  )
}
