'use client'

import { useState, useEffect } from 'react'
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
  Trophy,
  Star,
  Zap,
  Target,
  Clock,
  Users,
  TrendingDown,
  Minus
} from 'lucide-react'
import Image from 'next/image'

interface LeaderboardUser {
  id: string
  rank: number
  name: string
  username: string
  points: number
  avatar: string
  badge: 'Diamond' | 'Platinum' | 'Gold' | 'Silver' | 'Bronze'
  badgeColor: string
  borderColor: string
  rankBgColor: string
  rankTextColor: string
  stars: number
  streak: number
  quizzesCompleted: number
  winRate: number
  change: number // rank change from previous period
  category?: string
  isOnline?: boolean
  lastActive?: string
}

interface Category {
  id: string
  name: string
  icon: string
  color: string
  totalUsers: number
}

// Comprehensive mock data
const mockUsers: LeaderboardUser[] = [
  {
    id: '1',
    rank: 1,
    name: 'Alex Chen',
    username: '@alexchen',
    points: 15420,
    avatar: '/avatarPlaceholder.webp',
    badge: 'Diamond',
    badgeColor: 'bg-blue-600 hover:bg-blue-700',
    borderColor: 'border-yellow-400',
    rankBgColor: 'bg-yellow-400',
    rankTextColor: 'text-black',
    stars: 5,
    streak: 12,
    quizzesCompleted: 245,
    winRate: 94.2,
    change: 0,
    isOnline: true,
    lastActive: '2 minutes ago'
  },
  {
    id: '2',
    rank: 2,
    name: 'Sarah Kim',
    username: '@sarahkim',
    points: 14850,
    avatar: '/avatarPlaceholder.webp',
    badge: 'Diamond',
    badgeColor: 'bg-blue-600 hover:bg-blue-700',
    borderColor: 'border-gray-400',
    rankBgColor: 'bg-gray-400',
    rankTextColor: 'text-black',
    stars: 5,
    streak: 8,
    quizzesCompleted: 198,
    winRate: 91.8,
    change: 1,
    isOnline: false,
    lastActive: '1 hour ago'
  },
  {
    id: '3',
    rank: 3,
    name: 'Mike Johnson',
    username: '@mikejohnson',
    points: 13920,
    avatar: '/avatarPlaceholder.webp',
    badge: 'Diamond',
    badgeColor: 'bg-blue-600 hover:bg-blue-700',
    borderColor: 'border-orange-400',
    rankBgColor: 'bg-orange-400',
    rankTextColor: 'text-black',
    stars: 4,
    streak: 15,
    quizzesCompleted: 167,
    winRate: 89.5,
    change: -1,
    isOnline: true,
    lastActive: '5 minutes ago'
  },
  {
    id: '4',
    rank: 4,
    name: 'Emma Wilson',
    username: '@emmawilson',
    points: 13280,
    avatar: '/avatarPlaceholder.webp',
    badge: 'Platinum',
    badgeColor: 'bg-slate-600',
    borderColor: 'border-slate-400',
    rankBgColor: 'bg-slate-400',
    rankTextColor: 'text-white',
    stars: 4,
    streak: 6,
    quizzesCompleted: 189,
    winRate: 87.3,
    change: 2,
    isOnline: true,
    lastActive: '10 minutes ago'
  },
  {
    id: '5',
    rank: 5,
    name: 'David Park',
    username: '@davidpark',
    points: 12890,
    avatar: '/avatarPlaceholder.webp',
    badge: 'Platinum',
    badgeColor: 'bg-slate-600',
    borderColor: 'border-slate-400',
    rankBgColor: 'bg-slate-400',
    rankTextColor: 'text-white',
    stars: 4,
    streak: 9,
    quizzesCompleted: 156,
    winRate: 85.7,
    change: -1,
    isOnline: false,
    lastActive: '3 hours ago'
  }
]

const categoryUsers: Record<string, LeaderboardUser[]> = {
  coding: [
    { ...mockUsers[0], category: 'coding', rank: 1 },
    { ...mockUsers[2], category: 'coding', rank: 2 },
    { ...mockUsers[4], category: 'coding', rank: 3 }
  ],
  design: [
    { ...mockUsers[1], category: 'design', rank: 1 },
    { ...mockUsers[3], category: 'design', rank: 2 },
    { ...mockUsers[0], category: 'design', rank: 3 }
  ],
  marketing: [
    { ...mockUsers[3], category: 'marketing', rank: 1 },
    { ...mockUsers[1], category: 'marketing', rank: 2 },
    { ...mockUsers[2], category: 'marketing', rank: 3 }
  ]
}

