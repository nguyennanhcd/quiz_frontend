import { Quiz } from '@/types/quiz'

export const mockQuizzes: Quiz[] = [
  {
    id: 1,
    title: 'Basic Math Quiz',
    description:
      'Test your math knowledge with questions on algebra and geometry.',
    duration: 60,
    questionCount: 20,
    difficulty: 'Easy',
    image: '/placeholder.webp',
    currentPlayers: 10,
    maxPlayers: 20,
    requirements: 'No prior knowledge required',
    tags: ['Mathematics', 'Algebra', 'Geometry'],
    categories: ['Mathematics', 'Algebra', 'Geometry'],
    isPopular: true,
    isFeatured: true,
    rating: 4.5,
    creator: {
      userId: 101,
      username: 'MathProfessor',
      name: 'Dr. John Smith',
      position: 'Mathematics Professor',
      imageURL: '/avatarPlaceholder.webp',
      quizzesCreated: 12,
      rating: 4.7 // Added creator rating
    },
    createdAt: '2025-06-01T08:00:00Z',
    updatedAt: '2025-07-01T12:00:00Z',
    questions: [
      {
        id: 1,
        question: 'How many legs does a dog have?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
        correctAnswer: '4'
      },
      {
        id: 2,
        question: 'How many sides does a square have?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
        correctAnswer: '4'
      },
      {
        id: 3,
        question: 'How many days are in a week?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
        correctAnswer: '7'
      },
      {
        id: 4,
        question: 'What is 1 + 1?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
        correctAnswer: '2'
      },
      {
        id: 5,
        question: 'What is 2 * 2?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
        correctAnswer: '4'
      },
      {
        id: 6,
        question: 'What is 5 - 1?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
        correctAnswer: '4'
      },
      {
        id: 7,
        question: 'What is 1 + 1?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
        correctAnswer: '2'
      },
      {
        id: 8,
        question: 'What is 1 + 1?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
        correctAnswer: '2'
      },
      {
        id: 9,
        question: 'What is 2 * 2?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
        correctAnswer: '4'
      },
      {
        id: 10,
        question: 'How many sides does a square have?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
        correctAnswer: '4'
      },
      {
        id: 11,
        question: 'How many days are in a week?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
        correctAnswer: '7'
      },
      {
        id: 12,
        question: 'What shape has three sides?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
        correctAnswer: '3'
      },
      {
        id: 13,
        question: 'What is 10 - 6?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
        correctAnswer: '4'
      },
      {
        id: 14,
        question: 'What is 3 + 2?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
        correctAnswer: '5'
      },
      {
        id: 15,
        question: 'What is 5 - 1?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
        correctAnswer: '4'
      },
      {
        id: 16,
        question: '2 + 2 = ?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
        correctAnswer: '4'
      },
      {
        id: 17,
        question: 'What is 3 + 2?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
        correctAnswer: '5'
      },
      {
        id: 18,
        question: 'What shape has three sides?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
        correctAnswer: '3'
      },
      {
        id: 19,
        question: 'How many legs does a dog have?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
        correctAnswer: '4'
      },
      {
        id: 20,
        question: 'What is 10 - 6?',
        image: '/question.jpg',
        answers: [
          { label: 'A', value: '3' },
          { label: 'B', value: '4' },
          { label: 'C', value: '5' },
          { label: 'D', value: '6' }
        ],
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
    ],
    badges: ['Hot', 'Top Rated'], // Added badges
    timeLeft: 3, // Added timeLeft (days)
    reward: 50, // Added reward (in dollars)
    spots: 20, // Added total spots
    spotsLeft: 10, // Added available spots
    players: 10, // Added players (aligned with currentPlayers)
    bgGradient: 'from-blue-500 to-indigo-600' // Added background gradient
  },
  {
    id: 2,
    title: 'Vietnamese Literature Quiz',
    description: 'Explore famous Vietnamese literary works.',
    duration: 45,
    questionCount: 25,
    difficulty: 'Medium',
    image: '/placeholder.webp',
    currentPlayers: 15,
    maxPlayers: 500,
    requirements: 'Knowledge of Vietnamese literature',
    tags: ['Literature', 'Vietnamese'],
    categories: ['Literature', 'Vietnamese'],
    isPopular: false,
    isFeatured: true,
    rating: 4.8,
    creator: {
      userId: 102,
      username: 'LiteratureScholar',
      name: 'Dr. Nguyen Hoang Anh',
      position: 'Literature Professor',
      imageURL: '/avatarPlaceholder.webp',
      quizzesCreated: 8,
      rating: 4.9 // Added creator rating
    },
    createdAt: '2025-06-15T09:00:00Z',
    updatedAt: '2025-07-03T10:00:00Z',
    questions: [
      {
        id: 1,
        question: "Who is the author of 'The Tale of Kieu'?",
        image: '/question.jpg',
        answers: [
          { label: 'A', value: 'Nguyen Du' },
          { label: 'B', value: 'Ho Xuan Huong' },
          { label: 'C', value: 'Nguyen Trai' },
          { label: 'D', value: 'To Huu' }
        ],
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
    ],
    badges: ['Trending', "Editor's Choice"], // Added badges
    timeLeft: 5, // Added timeLeft (days)
    reward: 75, // Added reward (in dollars)
    spots: 500, // Added total spots
    spotsLeft: 485, // Added available spots
    players: 15, // Added players (aligned with currentPlayers)
    bgGradient: 'from-purple-500 to-pink-600' // Added background gradient
  }
]
