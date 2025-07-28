/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { Quiz } from '@/types/quiz'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { ArrowLeft, Clock } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

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
    <div className='min-h-screen bg-slate-900 text-white p-4'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='flex items-center gap-3 mb-8'>
          <Button
            variant='ghost'
            size='sm'
            className='text-slate-400 hover:text-white p-0'
          >
            <ArrowLeft className='w-5 h-5 mr-2' />
            Back to Explore
          </Button>
        </div>

        {/* Title and Tags */}
        <div className='mb-8'>
          <h1 className='text-4xl font-bold mb-4'>
            Ultimate World History Trivia
          </h1>
          <div className='flex gap-2'>
            <Badge className='bg-slate-700 text-slate-300'>History</Badge>
            <Badge className='bg-yellow-500 text-black font-medium'>
              Medium
            </Badge>
          </div>
        </div>

        {/* Progress and Timer */}
        <div className='flex justify-between items-center mb-8'>
          <div className='text-slate-300'>Question 1 of 5</div>
          <div className='flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-full'>
            <Clock className='w-4 h-4 text-slate-400' />
            <span className='text-slate-300 font-mono'>18:35</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className='w-full bg-slate-700 rounded-full h-2 mb-8'>
          <div className='bg-blue-500 h-2 rounded-full w-1/5'></div>
        </div>

        {/* Question Card */}
        <Card className='bg-slate-800 border-slate-700'>
          <CardContent className='p-8'>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              {/* Image */}
              <div className='order-2 md:order-1'>
                <Image
                  src='/question.jpg'
                  alt='Students working in a laboratory'
                  width={400}
                  height={300}
                  className='rounded-lg object-cover w-full'
                />
              </div>

              {/* Question and Answers */}
              <div className='order-1 md:order-2 space-y-6'>
                <h2 className='text-2xl font-semibold text-white leading-tight'>
                  Which ancient wonder of the world was located in Alexandria,
                  Egypt?
                </h2>

                <div className='space-y-3'>
                  <Button className='w-full justify-start text-left h-auto p-4 bg-slate-700 border-slate-600 hover:bg-slate-600 text-white'>
                    <span className='bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0'>
                      A
                    </span>
                    <span>The Colossus of Rhodes</span>
                  </Button>

                  <Button
                    variant='outline'
                    className='w-full justify-start text-left h-auto p-4 bg-slate-700 border-slate-600 hover:bg-slate-600 text-white'
                  >
                    <span className='bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0'>
                      B
                    </span>
                    <span>The Lighthouse of Alexandria</span>
                  </Button>

                  <Button
                    variant='outline'
                    className='w-full justify-start text-left h-auto p-4 bg-slate-700 border-slate-600 hover:bg-slate-600 text-white'
                  >
                    <span className='bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0'>
                      C
                    </span>
                    <span>The Hanging Gardens of Babylon</span>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
