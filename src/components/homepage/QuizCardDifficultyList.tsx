'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { difficultyColors } from '@/constant/difficultColor'
import { quizzesDifficulty } from '@/constant/quizDifficulty'
import { QuizCardDifficulty } from '@/components/QuizCardDifficulty'
import { useState, useRef } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

const QuizCardDifficultyList = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    'Easy' | 'Medium' | 'Hard'
  >('Easy')

  const swiperRef = useRef<SwiperType | null>(null)

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev()
  }

  const handleNextClick = () => {
    swiperRef.current?.slideNext()
  }

  return (
    <div className='mt-20'>
      <div className='mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
        <div>
          <h1 className='text-xl font-bold text-white md:text-2xl'>
            Quizzes by Difficulty
          </h1>
          <p className='text-md text-gray-400 md:text-base'>
            Choose challenges according to your skill level
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <div className='flex rounded-lg bg-[#2A2A3A] p-1'>
            {(['Easy', 'Medium', 'Hard'] as const).map((level) => (
              <Button
                key={level}
                onClick={() => setSelectedDifficulty(level)}
                className={`rounded-sm px-4 py-1 text-sm transition ${
                  selectedDifficulty === level
                    ? `${difficultyColors[level].bg} pointer-events-none`
                    : `bg-transparent ${difficultyColors[level].hover}`
                }`}
              >
                {level}
              </Button>
            ))}
          </div>
          <Button
            size='icon'
            onClick={handlePrevClick}
            className='h-8 w-8 bg-transparent text-white hover:bg-slate-700'
          >
            <ChevronLeft className='h-4 w-4' />
          </Button>
          <Button
            size='icon'
            onClick={handleNextClick}
            className='h-8 w-8 bg-transparent text-white hover:bg-slate-700'
          >
            <ChevronRight className='h-4 w-4' />
          </Button>
        </div>
      </div>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          480: {
            slidesPerView: 1.5,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 24
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 24
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 24
          }
        }}
      >
        {quizzesDifficulty
          .filter((quiz) => quiz.difficulty === selectedDifficulty)
          .map((quiz) => (
            <SwiperSlide key={quiz.id}>
              <QuizCardDifficulty {...quiz} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default QuizCardDifficultyList
