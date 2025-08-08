'use client'

import { Clock, Users, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import { useState } from 'react'
import SpotAvailabilityIndicator from '@/components/SpotAvailabiltyIndicator'
import { mockQuizzes } from '@/constant/mockQuizzes'

const FeaturedQuiz = () => {
  const [activeTab, setActiveTab] = useState('All')

  const filterTabs = [
    { name: 'All', active: activeTab === 'All' },
    { name: 'Hot', active: activeTab === 'Hot' },
    { name: 'Trending', active: activeTab === 'Trending' },
    { name: "Editor's", active: activeTab === "Editor's" }
  ]

  // Update filterTabs to use activeTab state
  const filteredQuizzes = mockQuizzes.filter((quiz) => {
    // Apply tab filter
    if (activeTab === 'All') {
      return true
    } else if (activeTab === 'Hot') {
      return quiz.badges.includes('Hot')
    } else if (activeTab === 'Trending') {
      return quiz.badges.includes('Trending')
    } else if (activeTab === "Editor's") {
      return quiz.badges.includes("Editor's Choice")
    }

    return true
  })

  return (
    <div className='mb-8'>
      <div className='flex items-center justify-between mb-6 flex-col xl:flex-row'>
        <div className='mb-5'>
          <h2 className='text-2xl font-bold mb-1'>Featured Quizzes</h2>
          <p className='text-slate-400'>
            Specially selected quizzes you don’t want to miss
          </p>
        </div>
        <div className='flex gap-3 rounded-lg p-1 '>
          {filterTabs.map((tab) => (
            <Button
              key={tab.name}
              size='sm'
              className={`${
                tab.active ? '' : 'bg-slate-700 text-white hover:bg-slate-600'
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Quiz Cards Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
        {filteredQuizzes.map((quiz) => (
          <div
            key={quiz.id}
            className='border border-white/20 rounded-xl overflow-hidden  cursor-pointer'
          >
            {/* Quiz Image */}
            <div
              className={`relative h-48 bg-gradient-to-br ${quiz.bgGradient}`}
            >
              <Image
                src={quiz.image}
                alt={quiz.title}
                fill
                className='object-cover mix-blend-overlay hover:transform hover:scale-115 transition-all duration-200'
              />

              {/* Badges */}
              <div className='absolute top-3 left-3 flex justify-between w-[90%]'>
                {quiz.timeLeft && (
                  <Badge
                    variant='secondary'
                    className='bg-slate-900/80 text-white'
                  >
                    <Clock className='w-3 h-3 mr-1' />
                    {quiz.timeLeft} {quiz.timeLeft === 1 ? 'day' : 'days'} left
                  </Badge>
                )}

                {quiz.badges.map((badge) => (
                  <Badge
                    key={badge}
                    className={`text-white rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent flex items-center ${
                      badge === 'Hot'
                        ? 'bg-[#7F1D1D] hover:bg-[#7F1D1D]/80 '
                        : badge === "Editor's Choice"
                        ? 'bg-violet-500 hover:bg-violet-600'
                        : badge === 'Trending'
                        ? 'bg-blue-500 hover:bg-blue-600'
                        : 'bg-[#EAB308] hover:bg-[#EAB308]/80'
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
                <h3 className='font-bold text-lg mb-1 truncate overflow-hidden whitespace-nowrap'>
                  {quiz.title}
                </h3>
                <p className='text-slate-300 text-sm truncate overflow-hidden whitespace-nowrap'>
                  {quiz.categories.join(', ')}
                </p>
              </div>
            </div>

            {/* Quiz Details */}
            <div className='p-4'>
              {/* Creator Info */}
              <div className='flex items-center justify-between mb-3'>
                <div className='flex items-center gap-2'>
                  <Avatar className='w-8 h-8'>
                    <AvatarImage src={quiz.creator.imageURL} />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='font-medium text-sm'>{quiz.creator.name}</p>
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
                  <p className='font-bold text-green-400'> $ {quiz.reward}</p>
                </div>
              </div>

              {/* Stats */}
              <div className='flex items-center justify-between text-xs text-slate-400 mb-2'>
                <div className='flex items-center gap-1'>
                  <Users className='w-3 h-3' />
                  <span>{quiz.players} players joined</span>
                </div>
                <SpotAvailabilityIndicator
                  currentSpots={quiz.spots - quiz.spotsLeft}
                  totalSpots={quiz.spots}
                  mode='percentage'
                />
                <p className='text-xs text-slate-400'>
                  {quiz.spotsLeft} spots available
                </p>
              </div>

              <div className='w-full text-center'>
                {/* Play Button */}
                <Button className='text-sm w-full text-white-primary'>
                  Play Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedQuiz
