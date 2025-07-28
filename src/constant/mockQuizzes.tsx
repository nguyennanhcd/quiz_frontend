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
    isPopular: true,
    isFeatured: false,
    rating: 4.5,
    creator: {
      userId: 101,
      username: 'MathProfessor',
      name: 'Dr. John Smith',
      position: 'Mathematics Professor',
      imageURL: '/avatarPlaceholder.webp',
      quizzesCreated: 12
    },
    createdAt: '2025-06-01T08:00:00Z',
    updatedAt: '2025-07-01T12:00:00Z',
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
    ],
    quizReview: [
      {
        userId: 1,
        username: 'MathLover123',
        rating: 4,
        comment: 'Great basic math quiz, perfect for beginners!',
        date: '2025-07-01T10:00:00Z'
      },
      {
        userId: 2,
        username: 'Student456',
        rating: 5,
        comment: 'Really helped me review algebra concepts.',
        date: '2025-07-02T15:30:00Z'
      }
    ],
    leaderBoard: [
      {
        userId: 1,
        username: 'MathLover123',
        score: 95,
        rank: 1,
        completedAt: '2025-07-01T10:30:00Z'
      },
      {
        userId: 2,
        username: 'Student456',
        score: 90,
        rank: 2,
        completedAt: '2025-07-02T16:00:00Z'
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
    isPopular: false,
    isFeatured: true,
    rating: 4.8,
    creator: {
      userId: 102,
      username: 'LiteratureScholar',
      name: 'Dr. Nguyen Hoang Anh',
      position: 'Literature Professor',
      imageURL: '/avatarPlaceholder.webp',
      quizzesCreated: 8
    },
    createdAt: '2025-06-15T09:00:00Z',
    updatedAt: '2025-07-03T10:00:00Z',
    questions: [
      {
        id: 1,
        text: "Who is the author of 'The Tale of Kieu'?",
        options: ['Nguyen Du', 'Ho Xuan Huong', 'Nguyen Trai', 'To Huu'],
        correctAnswer: 'Nguyen Du'
      }
    ],
    quizReview: [
      {
        userId: 3,
        username: 'LitFan789',
        rating: 5,
        comment: 'Excellent quiz on Vietnamese literature!',
        date: '2025-07-03T09:00:00Z'
      }
    ],
    leaderBoard: [
      {
        userId: 3,
        username: 'LitFan789',
        score: 85,
        rank: 1,
        completedAt: '2025-07-03T09:45:00Z'
      }
    ]
  }
]
