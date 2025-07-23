import QuizClient from '@/components/QuizClient'
import { mockQuizzes } from '@/constant/mockQuizzes'

export default async function QuizStart({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const quiz = mockQuizzes.find((q) => q.id === parseInt(id))

  if (!quiz) {
    return (
      <div className='text-center mt-10 text-red-500'>Quiz không tồn tại</div>
    )
  }

  return (
    <main className='min-h-screen bg-gray-100'>
      <div className='container mx-auto p-6'>
        <div className='bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto'>
          <QuizClient quiz={quiz} quizId={id} />
        </div>
      </div>
    </main>
  )
}
