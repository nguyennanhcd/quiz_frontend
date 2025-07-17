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
  Trophy
} from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { leaderboardData } from '@/constant/leaderBoardRanking'

const Page = () => {
  return (
    <div className='min-h-scree text-white-primary sm:p-6 lg:p-8'>
      <header className='mb-8 max-w-7xl mx-auto space-y-2 flex flex-col xl:flex-row justify-between'>
        <div>
          <h1 className='text-4xl font-bold mb-2'>Leader Board</h1>
          <p className='text-slate-400 text-lg'>
            See who&#39;s leading the pack in our global quiz rankings.
          </p>
        </div>
        <div className='flex gap-2 justify-center items-center'>
          <Button className='bg-slate-700'>Find Friends</Button>
          <Button>Your Ranking</Button>
        </div>
      </header>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto'>
        {/* Competition Stats Card */}
        <Card className='bg-transparent col-span-1'>
          <CardHeader>
            <CardTitle className='text-white text-2xl font-bold'>
              Competition Stats
            </CardTitle>
            <CardDescription className='text-slate-400'>
              Current season statistics and your ranking
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-6'>
            {/* Active Participants */}
            <div className='flex items-center justify-between'>
              <span className='text-slate-400'>Active Participants</span>
              <span className='text-white font-bold text-xl'>1,248</span>
            </div>

            {/* Top Badge */}
            <div className='flex items-center justify-between'>
              <span className='text-slate-400'>Top Badge</span>
              <div className='flex items-center gap-2'>
                <div className='w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center'>
                  <div className='w-3 h-3 bg-white rounded-full'></div>
                </div>
                <span className='text-white font-medium'>
                  Diamond (5 users)
                </span>
              </div>
            </div>

            <div className='space-y-4'>
              {/* Your Rank */}
              <div className='flex items-center  bg-main flex-col w-full p-4 rounded-xl gap-1'>
                <div className='flex items-center justify-between w-full '>
                  <div className='flex items-center gap-1'>
                    <Users className='w-5 h-5 text-slate-400' />
                    <span className='text-slate-400 text-sm'>Your Rank</span>
                  </div>
                  <Badge className='bg-default hover:bg-default-hover'>
                    #42
                  </Badge>
                </div>

                {/* Progress Info */}
                <div className='flex flex-row justify-between text-xs text-slate-400 w-full'>
                  <span className='text-sm'>Next Level</span>
                  <span className='text-white-primary text-sm'>
                    3,250 / 4,000 points
                  </span>
                </div>

                {/* Progress Bar */}
                <div className='w-full bg-slate-700 rounded-full h-2'>
                  <div
                    className='bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full'
                    style={{ width: '81.25%' }}
                  />
                </div>

                {/* Next Level Info */}
                <div className='flex items-center justify-between w-full'>
                  <div className='flex items-center gap-2 text-slate-400'>
                    <Trophy className='w-4- h-4' />
                    <span className='text-sm'>Silver</span>
                  </div>
                  <span className='text-white-primary text-sm'>
                    750 points to Gold
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard Highlights */}
        <Card className='bg-slate-800 border-slate-700 col-span-2'>
          <CardHeader>
            <CardTitle className='text-white text-2xl font-bold'>
              Leaderboard Highlights
            </CardTitle>
            <CardDescription className='text-slate-400'>
              Top performers across different categories and time periods
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-6'>
            <Tabs defaultValue='global' className='w-full'>
              <TabsList className='grid w-full grid-cols-3 bg-slate-700'>
                <TabsTrigger
                  value='global'
                  className='data-[state=active]:bg-slate-600'
                >
                  <Globe className='w-4 h-4 mr-2' />
                  Global
                </TabsTrigger>
                <TabsTrigger
                  value='category'
                  className='data-[state=active]:bg-slate-600'
                >
                  <BarChart3 className='w-4 h-4 mr-2' />
                  By Category
                </TabsTrigger>
                <TabsTrigger
                  value='trending'
                  className='data-[state=active]:bg-slate-600'
                >
                  <TrendingUp className='w-4 h-4 mr-2' />
                  Trending
                </TabsTrigger>
              </TabsList>

              <div className='flex gap-2 flex-wrap'>
                <Button
                  variant='default'
                  size='sm'
                  className='bg-default hover:bg-default-hover'
                >
                  All Time
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  className='border-slate-600 text-slate-300 hover:bg-slate-700'
                >
                  <Calendar className='w-4 h-4 mr-2' />
                  Monthly
                </Button>
                <Button
                  variant='outline'
                  size='sm'
                  className='border-slate-600 text-slate-300 hover:bg-slate-700'
                >
                  <Calendar className='w-4 h-4 mr-2' />
                  Weekly
                </Button>
              </div>

              <Select defaultValue='all'>
                <SelectTrigger className='w-full bg-slate-700 border-slate-600 text-white'>
                  <SelectValue placeholder='Select category' />
                </SelectTrigger>
                <SelectContent className='bg-slate-700 border-slate-600'>
                  <SelectItem value='all'>All Categories</SelectItem>
                  <SelectItem value='coding'>Coding</SelectItem>
                  <SelectItem value='design'>Design</SelectItem>
                  <SelectItem value='marketing'>Marketing</SelectItem>
                </SelectContent>
              </Select>

              <TabsContent value='global' className='space-y-4'>
                <div className='relative'>
                  {leaderboardData.map((user) => {
                    if (user.rank === 1) {
                      return (
                        <div
                          key={user.rank}
                          className='flex flex-col items-center mb-8'
                        >
                          <div className='relative'>
                            <div
                              className={`w-20 h-20 rounded-full overflow-hidden border-4 ${user.borderColor}`}
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
                              className={`absolute -top-2 -right-2 w-8 h-8 ${user.rankBgColor} rounded-full flex items-center justify-center`}
                            >
                              <span
                                className={`font-bold text-sm ${user.rankTextColor}`}
                              >
                                {user.rank}
                              </span>
                            </div>
                            <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                              <div className='w-6 h-6 text-yellow-400'>👑</div>
                            </div>
                          </div>
                          <div className='text-center mt-2'>
                            <h3 className='text-white font-bold'>
                              {user.name}
                            </h3>
                            <p className='text-slate-300'>
                              {user.points.toLocaleString()} pts
                            </p>
                            <div className='flex items-center gap-2 mt-1'>
                              <Badge className={`${user.badgeColor} text-xs`}>
                                {user.badge === 'Diamond' ? '💎' : ''}{' '}
                                {user.badge}
                              </Badge>
                              <Badge
                                variant='outline'
                                className='border-yellow-400 text-yellow-400 text-xs'
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

                  <div className='grid grid-cols-2 gap-4'>
                    {leaderboardData.map((user) => {
                      if (user.rank === 2 || user.rank === 3) {
                        return (
                          <div
                            key={user.rank}
                            className='flex flex-col items-center'
                          >
                            <div className='relative'>
                              <div
                                className={`w-16 h-16 rounded-full overflow-hidden border-4 ${user.borderColor}`}
                              >
                                <Image
                                  src={user.avatar}
                                  alt={user.name}
                                  width={64}
                                  height={64}
                                  className='w-full h-full object-cover'
                                />
                              </div>
                              <div
                                className={`absolute -top-1 -right-1 w-6 h-6 ${user.rankBgColor} rounded-full flex items-center justify-center`}
                              >
                                <span
                                  className={`font-bold text-xs ${user.rankTextColor}`}
                                >
                                  {user.rank}
                                </span>
                              </div>
                            </div>
                            <div className='text-center mt-2'>
                              <h3 className='text-white font-medium'>
                                {user.name}
                              </h3>
                              <p className='text-slate-300 text-sm'>
                                {user.points.toLocaleString()} pts
                              </p>
                              <div className='flex flex-col gap-1 mt-1'>
                                <Badge className={`${user.badgeColor} text-xs`}>
                                  {user.badge}
                                </Badge>
                                <Badge
                                  variant='outline'
                                  className='border-yellow-400 text-yellow-400 text-xs'
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
    </div>
  )
}

export default Page
