'use client'

import { Clock, Star } from 'lucide-react'
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

  const filteredQuizzes = mockQuizzes.filter((quiz) => {
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
      {/* Header */}
      <div className='flex items-center justify-between mb-6 flex-col xl:flex-row'>
        <div className='mb-5'>
          <h2 className='text-2xl font-bold mb-1'>Featured Quizzes</h2>
          <p className='text-slate-400'>
            Specially selected quizzes you don&apos;t want to miss
          </p>
        </div>

        {/* Filter Tabs (scrollable on mobile) */}
        <div className='flex gap-3 rounded-lg p-1 overflow-x-auto scrollbar-hide w-full xl:w-auto'>
          {filterTabs.map((tab) => (
            <Button
              key={tab.name}
              size='sm'
              className={`whitespace-nowrap ${
                tab.active ? '' : 'bg-slate-700 text-white hover:bg-slate-600'
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Responsive Grid for Quizzes */}
      <div
        className='
          grid gap-6 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4
        '
      >
        {filteredQuizzes.map((quiz) => (
          <div
            key={quiz.id}
            className='border border-white/20 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg'
          >
            {/* Quiz Image */}
            <div
              className={`relative bg-gradient-to-br ${quiz.bgGradient}`}
              style={{
                height: quiz.image ? '200px' : '150px'
              }}
            >
              <Image
                src={quiz.image || '/placeholder.svg'}
                alt={quiz.title}
                fill
                className='object-cover mix-blend-overlay hover:scale-105 transition-transform duration-200'
              />

              {/* Badges */}
              <div className='absolute top-3 left-3 right-3 flex justify-between flex-wrap gap-2'>
                {quiz.timeLeft && (
                  <Badge
                    variant='secondary'
                    className='bg-slate-900/80 text-white'
                  >
                    <Clock className='w-3 h-3 mr-1' />
                    {quiz.timeLeft} {quiz.timeLeft === 1 ? 'day' : 'days'} left
                  </Badge>
                )}
                <div className='flex flex-wrap gap-1'>
                  {quiz.badges.map((badge) => (
                    <Badge
                      key={badge}
                      className={`text-white rounded-full border px-2.5 py-0.5 text-xs font-semibold flex items-center ${
                        badge === 'Hot'
                          ? 'bg-[#7F1D1D] hover:bg-[#7F1D1D]/80'
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
              </div>

              {/* Quiz Title */}
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4'>
                <h3 className='font-bold text-lg mb-1 leading-tight'>
                  {quiz.title}
                </h3>
                <p className='text-slate-300 text-sm leading-tight'>
                  {quiz.categories.join(', ')}
                </p>
              </div>
            </div>

            {/* Quiz Details */}
            <div className='p-4 flex flex-col gap-3'>
              {/* Creator Info */}
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 flex-1 min-w-0'>
                  <Avatar className='w-8 h-8 flex-shrink-0'>
                    <AvatarImage
                      src={quiz.creator.imageURL || '/placeholder.svg'}
                    />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div className='min-w-0 flex-1'>
                    <p className='font-medium text-sm truncate'>
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
                <div className='text-right flex-shrink-0'>
                  <p className='text-xs text-slate-400'>Reward</p>
                  <p className='font-bold text-green-400'>$ {quiz.reward}</p>
                </div>
              </div>

              {/* Stats */}
              <div className='flex items-start gap-2 text-xs text-slate-400 -translate-x-1'>
                <SpotAvailabilityIndicator
                  currentSpots={quiz.spots - quiz.spotsLeft}
                  totalSpots={quiz.spots}
                  mode='percentage'
                />
                <div className='flex items-start flex-col flex-1'>
                  <div className='flex items-center gap-2 mb-1'>
                    <div className='*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2'>
                      {quiz.players > 0 &&
                        (quiz.players > 3 ? (
                          <Avatar className='w-6 h-6'>
                            <AvatarImage
                              src={quiz.creator.imageURL || '/placeholder.svg'}
                              alt={quiz.creator.name}
                            />
                            <AvatarFallback>{quiz.players - 3}+</AvatarFallback>
                          </Avatar>
                        ) : (
                          quiz.players > 0 &&
                          Array.from({ length: quiz.players }).map(
                            (_, index) => (
                              <Avatar key={index} className='w-6 h-6'>
                                <AvatarImage
                                  src={`https://randomuser.me/api/portraits/lego/${index}.jpg`}
                                  alt={`Player ${index}`}
                                />
                                <AvatarFallback>{index + 1}</AvatarFallback>
                              </Avatar>
                            )
                          )
                        ))}
                    </div>
                    <span className='text-sm text-white font-semibold'>
                      {quiz.players} players joined
                    </span>
                  </div>
                  <p className='text-xs text-slate-400'>
                    {quiz.spotsLeft} spots available
                  </p>
                </div>
              </div>

              {/* Play Button */}
              <Button className='text-sm w-full text-white mt-2'>
                Play Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedQuiz
