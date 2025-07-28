'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { testimonials } from '@/constant/testimonial'

export default function SuccessStoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentTestimonial = testimonials[currentIndex]

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Optional: Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section className='w-full py-12 mt-10 rounded-xl text-white bg-main'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4'>
              Success Stories
            </h2>
            <p className='text-slate-600 text-lg dark:text-slate-400 max-w-2xl mx-auto'>
              Hear from our community of quiz creators and players who are
              earning rewards and building their audience
            </p>
          </div>
        </div>
        <div className='relative mt-12 flex items-center justify-center'>
          <Button
            size='icon'
            className='absolute left-0 z-10 rounded-full bg-default hover:bg-default-hover text-white'
            onClick={goToPrevious}
            aria-label='Previous testimonial'
          >
            <ChevronLeft className='h-6 w-6' />
          </Button>
          <div className='relative w-full max-w-4xl rounded-xl p-6 md:p-12'>
            <div className='flex flex-col items-center md:flex-row md:items-start md:space-x-8'>
              <div className='relative mb-6 md:mb-0'>
                <Image
                  src={currentTestimonial.avatar || '/placeholder.svg'}
                  alt={currentTestimonial.name}
                  width={120}
                  height={120}
                  className='rounded-full object-cover border-4 border-[#4a4a6a]'
                />
              </div>
              <div className='flex-1 text-center md:text-left'>
                <div className='flex justify-center md:justify-start mb-2'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < currentTestimonial.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-500'
                      }`}
                    />
                  ))}
                </div>
                <p className='text-lg italic text-gray-200 mb-4'>
                  {currentTestimonial.quote}
                </p>
                <h3 className='text-xl font-semibold text-white'>
                  {currentTestimonial.name}
                </h3>
                <p className='text-gray-400'>{currentTestimonial.role}</p>
                <div className='mt-6 flex justify-center md:justify-start space-x-8'>
                  <div className='text-center'>
                    <div className='text-2xl font-bold text-default '>
                      {currentTestimonial.earnings}
                    </div>
                    <div className='text-gray-400 text-sm'>Earnings</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-2xl font-bold text-default '>
                      {currentTestimonial.quizzes}
                    </div>
                    <div className='text-gray-400 text-sm'>Quizzes</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-2xl font-bold text-default '>
                      {currentTestimonial.followers}
                    </div>
                    <div className='text-gray-400 text-sm'>Followers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            size='icon'
            className='absolute right-0 z-10 rounded-full bg-default hover:bg-default-hover text-white'
            onClick={goToNext}
            aria-label='Next testimonial'
          >
            <ChevronRight className='h-6 w-6' />
          </Button>
        </div>
        <div className='mt-8 flex justify-center space-x-2'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-gray-500'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
