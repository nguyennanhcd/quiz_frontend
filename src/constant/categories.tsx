export interface Category {
  id?: string
  name: string
  icon?: string
  active?: boolean
  description?: string
  color?: string
  textColor?: string
  count?: number
  slug?: string
  popularity?: number
  difficultyRange?: [number, number]
  createdAt?: string
  updatedAt?: string
  isFeatured?: boolean
  imageUrl?: string
}

export const categories: Category[] = [
  {
    id: 'all-categories',
    name: 'All Categories',
    icon: '🌐',
    active: true,
    description: undefined,
    color: undefined,
    textColor: undefined,
    count: undefined,
    slug: undefined,
    popularity: undefined,
    difficultyRange: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    isFeatured: undefined,
    imageUrl: undefined
  },
  {
    id: 'science',
    name: 'Science',
    icon: '🧪',
    active: false,
    description: undefined,
    color: undefined,
    textColor: undefined,
    count: undefined,
    slug: undefined,
    popularity: undefined,
    difficultyRange: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    isFeatured: undefined,
    imageUrl: undefined
  },
  {
    id: 'history',
    name: 'History',
    icon: '🏛️',
    active: false,
    description: undefined,
    color: undefined,
    textColor: undefined,
    count: undefined,
    slug: undefined,
    popularity: undefined,
    difficultyRange: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    isFeatured: undefined,
    imageUrl: undefined
  },
  {
    id: 'geography',
    name: 'Geography',
    icon: '🌍',
    active: false,
    description: undefined,
    color: undefined,
    textColor: undefined,
    count: undefined,
    slug: undefined,
    popularity: undefined,
    difficultyRange: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    isFeatured: undefined,
    imageUrl: undefined
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: '📊',
    active: false,
    description: undefined,
    color: undefined,
    textColor: undefined,
    count: undefined,
    slug: undefined,
    popularity: undefined,
    difficultyRange: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    isFeatured: undefined,
    imageUrl: undefined
  },
  {
    id: 'literature',
    name: 'Literature',
    icon: '📚',
    active: false,
    description: undefined,
    color: undefined,
    textColor: undefined,
    count: undefined,
    slug: undefined,
    popularity: undefined,
    difficultyRange: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    isFeatured: undefined,
    imageUrl: undefined
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: '🏆',
    active: false,
    description: undefined,
    color: undefined,
    textColor: undefined,
    count: undefined,
    slug: undefined,
    popularity: undefined,
    difficultyRange: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    isFeatured: undefined,
    imageUrl: undefined
  },
  {
    id: 'music',
    name: 'Music',
    icon: '🎵',
    active: false,
    description:
      'Test your knowledge about songs, genres, and famous musicians.',
    color: 'bg-orange-500',
    textColor: 'text-black',
    count: 2,
    slug: 'music',
    popularity: 62,
    difficultyRange: [1, 2],
    createdAt: '2024-02-15T10:30:00Z',
    updatedAt: '2025-06-05T15:45:00Z',
    isFeatured: false,
    imageUrl: '/categories.webp'
  },
  {
    id: 'movies',
    name: 'Movies & TV',
    icon: '🎬',
    active: false,
    description:
      'Explore quizzes and content related to films, actors, and directors.',
    color: 'bg-purple-500',
    textColor: 'text-white',
    count: 9,
    slug: 'movies',
    popularity: 87,
    difficultyRange: [1, 3],
    createdAt: '2023-11-01T08:00:00Z',
    updatedAt: '2025-07-10T12:00:00Z',
    isFeatured: true,
    imageUrl: '/categories.webp'
  },
  {
    id: 'politics',
    name: 'Politics',
    icon: undefined,
    active: false,
    description:
      'Dive into quizzes about global politics, history, and current affairs.',
    color: 'bg-red-500',
    textColor: 'text-white',
    count: 6,
    slug: 'politics',
    popularity: 74,
    difficultyRange: [2, 4],
    createdAt: '2024-08-20T09:15:00Z',
    updatedAt: '2025-07-01T14:00:00Z',
    isFeatured: false,
    imageUrl: '/categories.webp'
  },
  {
    id: 'puzzle',
    name: 'Puzzle',
    icon: undefined,
    active: false,
    description:
      'Challenge your brain with logic puzzles, riddles, and problem-solving tasks.',
    color: 'bg-yellow-500',
    textColor: 'text-black',
    count: 4,
    slug: 'puzzle',
    popularity: 91,
    difficultyRange: [3, 5],
    createdAt: '2023-12-05T11:00:00Z',
    updatedAt: '2025-07-15T17:30:00Z',
    isFeatured: true,
    imageUrl: '/categories.webp'
  }
]

export default categories
