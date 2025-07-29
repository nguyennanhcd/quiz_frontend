/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { Quiz } from '@/types/quiz'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Card, CardContent } from './ui/card'
import { ArrowLeft, Clock } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

export default function PlayQuizClient({
  quiz,
  quizId
}: {
  quiz: Quiz
  quizId: string
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [timeLeft, setTimeLeft] = useState(quiz.duration)
  const [timerStarted, setTimerStarted] = useState(false)

  // Timer effect
  useEffect(() => {
    if (timerStarted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else if (timeLeft <= 0) {
      // Handle time out
      alert(`Time's up! Your answers: ${JSON.stringify(answers)}`)
    }
  }, [timerStarted, timeLeft, answers])

  const handleAnswer = (answer: string) => {
    if (!timerStarted) {
      setTimerStarted(true)
    }

    setAnswers({ ...answers, [currentQuestion]: answer })
  }

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1)
  }

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prev) => prev - 1)
  }

  // Format time display
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60
    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`
  }

  const currentQ = quiz.questions[currentQuestion]

  return (
    <div className='min-h-screen bg-slate-900 text-white p-4'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='flex items-center gap-3 mb-8'>
          <Button
            size='sm'
            className='text-slate-400 hover:text-white p-0'
            asChild
          >
            <Link href='/explore'>
              <ArrowLeft className='w-5 h-5 mr-2' />
              Back to Explore
            </Link>
          </Button>
        </div>

        {/* Title and Tags */}
        <div className='mb-8'>
          <h1 className='text-4xl font-bold mb-4'>{quiz.title}</h1>
          <div className='flex gap-2'>
            {quiz.tags.map((tag) => (
              <Badge key={tag} className='bg-slate-700 text-slate-300'>
                {tag}
              </Badge>
            ))}
            <Badge className='bg-yellow-500 text-black font-medium'>
              {quiz.difficulty}
            </Badge>
          </div>
        </div>

        {/* Progress and Timer */}
        <div className='flex justify-between items-center mb-8'>
          <div className='text-slate-300'>
            Question {currentQuestion + 1} of {quiz.questions.length}
          </div>
          <div className='flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-full'>
            <Clock className='w-4 h-4 text-slate-400' />
            <span className='text-slate-300 font-mono'>
              {timerStarted ? formatTime(timeLeft) : formatTime(quiz.duration)}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className='w-full bg-slate-700 rounded-full h-2 mb-8'>
          <div
            className='bg-blue-500 h-2 rounded-full'
            style={{
              width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%`
            }}
          ></div>
        </div>

        {/* Question Card */}
        <Card className='bg-slate-800 border-slate-700'>
          <CardContent className='p-8'>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              {/* Image */}
              <div className='order-2 md:order-1'>
                <Image
                  src={currentQ.image || '/placeholder.jpg'}
                  alt={currentQ.question}
                  width={400}
                  height={300}
                  className='rounded-lg object-cover w-full'
                />
              </div>

              {/* Question and Answers */}
              <div className='order-1 md:order-2 space-y-6'>
                <h2 className='text-2xl font-semibold text-white leading-tight'>
                  {currentQ.question}
                </h2>

                <div className='space-y-3'>
                  {currentQ.answers.map((answer) => (
                    <Button
                      key={answer.label}
                      variant={
                        answers[currentQuestion] === answer.value
                          ? 'default'
                          : 'outline'
                      }
                      className='w-full justify-start text-left h-auto p-4 bg-slate-700 border-slate-600 hover:bg-slate-600 text-white'
                      onClick={() => handleAnswer(answer.value)}
                    >
                      <span className='bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0'>
                        {answer.label}
                      </span>
                      <span>{answer.value}</span>
                    </Button>
                  ))}
                  <Button onClick={handlePreviousQuestion}>Previous</Button>
                  <Button onClick={handleNextQuestion}>Next</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
