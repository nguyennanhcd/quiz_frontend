import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import categories from '@/constant/category'

const PageContent = () => {
  return (
    <main className='flex-1 p-8'>
      <div className='relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-12 mb-8 overflow-hidden'>
        <div className='relative z-10 max-w-2xl'>
          <h1 className='text-5xl font-bold mb-4 leading-tight'>
            Your Quiz Adventure
            <br />
            Starts Here:
            <br />
            <span className='text-default'>Play, Share, Earn!</span>
          </h1>
          <p className='text-xl text-slate-300 mb-8'>
            Build engaging quizzes, challenge others, and earn rewards
            <br />
            for your knowledge.
          </p>
          <div className='flex space-x-4'>
            <Button
              size='lg'
              className='text-white-primary bg-default hover:bg-default-hover'
            >
              Create Quiz
            </Button>
            <Button
              size='lg'
              className='text-white-primary bg-default hover:bg-default-hover'
            >
              Join Contest
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className='absolute top-4 right-4 bg-default text-white px-4 py-2 rounded-full transform rotate-12'>
          <span className='font-bold'>Science Quiz</span>
        </div>
        <div className='absolute bottom-8 right-8 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20'></div>
        <div className='absolute top-1/2 right-16 w-16 h-16 bg-yellow-400 rounded-full opacity-30'></div>
      </div>

      {/* Quiz Categories */}
      <div className='mb-8'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-2xl font-bold'>Quiz Categories</h2>
          <div className='flex space-x-2'>
            <Button variant='ghost' size='sm'>
              <ChevronLeft className='h-4 w-4' />
            </Button>
            <Button variant='ghost' size='sm'>
              <ChevronRight className='h-4 w-4' />
            </Button>
          </div>
        </div>

        <div className='grid grid-cols-4 gap-6'>
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.color} rounded-xl p-6 cursor-pointer hover:scale-105 transition-transform relative overflow-hidden`}
            >
              <div className='relative z-10'>
                <div className='text-3xl mb-2'>{category.icon}</div>
                <h3 className='text-white font-bold text-lg mb-1'>
                  {category.name}
                </h3>
                <Badge className='bg-white/20 text-white border-0'>
                  {category.count}
                </Badge>
              </div>
              <div className='absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full'></div>
              <div className='absolute -top-2 -left-2 w-8 h-8 bg-white/10 rounded-full'></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default PageContent
