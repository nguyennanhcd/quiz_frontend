'use client'

import { Search, Grid3X3, List, Clock, Users, Star } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'

const categories = [
  { name: 'All Categories', icon: '🌐', active: true },
  { name: 'Science', icon: '🧪' },
  { name: 'History', icon: '🏛️' },
  { name: 'Geography', icon: '🌍' },
  { name: 'Mathematics', icon: '📊' },
  { name: 'Literature', icon: '📚' },
  { name: 'Sports', icon: '🏆' },
  { name: 'Music', icon: '🎵' },
  { name: 'Movies & TV', icon: '🎬' }
]

const filterTabs = [
  { name: 'All', active: true },
  { name: 'Hot' },
  { name: 'Trending' },
  { name: "Editor's" }
]

const quizzes = [
  {
    id: 1,
    title: 'Science Quiz: Space Exploration',
    category: 'Entertainment',
    image: '/placeholder.svg?height=200&width=300',
    creator: {
      name: 'Alex Smith',
      avatar: '/placeholder.svg?height=40&width=40',
      rating: 4.9
    },
    reward: '$10.00',
    players: '2.5k players joined',
    spots: '547 spots available',
    completion: 82,
    timeLeft: '2 days left',
    badges: ['Hot'],
    bgGradient: 'from-purple-600 to-blue-600'
  },
  {
    id: 2,
    title: 'World Geography Challenge: Landmarks & Capitals',
    category: 'Geography',
    image: '/placeholder.svg?height=200&width=300',
    creator: {
      name: 'Alex Smith',
      avatar: '/placeholder.svg?height=40&width=40',
      rating: 4.8
    },
    reward: '$7.50',
    players: '1.9k players joined',
    spots: '728 spots available',
    completion: 94,
    badges: ["Editor's Choice"],
    bgGradient: 'from-green-600 to-teal-600'
  },
  {
    id: 3,
    title: 'Brain Teasers & Logic Puzzles',
    category: 'Puzzles',
    image: '/placeholder.svg?height=200&width=300',
    creator: {
      name: 'Alex Smith',
      avatar: '/placeholder.svg?height=40&width=40',
      rating: 4.7
    },
    reward: '$8.00',
    players: '3.2k players joined',
    spots: '1759 spots available',
    completion: 65,
    timeLeft: '24h 0m left',
    badges: ['Trending'],
    bgGradient: 'from-orange-600 to-red-600'
  },
  {
    id: 4,
    title: "History's Greatest Mysteries",
    category: 'History',
    image: '/placeholder.svg?height=200&width=300',
    creator: {
      name: 'Alex Smith',
      avatar: '/placeholder.svg?height=40&width=40',
      rating: 4.9
    },
    reward: '$6.50',
    players: '1.6k players joined',
    spots: 'Only 37 spots left',
    completion: 98,
    badges: ['Top Rated'],
    bgGradient: 'from-amber-600 to-orange-600'
  }
]

export default function QuizPlatform() {
  return (
    <div className='min-h-screen bg-slate-900 text-white-primary'>
      <div className='container mx-auto px-4 py-8'>
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
          <div className='flex gap-2'>
            <Button
              variant='outline'
              size='icon'
              className='border-slate-700 bg-slate-800 hover:bg-slate-700'
            >
              <Grid3X3 className='w-4 h-4' />
            </Button>
            <Button
              variant='outline'
              size='icon'
              className='border-slate-700 bg-slate-800 hover:bg-slate-700'
            >
              <List className='w-4 h-4' />
            </Button>
          </div>
        </div>

        {/* Category Pills */}
        <div className='flex gap-3 mb-12 overflow-x-auto pb-2 scrollbar-hide'>
          <style jsx global>{`
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={category.active ? 'default' : 'outline'}
              className={`whitespace-nowrap flex-shrink-0 rounded-full ${
                category.active
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'border-slate-700 bg-slate-800 hover:bg-slate-700'
              }`}
            >
              <span className='mr-2'>{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Featured Quizzes Section */}
        <div className='mb-8'>
          <div className='flex items-center justify-between mb-6'>
            <div>
              <h2 className='text-2xl font-bold mb-1'>Featured Quizzes</h2>
              <p className='text-slate-400'>
                Specially selected quizzes you don&rsquo;t want to miss
              </p>
            </div>
            <div className='flex bg-slate-800 rounded-lg p-1'>
              {filterTabs.map((tab) => (
                <Button
                  key={tab.name}
                  variant={tab.active ? 'default' : 'ghost'}
                  size='sm'
                  className={`${
                    tab.active
                      ? 'bg-slate-700 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {tab.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Quiz Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {quizzes.map((quiz) => (
              <div
                key={quiz.id}
                className='bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-200 cursor-pointer'
              >
                {/* Quiz Image */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${quiz.bgGradient}`}
                >
                  <Image
                    src={quiz.image || '/placeholder.svg'}
                    alt={quiz.title}
                    fill
                    className='object-cover mix-blend-overlay'
                  />

                  {/* Badges */}
                  <div className='absolute top-3 left-3 flex gap-2'>
                    {quiz.timeLeft && (
                      <Badge
                        variant='secondary'
                        className='bg-slate-900/80 text-white'
                      >
                        <Clock className='w-3 h-3 mr-1' />
                        {quiz.timeLeft}
                      </Badge>
                    )}
                    {quiz.badges.map((badge) => (
                      <Badge
                        key={badge}
                        className={`${
                          badge === 'Hot'
                            ? 'bg-red-600 hover:bg-red-700'
                            : badge === "Editor's Choice"
                            ? 'bg-purple-600 hover:bg-purple-700'
                            : badge === 'Trending'
                            ? 'bg-blue-600 hover:bg-blue-700'
                            : 'bg-yellow-600 hover:bg-yellow-700'
                        }`}
                      >
                        {badge === 'Hot' && '🔥'}
                        {badge === "Editor's Choice" && '⭐'}
                        {badge === 'Trending' && '📈'}
                        {badge === 'Top Rated' && '⭐'}
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  {/* Quiz Title Overlay */}
                  <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4'>
                    <h3 className='font-bold text-lg mb-1'>{quiz.title}</h3>
                    <p className='text-slate-300 text-sm'>{quiz.category}</p>
                  </div>
                </div>

                {/* Quiz Details */}
                <div className='p-4'>
                  {/* Creator Info */}
                  <div className='flex items-center justify-between mb-3'>
                    <div className='flex items-center gap-2'>
                      <Avatar className='w-8 h-8'>
                        <AvatarImage
                          src={quiz.creator.avatar || '/placeholder.svg'}
                        />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className='font-medium text-sm'>
                          {quiz.creator.name}
                        </p>
                        <div className='flex items-center gap-1'>
                          <Star className='w-3 h-3 fill-yellow-400 text-yellow-400' />
                          <span className='text-xs text-slate-400'>
                            {quiz.creator.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='text-right'>
                      <p className='text-xs text-slate-400'>Reward</p>
                      <p className='font-bold text-green-400'>{quiz.reward}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className='flex items-center justify-between text-xs text-slate-400 mb-2'>
                    <div className='flex items-center gap-1'>
                      <Users className='w-3 h-3' />
                      <span>{quiz.players}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='flex items-center gap-1'>
                        <div className='w-8 h-8 rounded-full border-2 border-slate-600 flex items-center justify-center text-xs font-bold'>
                          {quiz.completion}%
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className='text-xs text-slate-400'>{quiz.spots}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
