const categories = [
  {
    id: 'movies',
    name: 'Movies',
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
    id: 'music',
    name: 'Music',
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
    id: 'politics',
    name: 'Politics',
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
