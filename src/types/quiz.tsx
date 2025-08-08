export type Quiz = {
  id: number
  title: string
  description: string
  duration: number
  questionCount: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
  image: string
  currentPlayers: number
  maxPlayers: number
  requirements: string
  tags: string[]
  category: string[]
  isPopular: boolean
  isFeatured: boolean
  rating: number
  creator: {
    userId: number
    username: string
    name: string
    position: string
    imageURL: string
    quizzesCreated: number
    rating: number // Added creator rating
  }
  createdAt: string
  updatedAt: string
  questions: {
    id: number
    question: string
    image: string
    answers: { label: string; value: string }[]
    correctAnswer: string
  }[]
  quizReview: {
    userId: number
    username: string
    rating: number // from 1 to 5
    comment: string
    date: string // ISO date string
  }[]
  leaderBoard: {
    userId: number
    username: string
    score: number
    rank: number
    completedAt: string // ISO date string
  }[]
  badges: string[] // Added badges for filtering (e.g., Hot, Trending, Editor's Choice, Top Rated)
  timeLeft?: number // Added optional timeLeft (in days)
  reward: number // Added reward (in dollars)
  spots: number // Added total spots
  spotsLeft: number // Added available spots
  players: number // Added players (aligned with currentPlayers)
  bgGradient: string // Added background gradient for card styling
}
