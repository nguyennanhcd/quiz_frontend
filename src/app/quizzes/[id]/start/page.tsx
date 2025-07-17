// app/quizzes/[id]/start/page.tsx
'use client' // Đánh dấu đây là Client Component vì sử dụng state

import { mockQuizzes } from '@/constant/mockQuizzes'
import Link from 'next/link'
import { useState } from 'react'

export default function QuizStart({ params }: { params: { id: string } }) {
  const quiz = mockQuizzes.find((q) => q.id === parseInt(params.id))
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})

  if (!quiz) {
    return (
      <div className='text-center mt-10 text-red-500'>Quiz không tồn tại</div>
    )
  }

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer })
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Hiển thị kết quả tạm thời
      alert(`Hoàn thành quiz! Kết quả: ${JSON.stringify(answers)}`)
    }
  }

  const currentQ = quiz.questions[currentQuestion]

  return (
    <main className='min-h-screen bg-gray-100'>
      <div className='container mx-auto p-6'>
        <div className='bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto'>
          <h2 className='text-2xl font-bold mb-4 text-gray-800'>
            {quiz.title}
          </h2>
          <p className='text-gray-600 mb-4'>
            Câu {currentQuestion + 1}/{quiz.questions.length}
          </p>
          <h3 className='text-xl font-semibold mb-4'>{currentQ.text}</h3>
          <div className='space-y-2'>
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className='w-full bg-gray-200 p-3 rounded-lg hover:bg-gray-300 transition text-left'
              >
                {option}
              </button>
            ))}
          </div>
          <div className='mt-6'>
            <Link
              href={`/quizzes/${params.id}`}
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
