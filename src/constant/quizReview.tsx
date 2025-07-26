export interface Review {
  id: string
  username: string
  avatar: string
  rating: number
  comment: string
}

export const quizReviews: Review[] = [
  {
    id: '1',
    username: 'MarvelFan',
    avatar: '/placeholder.svg?height=48&width=48',
    rating: 5,
    comment: 'Excellent quiz! Really tests your knowledge of the MCU.'
  },
  {
    id: '2',
    username: 'QuizLover',
    avatar: '/placeholder.svg?height=48&width=48',
    rating: 4,
    comment: 'Good variety of questions, some were quite challenging.'
  },
  {
    id: '3',
    username: 'Avenger',
    avatar: '/placeholder.svg?height=48&width=48',
    rating: 5,
    comment: 'Perfect for Marvel fans. I learned some new facts too!'
  }
]
