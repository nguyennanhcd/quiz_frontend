'use client'
import { ChevronLeft, ChevronRight, Swords } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { playersRank } from '@/constant/playersRank'
import { PlayerCard } from '@/components/PlayerCard'

const PlayerRanking = () => {
  return (
    <div className=' xl:py-10 bg-main p-6 text-white rounded-sm'>
      <div className='mb-10 flex items-center justify-between'>
        <h2 className='flex items-center gap-2 text-2xl font-bold'>
          <Swords className='h-6 w-6' />
          Top Players
        </h2>
        <div className='flex gap-2'>
          <Button
            size='icon'
            className=' bg-default text-white hover:bg-default-hover'
          >
            <ChevronLeft className='h-5 w-5' />
          </Button>
          <Button
            size='icon'
            className='bg-default text-white hover:bg-default-hover'
          >
            <ChevronRight className='h-5 w-5' />
          </Button>
        </div>
      </div>

      <ScrollArea className='w-full whitespace-nowrap pb-4 mt-5'>
        <div className='flex space-x-6'>
          {playersRank.map((player, index) => (
            <PlayerCard key={index} {...player} />
          ))}
        </div>
        <ScrollBar orientation='horizontal' className='mt-4' />
      </ScrollArea>

      <div className='mt-8 flex justify-center'>
        <Button className='rounded-md bg-default hover:bg-default-hover'>
          View Full Leaderboard
        </Button>
      </div>
    </div>
  )
}

export default PlayerRanking
