export interface Player {
  id?: string
  rank: number
  avatar?: string
  avatarUrl?: string
  name: string
  country: string
  flag?: string
  streak?: number
  score?: number
  level?: number
  levelString?: string
  quizzes?: number
  wins?: number
  badge?: 'Diamond' | 'Platinum' | 'Gold'
  earned?: number
  followers?: string
  following?: string
  bgImageUrl?: string
}

export const Players: Player[] = [
  {
    id: '1',
    rank: 1,
    avatar: '/placeholder.svg?height=40&width=40',
    avatarUrl: '/avatarPlaceholder.webp',
    name: 'Alex Johnson',
    country: 'United States',
    flag: '🇺🇸',
    streak: 15,
    score: 9850,
    level: 78,
    levelString: 'Grandmaster',
    quizzes: 42,
    wins: 42,
    badge: 'Diamond',
    earned: 1250.75,
    followers: '1.2k',
    following: '356',
    bgImageUrl: '/placeholder.webp'
  },
  {
    id: '2',
    rank: 2,
    avatar: '/placeholder.svg?height=40&width=40',
    avatarUrl: '/avatarPlaceholder.webp',
    name: 'Sarah Williams',
    country: 'Canada',
    flag: '🇨🇦',
    streak: 8,
    score: 8720,
    level: 65,
    levelString: 'Master',
    quizzes: 38,
    wins: 38,
    badge: 'Platinum',
    earned: 980.5,
    followers: '987',
    following: '412',
    bgImageUrl: '/placeholder.webp'
  },
  {
    id: '3',
    rank: 3,
    avatar: '/placeholder.svg?height=40&width=40',
    name: 'Michael Brown',
    country: 'United Kingdom',
    streak: 6,
    score: 7640,
    level: 59,
    quizzes: 35,
    badge: 'Gold'
  },
  {
    id: '4',
    rank: 4,
    avatar: '/placeholder.svg?height=40&width=40',
    name: 'Emily Davis',
    country: 'Australia',
    streak: 4,
    score: 6980,
    level: 52,
    quizzes: 31,
    badge: 'Gold'
  },
  {
    id: '5',
    rank: 5,
    avatar: '/placeholder.svg?height=40&width=40',
    name: 'David Wilson',
    country: 'Germany',
    streak: 10,
    score: 6500,
    level: 48,
    quizzes: 29,
    badge: 'Gold'
  },
  {
    id: '6',
    rank: 6,
    avatar: '/placeholder.svg?height=40&width=40',
    name: 'Olivia Martinez',
    country: 'France',
    streak: 7,
    score: 6100,
    level: 45,
    quizzes: 27,
    badge: 'Gold'
  },
  {
    id: '7',
    rank: 7,
    avatar: '/placeholder.svg?height=40&width=40',
    name: 'James Taylor',
    country: 'Japan',
    streak: 12,
    score: 5800,
    level: 42,
    quizzes: 25,
    badge: 'Gold'
  },
  {
    id: '8',
    rank: 8,
    avatar: '/placeholder.svg?height=40&width=40',
    name: 'Sophia Anderson',
    country: 'Brazil',
    streak: 5,
    score: 5500,
    level: 39,
    quizzes: 23,
    badge: 'Gold'
  },
  {
    id: '11',
    rank: 8,
    avatarUrl: '/avatarPlaceholder.webp',
    name: 'Olivia Anderson',
    country: 'Italy',
    flag: '🇮🇹',
    levelString: 'Advanced',
    quizzes: 23,
    wins: 23,
    badge: 'Gold',
    earned: 580.3,
    followers: '378',
    following: '267',
    bgImageUrl: '/placeholder.webp'
  },
  {
    id: '12',
    rank: 3,
    avatarUrl: '/avatarPlaceholder.webp',
    name: 'David Lee',
    country: 'Germany',
    flag: '🇩🇪',
    levelString: 'Advanced',
    quizzes: 35,
    wins: 35,
    badge: 'Gold',
    earned: 750.2,
    followers: '650',
    following: '200',
    bgImageUrl: '/placeholder.webp'
  },
  {
    id: '13',
    rank: 4,
    avatarUrl: '/avatarPlaceholder.webp',
    name: 'Emily Chen',
    country: 'Australia',
    flag: '🇦🇺',
    levelString: 'Master',
    quizzes: 30,
    wins: 30,
    badge: 'Platinum',
    earned: 620.0,
    followers: '500',
    following: '180',
    bgImageUrl: '/placeholder.webp'
  }
]
