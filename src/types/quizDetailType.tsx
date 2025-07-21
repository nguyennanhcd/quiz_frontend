export type QuizDetailType = {
  id: number
  title: string
  category: string
  difficulty: string
  duration: number
  image: string
  creator: {
    name: string
    avatar: string
    rating: number
  }
  rating: number
  reviews: number
  spotsLeft: number
  reward: number
  players: number
  spots: number
  completion: number
  timeLeft?: number
  badges: string[]
  almostFull: boolean
  bgGradient: string
}
