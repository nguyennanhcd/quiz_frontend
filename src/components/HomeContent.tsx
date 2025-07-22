import React from 'react'
import { ChevronLeft, ChevronRight, Swords } from 'lucide-react'
import { Button } from '@/components/ui/button'
import categories from '@/constant/category'
import { CategoryCard } from './CatergoryCard'
import { quizzes } from '@/constant/quizzes'
import FeaturedQuiz from './FeaturedQuiz'
import QuizCard from './QuizCard'
import { ScrollArea, ScrollBar } from './ui/scroll-area'
import { PlayerCard, PlayerCardProps } from './PlayerCard'
import { QuizCardDifficulty } from './QuizCardDifficulty'
import { quizzesDifficulty } from '@/constant/quizDifficulty'

const players: PlayerCardProps[] = [
  {
    name: 'Olivia Anderson',
    country: 'Italy',
    flag: '🇮🇹',
    rank: 8,
    wins: 23,
    earned: 580.3,
    followers: '378',
    following: '267',
    level: 'Advanced',
    avatarUrl: '/avatarPlaceholder.webp',
    bgImageUrl: '/placeholder.webp'
  },
  {
    name: 'Alex Johnson',
    country: 'United States',
    flag: '🇺🇸',
    rank: 1,
    wins: 42,
    earned: 1250.75,
    followers: '1.2k',
    following: '356',
    level: 'Grandmaster',
    avatarUrl: '/avatarPlaceholder.webp',
    bgImageUrl: '/placeholder.webp'
  },
  {
    name: 'Sarah Williams',
    country: 'Canada',
    flag: '🇨🇦',
    rank: 2,
    wins: 38,
    earned: 980.5,
    followers: '987',
    following: '412',
    level: 'Master',
    avatarUrl: '/avatarPlaceholder.webp',
    bgImageUrl: '/placeholder.webp'
  },
  {
    name: 'David Lee',
    country: 'Germany',
    flag: '🇩🇪',
    rank: 3,
    wins: 35,
    earned: 750.2,
    followers: '650',
    following: '200',
    level: 'Advanced',
    avatarUrl: '/avatarPlaceholder.webp',
    bgImageUrl: '/placeholder.webp'
  },
  {
    name: 'Emily Chen',
    country: 'Australia',
    flag: '🇦🇺',
    rank: 4,
    wins: 30,
    earned: 620.0,
    followers: '500',
    following: '180',
    level: 'Master',
    avatarUrl: '/avatarPlaceholder.webp',
    bgImageUrl: '/placeholder.webp'
  }
]

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
            View All Quizzes
          </Button>
        </div>
      </div>

      {/* Featured Quiz */}
      <FeaturedQuiz />

      {/* Player Ranking */}
      <div className=' xl:py-10 bg-main p-6 text-white rounded-sm'>
        <div className='mx-auto max-w-6xl'>
          <div className='mb-10 flex items-center justify-between'>
            <h2 className='flex items-center gap-2 text-2xl font-bold'>
              <Swords className='h-6 w-6' />
              Top Players
            </h2>
            <div className='flex gap-2'>
              <Button
                variant='ghost'
                size='icon'
                className=' bg-default text-white hover:bg-default-hover'
              >
                <ChevronLeft className='h-5 w-5' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='bg-default text-white hover:bg-default-hover'
              >
                <ChevronRight className='h-5 w-5' />
              </Button>
            </div>
          </div>

          <ScrollArea className='w-full whitespace-nowrap pb-4 mt-5'>
            <div className='flex space-x-6'>
              {players.map((player, index) => (
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
      </div>

      {/* QuizCard Difficulty*/}
      <div className='min-h-screen bg-[#1A1A2E] p-6 md:p-10 lg:p-12'>
        <div className='mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
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
              <Button
                variant='ghost'
                className='h-8 rounded-md px-4 text-white hover:bg-purple-600 hover:text-white'
              >
                Easy
              </Button>
              <Button
                variant='ghost'
                className='h-8 rounded-md px-4 text-white hover:bg-purple-600 hover:text-white'
              >
                Medium
              </Button>
              <Button
                variant='ghost'
                className='h-8 rounded-md px-4 text-white hover:bg-purple-600 hover:text-white'
              >
                Hard
              </Button>
            </div>
            <Button
              variant='ghost'
              size='icon'
              className='h-8 w-8 rounded-full text-white hover:bg-purple-600 hover:text-white'
            >
              <ChevronLeft className='h-4 w-4' />
            </Button>
            <Button
              variant='ghost'
              size='icon'
              className='h-8 w-8 rounded-full text-white hover:bg-purple-600 hover:text-white'
            >
              <ChevronRight className='h-4 w-4' />
            </Button>
          </div>
        </div>

        <div className='flex gap-6 overflow-x-auto pb-4 scrollbar-hide lg:grid lg:grid-cols-4 lg:gap-8'>
          {quizzesDifficulty.map((quiz) => (
            <QuizCardDifficulty key={quiz.id} {...quiz} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PageContent