const trendingUsers: LeaderboardUser[] = [
  { ...mockUsers[3], rank: 1, change: 5 }, // Emma Wilson trending up
  { ...mockUsers[4], rank: 2, change: 3 }, // David Park trending up
  { ...mockUsers[0], rank: 3, change: 0 } // Alex Chen stable
]

const categories: Category[] = [
  {
    id: 'coding',
    name: 'Coding',
    icon: '💻',
    color: 'text-blue-400',
    totalUsers: 1247
  },
  {
    id: 'design',
    name: 'Design',
    icon: '🎨',
    color: 'text-purple-400',
    totalUsers: 892
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: '📈',
    color: 'text-green-400',
    totalUsers: 654
  },
  {
    id: 'science',
    name: 'Science',
    icon: '🔬',
    color: 'text-red-400',
    totalUsers: 445
  },
  {
    id: 'history',
    name: 'History',
    icon: '📚',
    color: 'text-yellow-400',
    totalUsers: 334
  }
]

type TimePeriod = 'all-time' | 'monthly' | 'weekly' | 'daily'
type ActiveTab = 'global' | 'category' | 'trending'

export function LeaderboardHighlights() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('global')
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('all-time')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(false)
  const [users] = useState<LeaderboardUser[]>(mockUsers)

  // Simulate loading state
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [activeTab, timePeriod, selectedCategory])

  const getFilteredUsers = (): LeaderboardUser[] => {
    if (activeTab === 'category' && selectedCategory !== 'all') {
      return categoryUsers[selectedCategory] || []
    }
    if (activeTab === 'trending') {
      return trendingUsers
    }
    return users
  }

  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className='w-3 h-3 text-green-400' />
    if (change < 0) return <TrendingDown className='w-3 h-3 text-red-400' />
    return <Minus className='w-3 h-3 text-slate-400' />
  }

  const getChangeText = (change: number) => {
    if (change > 0) return `+${change}`
    if (change < 0) return `${change}`
    return '0'
  }

  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-400'
    if (change < 0) return 'text-red-400'
    return 'text-slate-400'
  }

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'Diamond':
        return '💎'
      case 'Platinum':
        return '🥇'
      case 'Gold':
        return '🥈'
      case 'Silver':
        return '🥉'
      case 'Bronze':
        return '🏅'
      default:
        return '⭐'
    }
  }

  const filteredUsers = getFilteredUsers()

  return (
    <Card className='bg-transparent border-slate-700 col-span-2 lg:col-span-2 py-4 sm:py-6'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <div>
            <CardTitle className='text-white text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2'>
              <Trophy className='w-5 h-5 sm:w-6 sm:h-6 text-yellow-400' />
              Leaderboard Highlights
            </CardTitle>
            <CardDescription className='text-slate-400 text-sm sm:text-base'>
              Top performers across different categories and time periods
            </CardDescription>
          </div>
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-1 text-xs text-slate-400'>
              <Users className='w-3 h-3' />
              <span>{filteredUsers.length} active</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className='space-y-4 sm:space-y-6'>
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as ActiveTab)}
          className='w-full'
        >
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

          {/* Time Period Filters */}
          <div className='flex flex-wrap gap-2 mb-4'>
            <Button
              variant={timePeriod === 'all-time' ? 'default' : 'outline'}
              size='sm'
              onClick={() => setTimePeriod('all-time')}
              className={`text-xs sm:text-sm ${
                timePeriod === 'all-time'
                  ? 'bg-default hover:bg-default-hover'
                  : 'border-slate-600 text-slate-300 hover:bg-slate-700'
              }`}
            >
              All Time
            </Button>
            <Button
              variant={timePeriod === 'monthly' ? 'default' : 'outline'}
              size='sm'
              onClick={() => setTimePeriod('monthly')}
              className={`text-xs sm:text-sm ${
                timePeriod === 'monthly'
                  ? 'bg-default hover:bg-default-hover'
                  : 'border-slate-600 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Calendar className='w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2' />
              Monthly
            </Button>
            <Button
              variant={timePeriod === 'weekly' ? 'default' : 'outline'}
              size='sm'
              onClick={() => setTimePeriod('weekly')}
              className={`text-xs sm:text-sm ${
                timePeriod === 'weekly'
                  ? 'bg-default hover:bg-default-hover'
                  : 'border-slate-600 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Calendar className='w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2' />
              Weekly
            </Button>
            <Button
              variant={timePeriod === 'daily' ? 'default' : 'outline'}
              size='sm'
              onClick={() => setTimePeriod('daily')}
              className={`text-xs sm:text-sm ${
                timePeriod === 'daily'
                  ? 'bg-default hover:bg-default-hover'
                  : 'border-slate-600 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Clock className='w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2' />
              Daily
            </Button>
          </div>

          {/* Category Selector - Only show for category tab */}
          {activeTab === 'category' && (
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className='w-full bg-slate-700 border-slate-600 text-white text-xs sm:text-sm mb-4'>
                <SelectValue placeholder='Select category' />
              </SelectTrigger>
              <SelectContent className='bg-slate-700 border-slate-600 text-xs sm:text-sm'>
                <SelectItem value='all'>All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    <div className='flex items-center gap-2'>
                      <span className='text-lg'>{category.icon}</span>
                      <span>{category.name}</span>
                      <span className='text-slate-400'>
                        ({category.totalUsers})
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className='flex items-center justify-center py-8'>
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-white'></div>
            </div>
          )}

          <TabsContent value='global' className='space-y-4'>
            {!isLoading && (
              <div className='relative'>
                <div className='flex items-end justify-center gap-4 mb-8'>
                  {/* Second Place - Left */}
                  {filteredUsers[1] && (
                    <div className='flex flex-col items-center'>
                      <div className='relative mb-3'>
                        <div className='w-20 h-20 rounded-full overflow-hidden border-4 border-slate-400'>
                          <Image
                            src={filteredUsers[1].avatar || '/placeholder.svg'}
                            alt={filteredUsers[1].name}
                            width={80}
                            height={80}
                            className='w-full h-full object-cover'
                          />
                        </div>
                        <div className='absolute -top-2 -right-2 w-8 h-8 bg-slate-400 rounded-full flex items-center justify-center'>
                          <span className='font-bold text-sm text-black'>
                            2
                          </span>
                        </div>
                        {filteredUsers[1].isOnline && (
                          <div className='absolute -bottom-1 -left-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900' />
                        )}
                      </div>
                      <h3 className='text-white font-bold text-base mb-1'>
                        {filteredUsers[1].name}
                      </h3>
                      <p className='text-slate-300 text-sm mb-2'>
                        {filteredUsers[1].points.toLocaleString()} pts
                      </p>
                      <div className='flex items-center gap-2 mb-2'>
                        <Badge className='bg-slate-600 hover:bg-slate-700 text-xs'>
                          💎 Platinum
                        </Badge>
                        <Badge
                          variant='outline'
                          className='border-yellow-400 text-yellow-400 text-xs'
                        >
                          ⭐65
                        </Badge>
                      </div>
                      <div className='bg-slate-800/50 rounded-lg p-4 w-32 h-24'></div>
                    </div>
                  )}

                  {/* First Place - Center (Elevated) */}
                  {filteredUsers[0] && (
                    <div className='flex flex-col items-center -mt-8'>
                      <div className='relative mb-3'>
                        <div className='w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400'>
                          <Image
                            src={filteredUsers[0].avatar || '/placeholder.svg'}
                            alt={filteredUsers[0].name}
                            width={96}
                            height={96}
                            className='w-full h-full object-cover'
                          />
                        </div>
                        <div className='absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center'>
                          <span className='font-bold text-sm text-black'>
                            1
                          </span>
                        </div>
                        <div className='absolute -top-6 left-1/2 transform -translate-x-1/2'>
                          <div className='text-3xl'>👑</div>
                        </div>
                        {filteredUsers[0].isOnline && (
                          <div className='absolute -bottom-1 -left-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900' />
                        )}
                      </div>
                      <h3 className='text-white font-bold text-lg mb-1'>
                        {filteredUsers[0].name}
                      </h3>
                      <p className='text-slate-300 text-base mb-2'>
                        {filteredUsers[0].points.toLocaleString()} pts
                      </p>
                      <div className='flex items-center gap-2 mb-2'>
                        <Badge className='bg-blue-600 hover:bg-blue-700 text-sm'>
                          💎 Diamond
                        </Badge>
                        <Badge
                          variant='outline'
                          className='border-yellow-400 text-yellow-400 text-sm'
                        >
                          ⭐78
                        </Badge>
                      </div>
                      <div className='bg-slate-800/50 rounded-lg p-4 w-36 h-32'></div>
                    </div>
                  )}

                  {/* Third Place - Right */}
                  {filteredUsers[2] && (
                    <div className='flex flex-col items-center'>
                      <div className='relative mb-3'>
                        <div className='w-20 h-20 rounded-full overflow-hidden border-4 border-orange-400'>
                          <Image
                            src={filteredUsers[2].avatar || '/placeholder.svg'}
                            alt={filteredUsers[2].name}
                            width={80}
                            height={80}
                            className='w-full h-full object-cover'
                          />
                        </div>
                        <div className='absolute -top-2 -right-2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center'>
                          <span className='font-bold text-sm text-black'>
                            3
                          </span>
                        </div>
                        {filteredUsers[2].isOnline && (
                          <div className='absolute -bottom-1 -left-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900' />
                        )}
                      </div>
                      <h3 className='text-white font-bold text-base mb-1'>
                        {filteredUsers[2].name}
                      </h3>
                      <p className='text-slate-300 text-sm mb-2'>
                        {filteredUsers[2].points.toLocaleString()} pts
                      </p>
                      <div className='flex items-center gap-2 mb-2'>
                        <Badge className='bg-yellow-600 hover:bg-yellow-700 text-xs'>
                          🥇 Gold
                        </Badge>
                        <Badge
                          variant='outline'
                          className='border-yellow-400 text-yellow-400 text-xs'
                        >
                          ⭐59
                        </Badge>
                      </div>
                      <div className='bg-slate-800/50 rounded-lg p-4 w-32 h-20'></div>
                    </div>
                  )}
                </div>

                {/* Additional Stats */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-6'>
                  <div className='bg-slate-800/50 p-3 rounded-lg text-center'>
                    <div className='flex items-center justify-center mb-2'>
                      <Target className='w-4 h-4 text-green-400' />
                    </div>
                    <p className='text-lg font-bold text-white'>
                      {filteredUsers[0]?.winRate}%
                    </p>
                    <p className='text-xs text-slate-400'>Top Win Rate</p>
                  </div>
                  <div className='bg-slate-800/50 p-3 rounded-lg text-center'>
                    <div className='flex items-center justify-center mb-2'>
                      <BarChart3 className='w-4 h-4 text-blue-400' />
                    </div>
                    <p className='text-lg font-bold text-white'>
                      {filteredUsers[0]?.quizzesCompleted}
                    </p>
                    <p className='text-xs text-slate-400'>Most Quizzes</p>
                  </div>
                  <div className='bg-slate-800/50 p-3 rounded-lg text-center'>
                    <div className='flex items-center justify-center mb-2'>
                      <Zap className='w-4 h-4 text-orange-400' />
                    </div>
                    <p className='text-lg font-bold text-white'>
                      {Math.max(...filteredUsers.map((u) => u.streak))}
                    </p>
                    <p className='text-xs text-slate-400'>Longest Streak</p>
                  </div>
                  <div className='bg-slate-800/50 p-3 rounded-lg text-center'>
                    <div className='flex items-center justify-center mb-2'>
                      <Star className='w-4 h-4 text-yellow-400' />
                    </div>
                    <p className='text-lg font-bold text-white'>
                      {Math.max(...filteredUsers.map((u) => u.stars))}
                    </p>
                    <p className='text-xs text-slate-400'>Top Rating</p>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value='category' className='space-y-4'>
            {!isLoading && (
              <div>
                {selectedCategory === 'all' ? (
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className='bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:bg-slate-800/70 transition-colors cursor-pointer'
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <div className='flex items-center gap-3 mb-3'>
                          <div className={`text-2xl ${category.color}`}>
                            {category.icon}
                          </div>
                          <div>
                            <h3 className='text-white font-semibold'>
                              {category.name}
                            </h3>
                            <p className='text-slate-400 text-sm'>
                              {category.totalUsers} users
                            </p>
                          </div>
                        </div>
                        <div className='space-y-2'>
                          {(categoryUsers[category.id] || [])
                            .slice(0, 3)
                            .map((user, index) => (
                              <div
                                key={user.id}
                                className='flex items-center gap-2 text-sm'
                              >
                                <span className='text-slate-400 w-4'>
                                  #{index + 1}
                                </span>
                                <div className='w-6 h-6 rounded-full overflow-hidden'>
                                  <Image
                                    src={user.avatar || '/placeholder.svg'}
                                    alt={user.name}
                                    width={24}
                                    height={24}
                                    className='w-full h-full object-cover'
                                  />
                                </div>
                                <span className='text-white flex-1'>
                                  {user.name}
                                </span>
                                <span className='text-slate-400'>
                                  {user.points.toLocaleString()}
                                </span>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className='space-y-4'>
                    <div className='flex items-center gap-3 mb-4'>
                      <div
                        className={`text-2xl ${
                          categories.find((c) => c.id === selectedCategory)
                            ?.color
                        }`}
                      >
                        {
                          categories.find((c) => c.id === selectedCategory)
                            ?.icon
                        }
                      </div>
                      <div>
                        <h3 className='text-white font-semibold'>
                          {
                            categories.find((c) => c.id === selectedCategory)
                              ?.name
                          }{' '}
                          Leaderboard
                        </h3>
                        <p className='text-slate-400 text-sm'>
                          {
                            categories.find((c) => c.id === selectedCategory)
                              ?.totalUsers
                          }{' '}
                          active users
                        </p>
                      </div>
                    </div>

                    <div className='space-y-3'>
                      {(categoryUsers[selectedCategory] || []).map((user) => (
                        <div
                          key={user.id}
                          className='flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors'
                        >
                          <div className='relative'>
                            <div className='w-10 h-10 rounded-full overflow-hidden'>
                              <Image
                                src={user.avatar || '/placeholder.svg'}
                                alt={user.name}
                                width={40}
                                height={40}
                                className='w-full h-full object-cover'
                              />
                            </div>
                            {user.isOnline && (
                              <div className='absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-slate-900' />
                            )}
                          </div>
                          <div className='flex-1'>
                            <div className='flex items-center gap-2'>
                              <h4 className='text-white font-semibold'>
                                {user.name}
                              </h4>
                              <Badge className={`${user.badgeColor} text-xs`}>
                                {getBadgeIcon(user.badge)} {user.badge}
                              </Badge>
                            </div>
                            <p className='text-slate-400 text-sm'>
                              {user.username}
                            </p>
                          </div>
                          <div className='text-right'>
                            <p className='text-white font-semibold'>
                              {user.points.toLocaleString()} pts
                            </p>
                            <div className='flex items-center gap-1 text-xs'>
                              {getChangeIcon(user.change)}
                              <span className={getChangeColor(user.change)}>
                                {getChangeText(user.change)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </TabsContent>

          <TabsContent value='trending' className='space-y-4'>
            {!isLoading && (
              <div className='space-y-4'>
                <div className='flex items-center gap-2 mb-4'>
                  <TrendingUp className='w-5 h-5 text-green-400' />
                  <h3 className='text-white font-semibold'>
                    Trending This Week
                  </h3>
                </div>

                <div className='space-y-3'>
                  {trendingUsers.map((user) => (
                    <div
                      key={user.id}
                      className='flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors'
                    >
                      <div className='relative'>
                        <div className='w-12 h-12 rounded-full overflow-hidden'>
                          <Image
                            src={user.avatar || '/placeholder.svg'}
                            alt={user.name}
                            width={48}
                            height={48}
                            className='w-full h-full object-cover'
                          />
                        </div>
                        {user.isOnline && (
                          <div className='absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-slate-900' />
                        )}
                      </div>
                      <div className='flex-1'>
                        <div className='flex items-center gap-2'>
                          <h4 className='text-white font-semibold'>
                            {user.name}
                          </h4>
                          <Badge className={`${user.badgeColor} text-xs`}>
                            {getBadgeIcon(user.badge)} {user.badge}
                          </Badge>
                        </div>
                        <p className='text-slate-400 text-sm'>
                          {user.username}
                        </p>
                        <div className='flex items-center gap-2 mt-1 text-xs text-slate-400'>
                          <span>{user.quizzesCompleted} quizzes</span>
                          <span>•</span>
                          <span>{user.winRate}% win rate</span>
                        </div>
                      </div>
                      <div className='text-right'>
                        <p className='text-white font-semibold'>
                          {user.points.toLocaleString()} pts
                        </p>
                        <div className='flex items-center gap-1 text-xs'>
                          {getChangeIcon(user.change)}
                          <span className={getChangeColor(user.change)}>
                            {getChangeText(user.change)} this week
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trending Stats */}
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-6'>
                  <div className='bg-slate-800/50 p-3 rounded-lg text-center'>
                    <div className='flex items-center justify-center mb-2'>
                      <TrendingUp className='w-4 h-4 text-green-400' />
                    </div>
                    <p className='text-lg font-bold text-white'>+12</p>
                    <p className='text-xs text-slate-400'>Biggest Gain</p>
                  </div>
                  <div className='bg-slate-800/50 p-3 rounded-lg text-center'>
                    <div className='flex items-center justify-center mb-2'>
                      <Users className='w-4 h-4 text-blue-400' />
                    </div>
                    <p className='text-lg font-bold text-white'>156</p>
                    <p className='text-xs text-slate-400'>New Users</p>
                  </div>
                  <div className='bg-slate-800/50 p-3 rounded-lg text-center'>
                    <div className='flex items-center justify-center mb-2'>
                      <Zap className='w-4 h-4 text-orange-400' />
                    </div>
                    <p className='text-lg font-bold text-white'>89</p>
                    <p className='text-xs text-slate-400'>Active Streaks</p>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
