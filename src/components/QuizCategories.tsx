import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

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
      <div className='relative w-full h-full rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105'>
        <Image
          src={imageUrl || '/placeholder.svg'}
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
        <div className='flex space-x-2'>
          <button className='swiper-button-prev bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700'>
            <svg
              className='h-4 w-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
          <button className='swiper-button-next bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700'>
            <svg
              className='h-4 w-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
        className='w-full'
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
