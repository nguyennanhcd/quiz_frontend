// lib/mockData.ts
export type Quiz = {
  id: number
  title: string
  description: string
  duration: string
  questionCount: number
  difficulty: string
  questions: {
    id: number
    text: string
    options: string[]
    correctAnswer: string
  }[]
}

export const mockQuizzes: Quiz[] = [
  {
    id: 1,
    title: 'Quiz Toán học cơ bản',
    description:
      'Kiểm tra kiến thức toán học với các câu hỏi về đại số và hình học.',
    duration: '30 phút',
    questionCount: 20,
    difficulty: 'Dễ',
    questions: [
      {
        id: 1,
        text: '2 + 2 = ?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4'
      },
      {
        id: 2,
        text: 'Hình vuông có mấy cạnh?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4'
      }
    ]
  },
  {
    id: 2,
    title: 'Quiz Văn học Việt Nam',
    description: 'Khám phá các tác phẩm văn học nổi tiếng của Việt Nam.',
    duration: '45 phút',
    questionCount: 25,
    difficulty: 'Trung bình',
    questions: [
      {
        id: 1,
        text: "Tác giả của 'Truyện Kiều' là ai?",
        options: ['Nguyễn Du', 'Hồ Xuân Hương', 'Nguyễn Trãi', 'Tố Hữu'],
        correctAnswer: 'Nguyễn Du'
      }
    ]
  }
]
