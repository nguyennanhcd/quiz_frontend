'use client'

import { Search, ChevronUp, ChevronDown } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { quizzes } from '@/constant/quizzes'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import FeaturedQuiz from '@/components/FeaturedQuiz'
import QuizCardDetail from '@/components/QuizCardDetail'

export default function QuizPlatform() {
  const [difficultyFilter, setDifficultyFilter] = useState('all')
  const [sortBy, setSortBy] = useState('popular')
  const [rewardRange, setRewardRange] = useState([0])
  const [timeLimit, setTimeLimit] = useState([0])
  const [availability, setAvailability] = useState('Spots available')
  const [timeRange, setTimeRange] = useState('All')
  const [showDifficulty, setShowDifficulty] = useState(true)
  const [showSortBy, setShowSortBy] = useState(true)
  const [showReward, setShowReward] = useState(true)
  const [showTimeLimit, setShowTimeLimit] = useState(false)
  const [showAvailability, setShowAvailability] = useState(false)
  const [showTimeRange, setShowTimeRange] = useState(false)

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

  // Filter quizzes based on difficulty and active tab
  const filteredQuizzes = quizzes.filter((quiz) => {
    // Apply difficulty filter
    if (
      difficultyFilter !== 'all' &&
      quiz.difficulty.toLowerCase() !== difficultyFilter
    ) {
      return false
    }
    return true
  })

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
          {categories.map((category) => (
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

      <div className=' text-white'>
        <div className='flex xl:flex-row flex-col'>
          {/* Sidebar */}
          <div className='xl:w-80 xl:p-6 w-full mb-3 xl:mb-none'>
            <h2 className='text-xl font-bold mb-6'>Filters</h2>

            <div className='border border-white-primary/20 rounded-md p-4'>
              {/* Difficulty Filter */}
              <div className='mb-6'>
                <button
                  onClick={() => setShowDifficulty(!showDifficulty)}
                  className='flex items-center justify-between w-full text-left font-semibold mb-3'
                >
                  Difficulty
                  {showDifficulty ? (
                    <ChevronUp className='w-4 h-4' />
                  ) : (
                    <ChevronDown className='w-4 h-4' />
                  )}
                </button>
                {showDifficulty && (
                  <RadioGroup
                    value={difficultyFilter}
                    onValueChange={setDifficultyFilter}
                  >
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='all' id='all' />
                      <Label htmlFor='all'>All Levels</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='easy' id='easy' />
                      <Label htmlFor='easy' className='flex items-center gap-2'>
                        Easy{' '}
                        <Badge className='bg-green-500 text-white text-xs'>
                          Easy
                        </Badge>
                      </Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='medium' id='medium' />
                      <Label
                        htmlFor='medium'
                        className='flex items-center gap-2'
                      >
                        Medium{' '}
                        <Badge className='bg-orange-500 text-white text-xs'>
                          Medium
                        </Badge>
                      </Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='hard' id='hard' />
                      <Label htmlFor='hard' className='flex items-center gap-2'>
                        Hard{' '}
                        <Badge className='bg-red-500 text-white text-xs'>
                          Hard
                        </Badge>
                      </Label>
                    </div>
                  </RadioGroup>
                )}
              </div>

              {/* Sort By Filter */}
              <div className='mb-6'>
                <button
                  onClick={() => setShowSortBy(!showSortBy)}
                  className='flex items-center justify-between w-full text-left font-semibold mb-3'
                >
                  Sort By
                  {showSortBy ? (
                    <ChevronUp className='w-4 h-4' />
                  ) : (
                    <ChevronDown className='w-4 h-4' />
                  )}
                </button>
                {showSortBy && (
                  <RadioGroup value={sortBy} onValueChange={setSortBy}>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='popular' id='popular' />
                      <Label htmlFor='popular'>Most Popular</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='newest' id='newest' />
                      <Label htmlFor='newest'>Newest</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='rated' id='rated' />
                      <Label htmlFor='rated'>Highest Rated</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='reward' id='reward' />
                      <Label htmlFor='reward'>Highest Reward</Label>
                    </div>
                  </RadioGroup>
                )}
              </div>

              {/* Reward Filter */}
              <div className='mb-6'>
                <button
                  onClick={() => setShowReward(!showReward)}
                  className='flex items-center justify-between w-full text-left font-semibold mb-3'
                >
                  Reward
                  {showReward ? (
                    <ChevronUp className='w-4 h-4' />
                  ) : (
                    <ChevronDown className='w-4 h-4' />
                  )}
                </button>
                {showReward && (
                  <div className='space-y-4'>
                    <div className='flex justify-between text-sm text-slate-400'>
                      <span>$0</span>
                      <span>$15+</span>
                    </div>
                    <Slider
                      value={rewardRange}
                      onValueChange={setRewardRange}
                      max={15}
                      step={1}
                      className='w-full'
                    />
                  </div>
                )}
              </div>

              {/* Time Limit Filter */}
              <div className='mb-6'>
                <button
                  onClick={() => setShowTimeLimit(!showTimeLimit)}
                  className='flex items-center justify-between w-full text-left font-semibold mb-3'
                >
                  Time Limit
                  {showTimeLimit ? (
                    <ChevronUp className='w-4 h-4' />
                  ) : (
                    <ChevronDown className='w-4 h-4' />
                  )}
                </button>
                {showTimeLimit && (
                  <div className='space-y-4'>
                    <div className='flex justify-between text-sm text-slate-400'>
                      <span>0 min</span>
                      <span>30+ min</span>
                    </div>
                    <Slider
                      value={timeLimit}
                      onValueChange={setTimeLimit}
                      max={15}
                      step={1}
                      className='w-full'
                    />
                  </div>
                )}
              </div>

              {/* Availability Filter */}
              <div className='mb-6'>
                <button
                  onClick={() => setShowAvailability(!showAvailability)}
                  className='flex items-center justify-between w-full text-left font-semibold mb-3'
                >
                  Availability
                  {showAvailability ? (
                    <ChevronUp className='w-4 h-4' />
                  ) : (
                    <ChevronDown className='w-4 h-4' />
                  )}
                </button>
                {showAvailability && (
                  <RadioGroup
                    value={availability}
                    onValueChange={setAvailability}
                  >
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem
                        value='spots available'
                        id='spots available'
                      />
                      <Label htmlFor='spots available'>Spots Available</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='almost full' id='almost full' />
                      <Label htmlFor='almost full'>Almost Full</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='limited time' id='limited time' />
                      <Label htmlFor='limited time'>Limited Time</Label>
                    </div>
                  </RadioGroup>
                )}
              </div>

              {/* Time Range Filter */}
              <div className='mb-6'>
                <button
                  onClick={() => setShowTimeRange(!showTimeRange)}
                  className='flex items-center justify-between w-full text-left font-semibold mb-3'
                >
                  Time Range
                  {showTimeRange ? (
                    <ChevronUp className='w-4 h-4' />
                  ) : (
                    <ChevronDown className='w-4 h-4' />
                  )}
                </button>
                {showTimeRange && (
                  <RadioGroup value={timeRange} onValueChange={setTimeRange}>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='all time' id='all time' />
                      <Label htmlFor='all time'>All Time</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='today' id='today' />
                      <Label htmlFor='today'>Today</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='this week' id='this week' />
                      <Label htmlFor='this week'>This Week</Label>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='this month' id='this month' />
                      <Label htmlFor='this month'>This Month</Label>
                    </div>
                  </RadioGroup>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className='flex-1 p-5 xl:block flex flex-col'>
            <div className='mb-6 order-2 xl:order-1'>
              <p className='text-slate-400'>
                Showing 1-6 of {filteredQuizzes.length} quizzes
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 order-1 xl:order-2'>
              {filteredQuizzes.map((quiz) => (
                <QuizCardDetail key={quiz.id} {...quiz} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
