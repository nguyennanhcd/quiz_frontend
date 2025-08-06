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
      className='block w-[300px] h-[200px] overflow-hidden'
    >
      <div className='relative w-full h-full rounded-xl overflow-hidden shadow-lg transition-transform duration-300'>
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
        <div className='absolute top-4 left-4 bg-gray-800/70 text-white px-3 py-1 rounded-full text-sm font-medium z-10'>
          {name}
        </div>
        <div className='absolute top-4 right-4 bg-white/40 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs font-medium'>
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
    <div className='mb-6 sm:mb-8'>
      <div className='flex items-center justify-between mb-4 sm:mb-6'>
        <h2 className='text-xl sm:text-2xl font-bold'>Quiz Categories</h2>
        <div className='flex gap-2'>
          <Button
            variant='outline'
            size='icon'
            className='quiz-swiper-button-prev h-10 w-10'
          >
            <ChevronLeft className='h-4 w-4' />
          </Button>
          <Button
            variant='outline'
            size='icon'
            className='quiz-swiper-button-next h-10 w-10'
          >
            <ChevronRight className='h-4 w-4' />
          </Button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
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
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
        className='mx-auto w-full'
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
