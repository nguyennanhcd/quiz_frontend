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

  return <QuizClient quiz={quiz} quizId={id} />
}
