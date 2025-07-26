export type Quiz = {
  id: number
  title: string
  description: string
  duration: string
  questionCount: number
  difficulty: string
  image: string
  questions: {
    id: number
    text: string
    options: string[]
    correctAnswer: string
  }[]
}
