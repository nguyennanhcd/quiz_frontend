// app/quizzes/[id]/page.tsx
import { mockQuizzes } from '@/constant/mockQuizzes'
import Link from 'next/link'

export default function QuizDetail({ params }: { params: { id: string } }) {
  const quiz = mockQuizzes.find((q) => q.id === parseInt(params.id))

  if (!quiz) {
    return (
      <div className='text-center mt-10 text-red-500'>Quiz không tồn tại</div>
    )
  }

  return (
    <main className='min-h-screen bg-gray-100'>
      <div className='container mx-auto p-6'>
        <div className='bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto'>
          <h1 className='text-3xl font-bold mb-4 text-gray-800'>
            {quiz.title}
          </h1>
          <p className='text-gray-600 mb-4'>{quiz.description}</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <p>
              <strong>Thời gian:</strong> {quiz.duration}
            </p>
            <p>
              <strong>Số câu hỏi:</strong> {quiz.questionCount}
            </p>
            <p>
              <strong>Mức độ:</strong> {quiz.difficulty}
            </p>
          </div>
          <div className='flex space-x-4 mt-6'>
            <Link
              href={`/quizzes/${params.id}/start`}
              className='bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition'
            >
              Bắt đầu làm bài
            </Link>
            <Link
              href='/quizzes'
              className='bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition'
            >
              Quay lại
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
