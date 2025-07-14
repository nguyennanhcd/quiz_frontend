/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect } from 'react'
import { Clock, Calendar, Trophy, Flame, User } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { leaderboardData } from '@/constant/leaderBoard'

export default function DailyChallenge() {
  const [timeRemaining, setTimeRemaining] = useState('15:23:16')
  const [questionTime, setQuestionTime] = useState('7:07')
  const [selectedAnswer, setSelectedAnswer] = useState('')

  // Mock timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      // This would normally update with real time logic
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className='min-h-scree p-4 md:p-6'>
      <div className='max-w-7xl mx-auto space-y-6'>
        {/* Header */}
        <div className='space-y-2'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900'>
            Daily Challenge
          </h1>
          <p className='text-gray-600'>
            A new quiz every day. Test your knowledge and compete with others!
          </p>
        </div>

        {/* Info Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <Card className='bg-purple-100 border-purple-200'>
            <CardContent className='p-4'>
              <div className='flex items-center space-x-3'>
                <div className='p-2 bg-purple-200 rounded-full'>
                  <Clock className='h-5 w-5 text-purple-700' />
                </div>
                <div>
                  <p className='text-sm text-purple-600 font-medium'>
                    Time Remaining
                  </p>
                  <p className='text-xl font-bold text-purple-900'>
                    {timeRemaining}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='bg-blue-100 border-blue-200'>
            <CardContent className='p-4'>
              <div className='flex items-center space-x-3'>
                <div className='p-2 bg-blue-200 rounded-full'>
                  <Calendar className='h-5 w-5 text-blue-700' />
                </div>
                <div>
                  <p className='text-sm text-blue-600 font-medium'>
                    {"Today's Theme"}
                  </p>
                  <p className='text-lg font-bold text-blue-900'>
                    Science & Technology
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='bg-yellow-100 border-yellow-200'>
            <CardContent className='p-4'>
              <div className='flex items-center space-x-3'>
                <div className='p-2 bg-yellow-200 rounded-full'>
                  <Trophy className='h-5 w-5 text-yellow-700' />
                </div>
                <div>
                  <p className='text-sm text-yellow-600 font-medium'>
                    Top Prize
                  </p>
                  <p className='text-xl font-bold text-yellow-900'>500 Coins</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='bg-red-50 border-red-200'>
            <CardContent className='p-4'>
              <div className='flex items-center space-x-3'>
                <div className='p-2 bg-red-100 rounded-full'>
                  <Flame className='h-5 w-5 text-red-600' />
                </div>
                <div>
                  <p className='text-sm text-red-600 font-medium'>
                    Your Streak
                  </p>
                  <p className='text-xl font-bold text-red-900'>4 Days</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Quiz Section */}
          <div className='lg:col-span-2'>
            <Card>
              <CardHeader>
                <div className='flex justify-between items-start'>
                  <div>
                    <CardTitle className='text-xl font-bold'>
                      Science & Technology Challenge
                    </CardTitle>
                    <p className='text-gray-600 mt-1'>
                      Test your knowledge of scientific discoveries and
                      technological innovations.
                    </p>
                  </div>
                  <div className='flex items-center space-x-2 text-gray-500'>
                    <Clock className='h-4 w-4' />
                    <span className='font-mono'>{questionTime}</span>
                  </div>
                </div>
                <div className='space-y-2'>
                  <div className='flex justify-between text-sm text-gray-600'>
                    <span>Question 1 of 5</span>
                    <span>20% Complete</span>
                  </div>
                  <Progress value={20} className='h-2' />
                </div>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div>
                  <h3 className='text-lg font-semibold mb-4'>
                    Which of these is NOT a programming language?
                  </h3>
                  <RadioGroup
                    value={selectedAnswer}
                    onValueChange={setSelectedAnswer}
                    className='space-y-3'
                  >
                    <div className='flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50'>
                      <RadioGroupItem value='java' id='java' />
                      <Label htmlFor='java' className='flex-1 cursor-pointer'>
                        Java
                      </Label>
                    </div>
                    <div className='flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50'>
                      <RadioGroupItem value='python' id='python' />
                      <Label htmlFor='python' className='flex-1 cursor-pointer'>
                        Python
                      </Label>
                    </div>
                    <div className='flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50'>
                      <RadioGroupItem value='html' id='html' />
                      <Label htmlFor='html' className='flex-1 cursor-pointer'>
                        HTML
                      </Label>
                    </div>
                    <div className='flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50'>
                      <RadioGroupItem value='javascript' id='javascript' />
                      <Label
                        htmlFor='javascript'
                        className='flex-1 cursor-pointer'
                      >
                        JavaScript
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className='flex justify-between'>
                  <Button variant='outline' disabled>
                    Previous
                  </Button>
                  <Button disabled={!selectedAnswer}>Next Question</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Leaderboard */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Leaderboard</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue='today' className='w-full'>
                  <TabsList className='grid w-full grid-cols-3'>
                    <TabsTrigger value='today'>Today</TabsTrigger>
                    <TabsTrigger value='week'>Week</TabsTrigger>
                    <TabsTrigger value='allTime'>All Time</TabsTrigger>
                  </TabsList>

                  {Object.entries(leaderboardData).map(([period, data]) => (
                    <TabsContent
                      key={period}
                      value={period}
                      className='space-y-3 mt-4'
                    >
                      {data.map((player, index) => (
                        <div
                          key={player.id}
                          className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg'
                        >
                          <span className='text-lg'>{player.badge}</span>
                          <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm'>
                            <User className='h-4 w-4' />
                          </div>
                          <div className='flex-1'>
                            <p className='font-medium text-sm'>{player.name}</p>
                            <p className='text-xs text-gray-500'>
                              {player.time}
                            </p>
                          </div>
                          <div className='text-right'>
                            <p className='font-bold text-sm'>
                              {player.score} pts
                            </p>
                          </div>
                        </div>
                      ))}
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
