import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import categories from '@/constant/category'
import { CategoryCard } from './CatergoryCard'
import QuizCard from './QuizCard'
import { quizzes } from '@/constant/quizzes'

const PageContent = () => {
  return (
    <div className='flex-1 p-4 sm:p-6 lg:p-8 max-w-full overflow-hidden'>
      <div className='relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 sm:p-8 lg:p-12 mb-6 sm:mb-8'>
        <div className='relative z-10 max-w-full sm:max-w-lg lg:max-w-2xl'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight'>
            Your Quiz Adventure
            <br />
            Starts Here:
            <br />
            <span className='text-default'>Play, Share, Earn!</span>
          </h1>
          <p className='text-base sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8'>
            Build engaging quizzes, challenge others, and earn rewards
            <br className='hidden sm:inline' />
            for your knowledge.
          </p>
          <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4'>
            <Button
              size='lg'
              className='text-white-primary bg-default hover:bg-default-hover w-full sm:w-auto'
            >
              Create Quiz
            </Button>
            <Button
              size='lg'
              className='text-white-primary bg-default hover:bg-default-hover w-full sm:w-auto'
            >
              Join Contest
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className='absolute top-4 right-4 bg-default text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full transform rotate-12 text-sm sm:text-base'>
          <span className='font-bold'>Science Quiz</span>
        </div>
        <div className='absolute bottom-6 sm:bottom-8 right-6 sm:right-8 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20'></div>
        <div className='absolute top-1/2 right-8 sm:right-12 lg:right-16 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-yellow-400 rounded-full opacity-30'></div>
      </div>

      {/* Quiz Categories */}
      <div className='mb-6 sm:mb-8'>
        <div className='flex items-center justify-between mb-4 sm:mb-6'>
          <h2 className='text-xl sm:text-2xl font-bold'>Quiz Categories</h2>
          <div className='flex space-x-2'>
            <Button variant='ghost' size='sm'>
              <ChevronLeft className='h-4 w-4' />
            </Button>
            <Button variant='ghost' size='sm'>
              <ChevronRight className='h-4 w-4' />
            </Button>
          </div>
        </div>

        <div className='flex overflow-x-auto space-x-6 pb-4 scrollbar-hide'>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              count={category.count}
              slug={category.slug}
              imageUrl={category.imageUrl}
            />
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 order-1 xl:order-2'>
        {quizzes.map((quiz) => (
          <QuizCard key={quiz.id} {...quiz} />
        ))}
      </div>
    </div>
  )
}

export default PageContent
