'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Swords } from 'lucide-react'
import { Button } from '@/components/ui/button'
import categories from '@/constant/category'
import { CategoryCard } from '@/components/CatergoryCard'
import { quizzes } from '@/constant/quizzes'
import QuizCard from '@/components/QuizCard'
import Link from 'next/link'
import FeaturedQuiz from '@/components/FeaturedQuiz'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { playersRank } from '@/constant/playersRank'
import { PlayerCard } from '@/components/PlayerCard'
import { difficultyColors } from '@/constant/difficultColor'
import { quizzesDifficulty } from '@/constant/quizDifficulty'
import { QuizCardDifficulty } from '@/components/QuizCardDifficulty'
import LiveWinners from '@/components/LiveWinner'
import HowItWorks from '@/components/HowItWorks'
import SuccessStoriesCarousel from '@/components/SuccessStoryCarousel'

export default function QuizHubDashboard() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    'Easy' | 'Medium' | 'Hard'
  >('Easy')
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
            <Button size='sm'>
              <ChevronLeft className='h-4 w-4' />
            </Button>
            <Button size='sm'>
              <ChevronRight className='h-4 w-4' />
            </Button>
          </div>
        </div>

        <div className='flex overflow-x-auto gap-6 w-full'>
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

      {/* Latest Quizzes */}
      <div className=' bg-main text-white border rounded-lg lg:p-8 mb-10'>
        <h2 className='text-2xl font-bold mb-8'>Latest Quizzes</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
          {quizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              title={quiz.title}
              category={quiz.category}
              difficulty={quiz.difficulty as 'Easy' | 'Medium' | 'Hard'}
              image={quiz.image}
            />
          ))}
        </div>

        <div className='flex justify-center mt-3 lg:mt-8 mb-3'>
          <Button className=' text-sm hover:bg-default-hover rounded-sm'>
            <Link href='/quizzes'>View All Quizzes</Link>
          </Button>
        </div>
      </div>

      {/* Featured Quiz */}
      <FeaturedQuiz />

      {/* Player Ranking */}
      <div className=' xl:py-10 bg-main p-6 text-white rounded-sm'>
        <div className='mb-10 flex items-center justify-between'>
          <h2 className='flex items-center gap-2 text-2xl font-bold'>
            <Swords className='h-6 w-6' />
            Top Players
          </h2>
          <div className='flex gap-2'>
            <Button
              size='icon'
              className=' bg-default text-white hover:bg-default-hover'
            >
              <ChevronLeft className='h-5 w-5' />
            </Button>
            <Button
              size='icon'
              className='bg-default text-white hover:bg-default-hover'
            >
              <ChevronRight className='h-5 w-5' />
            </Button>
          </div>
        </div>

        <ScrollArea className='w-full whitespace-nowrap pb-4 mt-5'>
          <div className='flex space-x-6'>
            {playersRank.map((player, index) => (
              <PlayerCard key={index} {...player} />
            ))}
          </div>
          <ScrollBar orientation='horizontal' className='mt-4' />
        </ScrollArea>

        <div className='mt-8 flex justify-center'>
          <Button className='rounded-md bg-default hover:bg-default-hover'>
            View Full Leaderboard
          </Button>
        </div>
      </div>

      {/* QuizCard Difficulty*/}
      <div className='mt-20'>
        <div className='mb-8 m flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
          <div>
            <h1 className='text-3xl font-bold text-white md:text-4xl'>
              Quizzes by Difficulty
            </h1>
            <p className='text-md text-gray-400 md:text-lg'>
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
                      ? `${difficultyColors[level].bg} pointer-events-none `
                      : `bg-transparent  ${difficultyColors[level].hover}`
                  }
                      `}
                >
                  {level}
                </Button>
              ))}
            </div>
            <Button
              size='icon'
              className='h-8 w-8 bg-transparent text-white-primary hover:bg-slate-700 '
            >
              <ChevronLeft className='h-4 w-4' />
            </Button>
            <Button
              size='icon'
              className='h-8 w-8 bg-transparent text-white-primary hover:bg-slate-700 '
            >
              <ChevronRight className='h-4 w-4' />
            </Button>
          </div>
        </div>

        <div className='flex gap-6 overflow-x-auto pb-4 scrollbar-hide lg:grid lg:grid-cols-4 lg:gap-30'>
          {quizzesDifficulty
            .filter((quiz) => quiz.difficulty === selectedDifficulty)
            .map((quiz) => (
              <QuizCardDifficulty key={quiz.id} {...quiz} />
            ))}
        </div>
      </div>

      {/* Live Winners */}
      <LiveWinners />

      {/*How it Works */}
      <HowItWorks />

      {/* Success Story */}
      <SuccessStoriesCarousel />
    </div>
  )
}
