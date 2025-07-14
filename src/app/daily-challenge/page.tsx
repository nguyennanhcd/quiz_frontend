/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect } from 'react'
import {
  Clock,
  Calendar,
  Trophy,
  Flame,
  User,
  Badge,
  ChevronRight
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { leaderboardData } from '@/constant/leaderBoard'
import { challengeHistoryData } from '@/constant/challengeHistoryData'

export default function DailyChallenge() {
  const [timeRemaining, setTimeRemaining] = useState('15:23:16')
  const [questionTime, setQuestionTime] = useState('7:07')
  const [selectedAnswer, setSelectedAnswer] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      // Timer logic placeholder
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const performanceData = [
    { day: 'Mon', yourScore: 80, avgScore: 65 },
    { day: 'Tue', yourScore: 60, avgScore: 70 },
    { day: 'Wed', yourScore: 90, avgScore: 70 },
    { day: 'Thu', yourScore: 70, avgScore: 65 },
    { day: 'Fri', yourScore: 85, avgScore: 72 },
    { day: 'Sat', yourScore: 75, avgScore: 68 },
    { day: 'Sun', yourScore: 95, avgScore: 75 }
  ]

  const streakRewards = [
    { days: 3, reward: '+50 Coins' },
    { days: 5, reward: '+100 Coins' },
    { days: 7, reward: 'Special Badge' },
    { days: 14, reward: 'Premium Theme' }
  ]

  return (
    <div className='min-h-screen p-4 md:p-6 text-white'>
      {/* Header */}
      <header className='max-w-7xl mx-auto space-y-2'>
        <h1 className='text-3xl md:text-4xl font-bold'>Daily Challenge</h1>
        <p>Test your knowledge and compete with others!</p>
      </header>

      {/* Info Cards */}
      <section className='grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mt-6'>
        <Card className='bg-purple-100 border-purple-200'>
          <CardContent className='p-4 flex items-center space-x-3'>
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
          </CardContent>
        </Card>

        <Card className='bg-blue-100 border-blue-200'>
          <CardContent className='p-4 flex items-center space-x-3'>
            <div className='p-2 bg-blue-200 rounded-full'>
              <Calendar className='h-5 w-5 text-blue-700' />
            </div>
            <div>
              <p className='text-sm text-blue-600 font-medium'>
                Today&rsquo;s Theme
              </p>
              <p className='text-lg font-bold text-blue-900'>
                Science & Technology
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className='bg-yellow-100 border-yellow-200'>
          <CardContent className='p-4 flex items-center space-x-3'>
            <div className='p-2 bg-yellow-200 rounded-full'>
              <Trophy className='h-5 w-5 text-yellow-700' />
            </div>
            <div>
              <p className='text-sm text-yellow-600 font-medium'>Top Prize</p>
              <p className='text-xl font-bold text-yellow-900'>500 Coins</p>
            </div>
          </CardContent>
        </Card>

        <Card className='bg-red-50 border-red-200'>
          <CardContent className='p-4 flex items-center space-x-3'>
            <div className='p-2 bg-red-100 rounded-full'>
              <Flame className='h-5 w-5 text-red-600' />
            </div>
            <div>
              <p className='text-sm text-red-600 font-medium'>Your Streak</p>
              <p className='text-xl font-bold text-red-900'>4 Days</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Main Content */}
      <main className='grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-6 items-start'>
        {/* Left Block */}
        <div className='lg:col-span-2 space-y-6'>
          {/* Quiz Section */}
          <Card className='bg-main text-white lg:col-span-2'>
            <CardHeader>
              <div className='flex justify-between items-start'>
                <div>
                  <CardTitle className='text-xl font-bold'>
                    Science & Technology Challenge
                  </CardTitle>
                  <p className='text-white/70 mt-1'>
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
                <div className='flex justify-between text-sm text-white/70'>
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
                  {['Java', 'Python', 'HTML', 'JavaScript'].map((option) => (
                    <div
                      key={option}
                      className='flex items-center space-x-3 p-3 border rounded-lg hover:bg-main-hover'
                    >
                      <RadioGroupItem
                        value={option.toLowerCase()}
                        id={option.toLowerCase()}
                      />
                      <Label
                        htmlFor={option.toLowerCase()}
                        className='flex-1 cursor-pointer'
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
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

          {/* Challenge Stats */}
          <section className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-[auto_auto_auto]'>
            {/* Performance Chart */}
            <Card className='bg-slate-800 border-slate-700 lg:col-span-2 lg:row-span-2'>
              <CardHeader>
                <CardTitle>Your Challenge Stats</CardTitle>
                <div className='flex space-x-4'>
                  <Button
                    variant='secondary'
                    className='bg-slate-700 text-white'
                  >
                    Performance
                  </Button>
                  <Button variant='ghost' className='text-slate-400'>
                    Categories
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='h-64 flex items-end justify-between space-x-2'>
                    {performanceData.map((data) => (
                      <div
                        key={data.day}
                        className='flex flex-col items-center space-y-2 flex-1'
                      >
                        <div className='flex items-end space-x-1 h-40'>
                          <div
                            className='bg-purple-500 w-6 rounded-t'
                            style={{
                              height: `${(data.yourScore / 100) * 160}px`
                            }}
                          />
                          <div
                            className='bg-green-500 w-6 rounded-t'
                            style={{
                              height: `${(data.avgScore / 100) * 160}px`
                            }}
                          />
                        </div>
                        <span className='text-sm text-slate-400'>
                          {data.day}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className='flex justify-center space-x-6 text-sm'>
                    <div className='flex items-center space-x-2'>
                      <div className='w-3 h-3 bg-purple-500 rounded' />
                      <span>Your Score</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <div className='w-3 h-3 bg-green-500 rounded' />
                      <span>Average Score</span>
                    </div>
                  </div>
                  <p className='text-center text-slate-400 text-sm'>
                    Your daily challenge performance compared to the average
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Challenge History */}
          <Card className='bg-slate-800 border-slate-700'>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <CardTitle>Challenge History</CardTitle>
                <Button variant='ghost' size='sm' className='text-slate-400'>
                  View All
                  <ChevronRight className='h-4 w-4 ml-1' />
                </Button>
              </div>
            </CardHeader>

            <CardContent className='space-y-3'>
              {challengeHistoryData.map((item, index) => (
                <div key={index} className='flex items-center justify-between'>
                  <span className='text-lg'>{item.date}</span>
                  <Badge
                    className={`text-white text-lg px-3 py-1 ${
                      item.score >= 80
                        ? 'bg-green-600'
                        : item.score >= 60
                        ? 'bg-yellow-600'
                        : 'bg-red-600'
                    }`}
                  >
                    {item.score}%
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Block */}
        <div className='space-y-6'>
          {/* Leaderboard */}
          <Card className='bg-main text-white'>
            <CardHeader>
              <CardTitle>Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue='today' className='w-full'>
                <TabsList className='bg-main grid grid-cols-3 w-full'>
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
                    {data.map((player) => (
                      <div
                        key={player.id}
                        className='flex items-center space-x-3 p-3 border rounded-lg hover:bg-main-hover'
                      >
                        <span className='text-lg'>{player.badge}</span>
                        <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white'>
                          <User className='h-4 w-4' />
                        </div>
                        <div className='flex-1'>
                          <p className='font-medium text-sm'>{player.name}</p>
                          <p className='text-xs text-gray-500'>{player.time}</p>
                        </div>
                        <p className='font-bold text-sm'>{player.score} pts</p>
                      </div>
                    ))}
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Rewards & Streaks */}
          <Card className='bg-slate-800 border-slate-700'>
            <CardHeader>
              <CardTitle className='flex items-center space-x-2'>
                <Trophy className='h-5 w-5' />
                <span>Rewards & Streaks</span>
              </CardTitle>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div>
                <div className='flex items-center space-x-2 mb-3'>
                  <Calendar className='h-4 w-4 text-blue-400' />
                  <span className='font-medium'>Daily Streak</span>
                </div>
                <div className='flex space-x-2 mb-2'>
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <div
                      key={day}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        day <= 4
                          ? 'bg-blue-600 text-white'
                          : day === 7
                          ? 'bg-yellow-500 text-black relative'
                          : 'bg-slate-700 text-slate-400'
                      }`}
                    >
                      {day}
                      {day === 7 && (
                        <Trophy className='absolute -top-1 -right-1 h-3 w-3 text-yellow-400' />
                      )}
                    </div>
                  ))}
                </div>
                <p className='text-sm text-slate-400'>
                  Current streak: 4 days. Keep playing daily!
                </p>
              </div>

              <div>
                <div className='flex items-center space-x-2 mb-3'>
                  <Flame className='h-4 w-4 text-orange-400' />
                  <span className='font-medium'>Streak Rewards</span>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                  {streakRewards.map((reward) => (
                    <div
                      key={reward.days}
                      className='bg-slate-700 rounded-lg p-3 text-center'
                    >
                      <div className='font-bold text-sm'>
                        {reward.days} Days
                      </div>
                      <div className='text-xs text-slate-300 mt-1'>
                        {reward.reward}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
