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
import { Globe, BarChart3, TrendingUp, Calendar } from 'lucide-react'
import Image from 'next/image'

// Mock data for leaderboard
const leaderboardData = [
  {
    rank: 1,
    name: 'Alex Chen',
    points: 15420,
    avatar: '/professional-avatar-1.png',
    badge: 'Diamond',
    badgeColor: 'bg-blue-600 hover:bg-blue-700',
    borderColor: 'border-yellow-400',
    rankBgColor: 'bg-yellow-400',
    rankTextColor: 'text-black',
    stars: 5
  },
  {
    rank: 2,
    name: 'Sarah Kim',
    points: 14850,
    avatar: '/professional-avatar-2.png',
    badge: 'Diamond',
    badgeColor: 'bg-blue-600 hover:bg-blue-700',
    borderColor: 'border-gray-400',
    rankBgColor: 'bg-gray-400',
    rankTextColor: 'text-black',
    stars: 5
  },
  {
    rank: 3,
    name: 'Mike Johnson',
    points: 13920,
    avatar: '/professional-avatar-3.png',
    badge: 'Diamond',
    badgeColor: 'bg-blue-600 hover:bg-blue-700',
    borderColor: 'border-orange-400',
    rankBgColor: 'bg-orange-400',
    rankTextColor: 'text-black',
    stars: 4
  }
]

export function LeaderboardHighlights() {
  return (
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
              className='bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm'
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
              {/* First Place */}
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
                            src={user.avatar || '/placeholder.svg'}
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
                          💎 {user.badge}
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

              {/* Second and Third Place */}
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
                              src={user.avatar || '/placeholder.svg'}
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
                              💎 {user.badge}
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

          <TabsContent value='category' className='space-y-4'>
            <div className='text-center text-slate-400 py-8'>
              Category leaderboards coming soon...
            </div>
          </TabsContent>

          <TabsContent value='trending' className='space-y-4'>
            <div className='text-center text-slate-400 py-8'>
              Trending leaderboards coming soon...
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
