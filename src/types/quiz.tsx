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
  questions: {
    id: number
    text: string
    options: string[]
    correctAnswer: string
  }[]
}
