'use client'

import { ChevronLeft, ChevronRight, Swords } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { PlayerCard } from '../PlayerCard'
import { Players } from '@/constant/playersRank'

const PlayerRanking = () => {
  return (
    <div className='xl:py-10 bg-main p-6 text-white rounded-sm'>
      <div className='mb-10 flex items-center justify-between'>
        <h2 className='flex items-center gap-2 text-2xl font-bold'>
          <Swords className='h-6 w-6' />
          Top Players
        </h2>
        <div className='flex gap-2'>
          <Button
            size='icon'
            className='bg-default text-white hover:bg-default-hover player-swiper-button-prev'
          >
            <ChevronLeft className='h-5 w-5' />
          </Button>
          <Button
            size='icon'
            className='bg-default text-white hover:bg-default-hover player-swiper-button-next'
          >
            <ChevronRight className='h-5 w-5' />
          </Button>
        </div>
      </div>

      <div className='xl:w-[100%] container'>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          pagination={{ clickable: true }}
          modules={[Navigation]}
        >
          {Players.map((player, index) => (
            <SwiperSlide key={index} className='w-full'>
              <PlayerCard {...player} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='mt-8 flex justify-center'>
        <Button className='rounded-md bg-default hover:bg-default-hover'>
          View Full Leaderboard
        </Button>
      </div>
    </div>
  )
}

export default PlayerRanking
