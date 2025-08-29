'use client'

import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Plus, Eye, Trash2, Copy } from 'lucide-react'

interface Question {
  id: string
  title: string
  text: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export default function QuestionsTab() {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: '1',
      title: 'Question 1',
      text: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      explanation: ''
    }
  ])

  const addQuestion = () => {
    const newQuestion: Question = {
      id: (questions.length + 1).toString(),
      title: `Question ${questions.length + 1}`,
      text: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      explanation: ''
    }
    setQuestions([...questions, newQuestion])
  }

  const duplicateQuestion = (questionId: string) => {
    const questionToDuplicate = questions.find((q) => q.id === questionId)
    if (questionToDuplicate) {
      const newQuestion: Question = {
        ...questionToDuplicate,
        id: (questions.length + 1).toString(),
        title: `Question ${questions.length + 1}`
      }
      setQuestions([...questions, newQuestion])
    }
  }

  const deleteQuestion = (questionId: string) => {
    if (questions.length > 1) {
      const updatedQuestions = questions.filter((q) => q.id !== questionId)
      // Re-number the remaining questions
      const reNumberedQuestions = updatedQuestions.map((q, index) => ({
        ...q,
        id: (index + 1).toString(),
        title: `Question ${index + 1}`
      }))
      setQuestions(reNumberedQuestions)
    }
  }

  const updateQuestion = (
    questionId: string,
    field: keyof Question,
    value: string | number
  ) => {
    setQuestions(
      questions.map((q) => (q.id === questionId ? { ...q, [field]: value } : q))
    )
  }

  const updateOption = (
    questionId: string,
    optionIndex: number,
    value: string
  ) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          const newOptions = [...q.options]
          newOptions[optionIndex] = value
          return { ...q, options: newOptions }
        }
        return q
      })
    )
  }

  const setCorrectAnswer = (questionId: string, correctIndex: number) => {
    updateQuestion(questionId, 'correctAnswer', correctIndex)
  }

  const [previewMode, setPreviewMode] = useState<string | null>(null)

  const togglePreview = (questionId: string) => {
    setPreviewMode(previewMode === questionId ? null : questionId)
  }

  return (
    <div className='p-6 rounded-xl'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-bold text-foreground'>Questions</h2>
        <Button
          onClick={addQuestion}
          className='bg-default hover:bg-default-hover text-white px-4 py-2 rounded-md'
        >
          <Plus className='w-4 h-4 mr-2' />
          Add Question
        </Button>
      </div>

      <Accordion type='single' collapsible className='w-full'>
        {questions.map((question) => (
          <AccordionItem key={question.id} value={question.id} className=' '>
            <AccordionTrigger className=''>
              <div className='flex items-center justify-between w-full mr-4'>
                <div className='flex items-center gap-3'>
                  <h3 className='text-base font-semibold text-foreground'>
                    {question.title}
                  </h3>
                  {question.text && (
                    <span className='text-sm text-muted-foreground truncate max-w-md'>
                      {question.text}
                    </span>
                  )}
                </div>
                <div className='flex items-center gap-2'>
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={(e) => {
                      e.stopPropagation()
                      duplicateQuestion(question.id)
                    }}
                    className='text-foreground hover:bg-gray-100 dark:hover:bg-slate-800'
                    title='Duplicate question'
                  >
                    <Copy className='w-4 h-4' />
                  </Button>
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={(e) => {
                      e.stopPropagation()
                      togglePreview(question.id)
                    }}
                    className={`text-foreground hover:bg-gray-100 dark:hover:bg-slate-800 ${
                      previewMode === question.id
                        ? 'bg-gray-100 dark:bg-slate-800'
                        : ''
                    }`}
                    title='Preview question'
                  >
                    <Eye className='w-4 h-4' />
                  </Button>
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteQuestion(question.id)
                    }}
                    className='text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
                    disabled={questions.length === 1}
                    title='Delete question'
                  >
                    <Trash2 className='w-4 h-4' />
                  </Button>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              {previewMode === question.id ? (
                // Preview Mode
                <div className='space-y-4 p-4 bg-gray-50 dark:bg-slate-800/50 rounded-lg'>
                  <h4 className='text-lg font-medium'>Preview Mode</h4>
                  {question.text && (
                    <div className='text-foreground'>
                      <strong>Question:</strong> {question.text}
                    </div>
                  )}
                  <div className='space-y-2'>
                    <strong>Options:</strong>
                    {question.options.map((option, index) => (
                      <div
                        key={index}
                        className={`p-2 rounded border ${
                          index === question.correctAnswer
                            ? 'bg-green-100 dark:bg-green-900/20 border-green-300'
                            : 'bg-white dark:bg-slate-700 border-gray-300'
                        }`}
                      >
                        <span className='mr-2'>
                          {String.fromCharCode(65 + index)}.
                        </span>
                        {option || `Option ${index + 1}`}
                        {index === question.correctAnswer && (
                          <span className='ml-2 text-green-600 dark:text-green-400 font-semibold'>
                            ✓ Correct
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  {question.explanation && (
                    <div className='mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200'>
                      <strong>Explanation:</strong> {question.explanation}
                    </div>
                  )}
                </div>
              ) : (
                // Edit Mode
                <div className='space-y-6 mt-4'>
                  {/* Question Text */}
                  <div>
                    <Label
                      htmlFor={`question-text-${question.id}`}
                      className='text-foreground text-sm mb-2 font-semibold'
                    >
                      Question Text
                    </Label>
                    <Textarea
                      id={`question-text-${question.id}`}
                      placeholder={`Enter your question here...`}
                      value={question.text}
                      onChange={(e) =>
                        updateQuestion(question.id, 'text', e.target.value)
                      }
                      className='bg-transparent text-foreground placeholder:text-foreground/70 min-h-[100px] resize-y focus:ring-offset-0 focus:ring-0 border border-gray-300 dark:border-slate-700'
                    />
                  </div>

                  {/* Options */}
                  <div>
                    <Label className='text-foreground text-sm mb-3 font-semibold block'>
                      Options (Select the correct answer)
                    </Label>
                    <div className='space-y-3'>
                      {question.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className='flex items-center gap-3'
                        >
                          <input
                            type='radio'
                            name={`correct-answer-${question.id}`}
                            id={`option-${question.id}-${optionIndex}`}
                            className='w-4 h-4 text-blue-600'
                            checked={question.correctAnswer === optionIndex}
                            onChange={() =>
                              setCorrectAnswer(question.id, optionIndex)
                            }
                          />
                          <Input
                            placeholder={`Option ${optionIndex + 1}`}
                            value={option}
                            onChange={(e) =>
                              updateOption(
                                question.id,
                                optionIndex,
                                e.target.value
                              )
                            }
                            className='flex-1 bg-transparent text-foreground placeholder:text-foreground/70 focus:ring-offset-0 focus:ring-0 border border-gray-300 dark:border-slate-700'
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explanation */}
                  <div>
                    <Label
                      htmlFor={`explanation-${question.id}`}
                      className='text-foreground text-sm mb-2 font-semibold'
                    >
                      Explanation (shown after answering)
                    </Label>
                    <Textarea
                      id={`explanation-${question.id}`}
                      placeholder='Explain why this is the correct answer...'
                      value={question.explanation}
                      onChange={(e) =>
                        updateQuestion(
                          question.id,
                          'explanation',
                          e.target.value
                        )
                      }
                      className='bg-transparent text-foreground placeholder:text-foreground/70 min-h-[80px] resize-y focus:ring-offset-0 focus:ring-0 border border-gray-300 dark:border-slate-700'
                    />
                  </div>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
