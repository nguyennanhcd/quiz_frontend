'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CategoryCardProps {
  id: string
  name: string
  count: number
  slug: string
  imageUrl: string
}

function CategoryCard({ name, count, slug, imageUrl }: CategoryCardProps) {
  return (
    <Link
      href={`/quizzes/${slug}`}
      className='block w-full h-[180px] sm:h-[200px] overflow-hidden'
    >
      <div className='relative w-full h-full rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105'>
        <Image
          src={
            imageUrl ||
            '/placeholder.svg?height=200&width=300&query=quiz category background'
          }
          alt={`${name} Quiz Background`}
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none' />
        <div className='absolute top-3 left-3 sm:top-4 sm:left-4 bg-gray-800/70 text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-medium z-10'>
          {name}
        </div>
        <div className='absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/40 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs font-medium'>
          {count}
        </div>
      </div>
    </Link>
  )
}

export default function QuizCategories({
  categories
}: {
  categories: CategoryCardProps[]
}) {
  return (
    <div className='mb-6 sm:mb-8 px-4 sm:px-0'>
      <div className='flex items-center justify-between mb-4 sm:mb-6'>
        <h2 className='text-xl sm:text-2xl font-bold'>Quiz Categories</h2>
        <div className='flex gap-2'>
          <Button size='icon' className='quiz-swiper-button-prev h-10 w-10'>
            <ChevronLeft className='h-4 w-4' />
          </Button>
          <Button size='icon' className='quiz-swiper-button-next h-10 w-10'>
            <ChevronRight className='h-4 w-4' />
          </Button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          nextEl: '.quiz-swiper-button-next',
          prevEl: '.quiz-swiper-button-prev'
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
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
        className='w-full !overflow-visible'
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <CategoryCard
              id={category.id}
              name={category.name}
              count={category.count}
              slug={category.slug}
              imageUrl={category.imageUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
