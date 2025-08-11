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

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 2.5
          },
          1024: {
            slidesPerView: 3
          },
          1280: {
            slidesPerView: 4
          }
        }}
        className='w-full pb-4 mt-5'
        navigation={{
          nextEl: '.player-swiper-button-next',
          prevEl: '.player-swiper-button-prev'
        }}
      >
        {Players.map((player, index) => (
          <SwiperSlide key={index}>
            <PlayerCard {...player} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='mt-8 flex justify-center'>
        <Button className='rounded-md bg-default hover:bg-default-hover'>
          View Full Leaderboard
        </Button>
      </div>
    </div>
  )
}

export default PlayerRanking
