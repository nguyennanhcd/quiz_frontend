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

const Page = () => {
  return (
    <div className='min-h-screen bg-slate-900 text-white-primary sm:p-6 lg:p-8'>
      <header className='mb-8 max-w-7xl mx-auto space-y-2'>
        <h1 className='text-4xl font-bold mb-2'>Explore Quizzes</h1>
        <p className='text-slate-400 text-lg'>
          Discover and play quizzes from our community
        </p>
      </header>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto'>
        <Card className='bg-slate-800 border-slate-700 col-span-1'>
          <CardHeader>
            <CardTitle className='text-white text-2xl font-bold'>
              Your Stats
            </CardTitle>
            <CardDescription className='text-slate-400'>
              Your performance overview
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

            {/* Your Rank */}
            <div className='space-y-4'>
              <div className='flex items-center gap-2'>
                <Users className='w-5 h-5 text-slate-400' />
                <span className='text-slate-400'>Your Rank</span>
                <Badge className='bg-blue-600 hover:bg-blue-700'>#42</Badge>
              </div>

              {/* Progress */}
              <div className='space-y-2'>
                <div className='flex justify-between text-sm'>
                  <span className='text-slate-400'>Next Level</span>
                  <span className='text-slate-300'>3,250 / 4,000 points</span>
                </div>
                <div className='w-full bg-slate-700 rounded-full h-2'>
                  <div
                    className='bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full'
                    style={{ width: '81.25%' }}
                  ></div>
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Trophy className='w-5 h-5 text-slate-400' />
                  <span className='text-slate-400'>Silver</span>
                </div>
                <span className='text-slate-300'>750 points to Gold</span>
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
            {/* Tabs */}
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

              {/* Time Period Filters */}
              <div className='flex gap-2 flex-wrap'>
                <Button
                  variant='default'
                  size='sm'
                  className='bg-blue-600 hover:bg-blue-700'
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

              {/* Category Selector */}
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
                {/* Top 3 Leaderboard */}
                <div className='relative'>
                  {/* #1 - Center */}
                  <div className='flex flex-col items-center mb-8'>
                    <div className='relative'>
                      <div className='w-20 h-20 rounded-full overflow-hidden border-4 border-yellow-400'>
                        <Image
                          src='/placeholder.svg?height=80&width=80'
                          alt='Alex Johnson'
                          width={80}
                          height={80}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div className='absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center'>
                        <span className='text-slate-900 font-bold text-sm'>
                          1
                        </span>
                      </div>
                      <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                        <div className='w-6 h-6 text-yellow-400'>👑</div>
                      </div>
                    </div>
                    <div className='text-center mt-2'>
                      <h3 className='text-white font-bold'>Alex Johnson</h3>
                      <p className='text-slate-300'>9,850 pts</p>
                      <div className='flex items-center gap-2 mt-1'>
                        <Badge className='bg-blue-600 hover:bg-blue-700 text-xs'>
                          💎 Diamond
                        </Badge>
                        <Badge
                          variant='outline'
                          className='border-yellow-400 text-yellow-400 text-xs'
                        >
                          ⭐78
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* #2 and #3 */}
                  <div className='grid grid-cols-2 gap-4'>
                    {/* #2 - Left */}
                    <div className='flex flex-col items-center'>
                      <div className='relative'>
                        <div className='w-16 h-16 rounded-full overflow-hidden border-4 border-slate-400'>
                          <Image
                            src='/placeholder.svg?height=64&width=64'
                            alt='Sarah Williams'
                            width={64}
                            height={64}
                            className='w-full h-full object-cover'
                          />
                        </div>
                        <div className='absolute -top-1 -right-1 w-6 h-6 bg-slate-400 rounded-full flex items-center justify-center'>
                          <span className='text-slate-900 font-bold text-xs'>
                            2
                          </span>
                        </div>
                      </div>
                      <div className='text-center mt-2'>
                        <h3 className='text-white font-medium'>
                          Sarah Williams
                        </h3>
                        <p className='text-slate-300 text-sm'>8,720 pts</p>
                        <div className='flex flex-col gap-1 mt-1'>
                          <Badge
                            variant='secondary'
                            className='bg-slate-600 text-xs'
                          >
                            Platinum
                          </Badge>
                          <Badge
                            variant='outline'
                            className='border-yellow-400 text-yellow-400 text-xs'
                          >
                            ⭐65
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* #3 - Right */}
                    <div className='flex flex-col items-center'>
                      <div className='relative'>
                        <div className='w-16 h-16 rounded-full overflow-hidden border-4 border-amber-600'>
                          <Image
                            src='/placeholder.svg?height=64&width=64'
                            alt='Michael Brown'
                            width={64}
                            height={64}
                            className='w-full h-full object-cover'
                          />
                        </div>
                        <div className='absolute -top-1 -right-1 w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center'>
                          <span className='text-white font-bold text-xs'>
                            3
                          </span>
                        </div>
                      </div>
                      <div className='text-center mt-2'>
                        <h3 className='text-white font-medium'>
                          Michael Brown
                        </h3>
                        <p className='text-slate-300 text-sm'>7,640 pts</p>
                        <div className='flex flex-col gap-1 mt-1'>
                          <Badge className='bg-amber-600 hover:bg-amber-700 text-xs'>
                            Gold
                          </Badge>
                          <Badge
                            variant='outline'
                            className='border-yellow-400 text-yellow-400 text-xs'
                          >
                            ⭐59
                          </Badge>
                        </div>
                      </div>
                    </div>
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
