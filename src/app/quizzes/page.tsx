'use client'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import FeaturedQuiz from '@/components/FeaturedQuiz'
import { briefCategories } from '@/constant/briefCategories'
import MainContent from '@/components/quizzes/MainContent'

export default function QuizPlatform() {
  return (
    <div className='min-h-screen text-white-primary m-3 xl:m-5'>
      <div className='px-4 py-8'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-4xl font-bold mb-2'>Explore Quizzes</h1>
          <p className='text-slate-400 text-lg'>
            Discover and play quizzes from our community
          </p>
        </div>

        {/* Search Bar */}
        <div className='relative mb-8 flex items-center gap-4'>
          <div className='relative flex-1'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5' />
            <Input
              placeholder='Search quizzes by title, category, or creator...'
              className='pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 h-12'
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className=' gap-3 mb-12 overflow-x-auto pb-2 scrollbar-hide w-full max-w-full hidden sm:flex'>
          <style jsx global>{`
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {briefCategories.map((category) => (
            <Button
              key={category.name}
              className={`whitespace-nowrap flex-shrink-0 rounded-full ${
                category.active
                  ? 'bg-default hover:bg-default/90'
                  : 'border-slate-700 bg-slate-800 hover:bg-slate-700'
              }`}
            >
              <span className='mr-2'>{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        <FeaturedQuiz />
      </div>

      {/*Main Content */}
      <MainContent />
    </div>
  )
}
