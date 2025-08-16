import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Globe,
  BarChart3,
  TrendingUp,
  Calendar,
  Users,
  Trophy,
  Medal
} from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import GlobalLeaderboard from '@/components/GlobalLeaderBoard'
import { leaderboardData } from '@/constant/leaderBoardRanking'

const Page = () => {
  return (
    <div className='min-h-screen p-2 sm:p-4 md:p-6 lg:p-8 text-white'>
      <header className='mb-6 sm:mb-8 space-y-4 flex flex-col xl:flex-row justify-between items-center'>
        <div className='text-center xl:text-left'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2'>
            Leader Board
          </h1>
          <p className='text-slate-400 text-sm sm:text-base md:text-lg'>
            See who&#39;s leading the pack in our global quiz rankings.
          </p>
        </div>
        <div className='flex flex-wrap gap-2 justify-center items-center'>
          <Button className='bg-slate-700 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2'>
            Find Friends
          </Button>
          <Button className='bg-slate-700 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2'>
            Your Ranking
          </Button>
        </div>
      </header>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mx-auto max-w-7xl'>
        {/* Competition Stats Card */}
        <Card className='bg-transparent col-span-1 py-4 sm:py-6'>
          <CardHeader>
            <CardTitle className='text-white text-lg sm:text-xl font-bold'>
              Competition Stats
            </CardTitle>
            <CardDescription className='text-slate-400 text-sm sm:text-base'>
              Current season statistics and your ranking
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4 sm:space-y-6'>
            {/* Active Participants */}
            <div className='flex items-center justify-between text-sm sm:text-base'>
              <span className='text-slate-400'>Active Participants</span>
              <span className='text-white font-bold'>1,248</span>
            </div>

            {/* Top Badge */}
            <div className='flex items-center justify-between text-sm sm:text-base'>
              <span className='text-slate-400'>Top Badge</span>
              <div className='flex items-center gap-2'>
                <Medal size={14} className='text-yellow-400 sm:w-5 sm:h-5' />
                <span className='text-white font-medium'>
                  Diamond (5 users)
                </span>
              </div>
            </div>

            <div className='space-y-3 sm:space-y-4'>
              {/* Your Rank */}
              <div className='flex items-center bg-main flex-col w-full p-3 sm:p-4 rounded-xl gap-1 sm:gap-2'>
                <div className='flex items-center justify-between w-full'>
                  <div className='flex items-center gap-1 sm:gap-2'>
                    <Users className='w-4 h-4 sm:w-5 sm:h-5 text-slate-400' />
                    <span className='text-slate-400 text-xs sm:text-sm'>
                      Your Rank
                    </span>
                  </div>
                  <Badge className='bg-default hover:bg-default-hover text-xs sm:text-sm'>
                    #42
                  </Badge>
                </div>

                {/* Progress Info */}
                <div className='flex flex-row justify-between text-xs sm:text-sm text-slate-400 w-full'>
                  <span>Next Level</span>
                  <span className='text-white-primary'>
                    3,250 / 4,000 points
                  </span>
                </div>

                {/* Progress Bar */}
                <div className='w-full bg-slate-700 rounded-full h-1.5 sm:h-2'>
                  <div
                    className='bg-white h-1.5 sm:h-2 rounded-full'
                    style={{ width: '81.25%' }}
                  />
                </div>

                {/* Next Level Info */}
                <div className='flex items-center justify-between w-full text-xs sm:text-sm'>
                  <div className='flex items-center gap-1 sm:gap-2 text-slate-400'>
                    <Trophy className='w-3 h-3 sm:w-4 sm:h-4' />
                    <span>Silver</span>
                  </div>
                  <span className='text-white-primary'>750 points to Gold</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard Highlights */}
        <Card className='bg-transparent border-slate-700 col-span-1 lg:col-span-2 py-4 sm:py-6'>
          <CardHeader>
            <CardTitle className='text-white text-lg sm:text-xl md:text-2xl font-bold'>
              Leaderboard Highlights
            </CardTitle>
            <CardDescription className='text-slate-400 text-sm sm:text-base'>
              Top performers across different categories and time periods
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4 sm:space-y-6'>
            <Tabs defaultValue='global' className='w-full'>
              <TabsList className='grid w-full grid-cols-3 bg-slate-700 mb-4'>
                <TabsTrigger
                  value='global'
                  className='data-[state=active]:bg-slate-600 text-xs sm:text-sm'
                >
                  <Globe className='w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2' />
                  Global
                </TabsTrigger>
                <TabsTrigger
                  value='category'
                  className='data-[state=active]:bg-slate-600 text-xs sm:text-sm'
                >
                  <BarChart3 className='w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2' />
                  By Category
                </TabsTrigger>
                <TabsTrigger
                  value='trending'
                  className='data-[state=active]:bg-slate-600 text-xs sm:text-sm'
                >
                  <TrendingUp className='w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2' />
                  Trending
                </TabsTrigger>
              </TabsList>

              <div className='flex flex-wrap gap-2'>
                <Button
                  variant='default'
                  size='sm'
                  className='bg-default hover:bg-default-hover text-xs sm:text-sm'
                >
                  All Time
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  className='border-slate-600 text-slate-300 hover:bg-slate-700 text-xs sm:text-sm'
                >
                  <Calendar className='w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2' />
                  Monthly
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  className='border-slate-600 text-slate-300 hover:bg-slate-700 text-xs sm:text-sm'
                >
                  <Calendar className='w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2' />
                  Weekly
                </Button>
              </div>

              <Select defaultValue='all'>
                <SelectTrigger className='w-full bg-slate-700 border-slate-600 text-white text-xs sm:text-sm'>
                  <SelectValue placeholder='Select category' />
                </SelectTrigger>
                <SelectContent className='bg-slate-700 border-slate-600 text-xs sm:text-sm'>
                  <SelectItem value='all'>All Categories</SelectItem>
                  <SelectItem value='coding'>Coding</SelectItem>
                  <SelectItem value='design'>Design</SelectItem>
                  <SelectItem value='marketing'>Marketing</SelectItem>
                </SelectContent>
              </Select>

              <TabsContent value='global' className='space-y-4'>
                {/* Global Leaderboard */}
                <div className='relative'>
                  {/* Leaderboard Items */}
                  {leaderboardData.map((user) => {
                    if (user.rank === 1) {
                      return (
                        <div
                          key={user.rank}
                          className='flex flex-col items-center mb-6 sm:mb-8'
                        >
                          <div className='relative'>
                            <div
                              className={`w-16 sm:w-20 h-16 sm:h-20 rounded-full overflow-hidden border-4 ${user.borderColor}`}
                            >
                              <Image
                                src={user.avatar}
                                alt={user.name}
                                width={80}
                                height={80}
                                className='w-full h-full object-cover'
                              />
                            </div>
                            <div
                              className={`absolute -top-2 -right-2 w-6 sm:w-8 h-6 sm:h-8 ${user.rankBgColor} rounded-full flex items-center justify-center`}
                            >
                              <span
                                className={`font-bold text-xs sm:text-sm ${user.rankTextColor}`}
                              >
                                {user.rank}
                              </span>
                            </div>
                            <div className='absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2'>
                              <div className='w-5 sm:w-6 h-5 sm:h-6 text-yellow-400'>
                                👑
                              </div>
                            </div>
                          </div>
                          <h3 className='text-white font-bold text-sm sm:text-base mt-2'>
                            {user.name}
                          </h3>
                          <p className='text-slate-300 text-xs sm:text-sm'>
                            {user.points.toLocaleString()} pts
                          </p>
                          <div className='flex items-center gap-1 sm:gap-2 mt-1'>
                            <Badge
                              className={`${user.badgeColor} text-xs sm:text-sm`}
                            >
                              {user.badge === 'Diamond' ? '💎' : ''}{' '}
                              {user.badge}
                            </Badge>
                            <Badge
                              variant='outline'
                              className='border-yellow-400 text-yellow-400 text-xs sm:text-sm'
                            >
                              ⭐{user.stars}
                            </Badge>
                          </div>
                        </div>
                      )
                    }
                    return null
                  })}

                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                    {leaderboardData.map((user) => {
                      if (user.rank === 2 || user.rank === 3) {
                        return (
                          <div
                            key={user.rank}
                            className='flex flex-col items-center mb-6 sm:mb-8'
                          >
                            <div className='relative'>
                              <div
                                className={`w-16 sm:w-20 h-16 sm:h-20 rounded-full overflow-hidden border-4 ${user.borderColor}`}
                              >
                                <Image
                                  src={user.avatar}
                                  alt={user.name}
                                  width={80}
                                  height={80}
                                  className='w-full h-full object-cover'
                                />
                              </div>
                              <div
                                className={`absolute -top-2 -right-2 w-6 sm:w-8 h-6 sm:h-8 ${user.rankBgColor} rounded-full flex items-center justify-center`}
                              >
                                <span
                                  className={`font-bold text-xs sm:text-sm ${user.rankTextColor}`}
                                >
                                  {user.rank}
                                </span>
                              </div>
                              <div className='absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2'>
                                <div className='w-5 sm:w-6 h-5 sm:h-6 text-yellow-400'>
                                  👑
                                </div>
                              </div>
                            </div>
                            <div className='text-center mt-2'>
                              <h3 className='text-white font-bold text-sm sm:text-base'>
                                {user.name}
                              </h3>
                              <p className='text-slate-300 text-xs sm:text-sm'>
                                {user.points.toLocaleString()} pts
                              </p>
                              <div className='flex items-center gap-1 sm:gap-2 mt-1'>
                                <Badge
                                  className={`${user.badgeColor} text-xs sm:text-sm`}
                                >
                                  {user.badge === 'Diamond' ? '💎' : ''}{' '}
                                  {user.badge}
                                </Badge>
                                <Badge
                                  variant='outline'
                                  className='border-yellow-400 text-yellow-400 text-xs sm:text-sm'
                                >
                                  ⭐{user.stars}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        )
                      }
                      return null
                    })}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <GlobalLeaderboard />
    </div>
  )
}

export default Page
