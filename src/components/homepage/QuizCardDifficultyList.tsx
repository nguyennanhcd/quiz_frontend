'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { difficultyColors } from '@/constant/difficultColor'
import { quizzesDifficulty } from '@/constant/quizDifficulty'
import { QuizCardDifficulty } from '@/components/QuizCardDifficulty'
import { useState } from 'react'

const QuizCardDifficultyList = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    'Easy' | 'Medium' | 'Hard'
  >('Easy')
  return (
    <div className='mt-20'>
      <div className='mb-8 m flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
        <div>
          <h1 className='text-xl font-bold text-white md:text-2xl'>
            Quizzes by Difficulty
          </h1>
          <p className='text-md text-gray-400 md:text-base'>
            Choose challenges according to your skill level
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <div className='flex rounded-lg bg-[#2A2A3A] p-1'>
            {(['Easy', 'Medium', 'Hard'] as const).map((level) => (
              <Button
                key={level}
                onClick={() => setSelectedDifficulty(level)}
                className={`rounded-sm px-4 py-1 text-sm transition ${
                  selectedDifficulty === level
                    ? `${difficultyColors[level].bg} pointer-events-none `
                    : `bg-transparent  ${difficultyColors[level].hover}`
                }
                          `}
              >
                {level}
              </Button>
            ))}
          </div>
          <Button
            size='icon'
            className='h-8 w-8 bg-transparent text-white-primary hover:bg-slate-700 '
          >
            <ChevronLeft className='h-4 w-4' />
          </Button>
          <Button
            size='icon'
            className='h-8 w-8 bg-transparent text-white-primary hover:bg-slate-700 '
          >
            <ChevronRight className='h-4 w-4' />
          </Button>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-4 lg:grid-cols-5'>
        {quizzesDifficulty
          .filter((quiz) => quiz.difficulty === selectedDifficulty)
          .map((quiz) => (
            <QuizCardDifficulty key={quiz.id} {...quiz} />
          ))}
      </div>
    </div>
  )
}

export default QuizCardDifficultyList
