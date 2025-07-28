export type Quiz = {
  id: number
  title: string
  description: string
  duration: string
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
  }
  createdAt: string
  updatedAt: string
  questions: {
    id: number
    text: string
    options: string[]
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
}
