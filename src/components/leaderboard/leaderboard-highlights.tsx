'use client'

import { useState, useEffect } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card'
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
  Clock,
  Users,
  Trophy
} from 'lucide-react'
import GlobalTab from './leaderboard-hightlights/GlobalTab'
import CategoryTab from './leaderboard-hightlights/CategoryTab'
import TrendingTab from './leaderboard-hightlights/TrendingTab'

// Shared interfaces and mock data
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
  change: number
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
  { ...mockUsers[3], rank: 1, change: 5 },
  { ...mockUsers[4], rank: 2, change: 3 },
  { ...mockUsers[0], rank: 3, change: 0 }
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

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [activeTab, timePeriod, selectedCategory])

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
              <span>{users.length} active</span>
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

          {isLoading && (
            <div className='flex items-center justify-center py-8'>
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-white'></div>
            </div>
          )}

          <TabsContent value='global'>
            <GlobalTab users={users} isLoading={isLoading} />
          </TabsContent>
          <TabsContent value='category'>
            <CategoryTab users={users} isLoading={isLoading} />
          </TabsContent>
          <TabsContent value='trending'>
            <TrendingTab users={trendingUsers} isLoading={isLoading} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

export { mockUsers, categoryUsers, trendingUsers, categories }
export type { LeaderboardUser, Category }
