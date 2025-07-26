// lib/mockData.ts

import { Quiz } from '@/types/quiz'

export const mockQuizzes: Quiz[] = [
  {
    id: 1,
    title: 'Basic Math Quiz',
    description:
      'Test your math knowledge with questions on algebra and geometry.',
    duration: '30 minutes',
    questionCount: 20,
    difficulty: 'Easy',
    image: '/placeholder.webp',
    currentPlayers: 10,
    maxPlayers: 20,
    requirements: 'No prior knowledge required',
    tags: ['Mathematics', 'Algebra', 'Geometry'],
    category: ['Mathematics', 'Algebra', 'Geometry'],
    questions: [
      {
        id: 1,
        text: '2 + 2 = ?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4'
      },
      {
        id: 2,
        text: 'How many sides does a square have?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4'
      }
    ]
  },
  {
    id: 2,
    title: 'Vietnamese Literature Quiz',
    description: 'Explore famous Vietnamese literary works.',
    duration: '45 minutes',
    questionCount: 25,
    difficulty: 'Medium',
    image: '/placeholder.webp',
    currentPlayers: 15,
    maxPlayers: 500,
    requirements: 'Knowledge of Vietnamese literature',
    tags: ['Literature', 'Vietnamese'],
    category: ['Literature', 'Vietnamese'],
    questions: [
      {
        id: 1,
        text: "Who is the author of 'The Tale of Kieu'?",
        options: ['Nguyen Du', 'Ho Xuan Huong', 'Nguyen Trai', 'To Huu'],
        correctAnswer: 'Nguyen Du'
      }
    ]
  }
]
