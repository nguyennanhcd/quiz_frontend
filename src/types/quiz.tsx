export type Quiz = {
  id: number
  title: string
  description: string
  duration: string
  questionCount: number
  difficulty: string
  image: string
  currentPlayers: number
  maxPlayers: number
  requirements: string
  tags: string[]
  category: string[]
  questions: {
    id: number
    text: string
    options: string[]
    correctAnswer: string
  }[]
}
