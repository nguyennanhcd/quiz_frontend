'use client'

import { Quiz } from '@/types/quiz'
import Link from 'next/link'
import { useState } from 'react'

export default function QuizClient({
  quiz,
  quizId
}: {
  quiz: Quiz
  quizId: string
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})

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
    <>
      <h2 className='text-2xl font-bold mb-4 text-gray-800'>{quiz.title}</h2>
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
          href={`/quizzes/${quizId}`}
          className='bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition'
        >
          Quay lại
        </Link>
      </div>
    </>
  )
}
