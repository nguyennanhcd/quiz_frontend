export interface Player {
  id: string
  rank: number
  avatar: string
  name: string
  country: string
  streak: number
  score: number
  level: number
  quizzes: number
  badge: 'Diamond' | 'Platinum' | 'Gold'
}

export const players: Player[] = [
  {
    id: '1',
    rank: 1,
    avatar: '/placeholder.svg?height=40&width=40',
    name: 'Alex Johnson',
    country: 'United States',
    streak: 15,
    score: 9850,
    level: 78,
    quizzes: 42,
    badge: 'Diamond'
  },
  {
    id: '2',
    rank: 2,
    avatar: '/placeholder.svg?height=40&width=40',
    name: 'Sarah Williams',
    country: 'Canada',
    streak: 8,
    score: 8720,
    level: 65,
    quizzes: 38,
    badge: 'Platinum'
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
    id: '9',
    rank: 9,
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
    id: '10',
    rank: 10,
    avatar: '/placeholder.svg?height=40&width=40',
    name: 'Sophia Anderson',
    country: 'Brazil',
    streak: 5,
    score: 5500,
    level: 39,
    quizzes: 23,
    badge: 'Gold'
  }
]
