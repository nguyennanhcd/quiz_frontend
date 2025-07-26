/* eslint-disable @next/next/no-html-link-for-pages */
import QuizDetail from '@/components/quiz-page/QuizDetail'
import { mockQuizzes } from '@/constant/mockQuizzes'

export default async function QuizDetailPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const quiz = mockQuizzes.find((q) => q.id === Number.parseInt(id))

  if (!quiz) {
    return (
      <div className='min-h-screen bg-slate-900 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-red-400 mb-4'>
            Can not find this quiz
          </h1>
          <p className='text-slate-400 mb-6'>Quiz is unavailable</p>
          <a
            href='/quizzes'
            className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition'
          >
            Back to Explore Quizzes
          </a>
        </div>
      </div>
    )
  }

  return <QuizDetail quiz={quiz} />
}
