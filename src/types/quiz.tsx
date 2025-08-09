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
  categories: string[]
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
    rating: number
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
    rating: number
    comment: string
    date: string
  }[]
  leaderBoard: {
    userId: number
    username: string
    score: number
    rank: number
    completedAt: string
  }[]
  badges: string[]
  timeLeft?: number
  reward: number
  spots: number
  spotsLeft: number
  players: number
  bgGradient: string
  almostFull: boolean // Added almostFull field
}
