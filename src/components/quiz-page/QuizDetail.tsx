import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, HelpCircle, Star, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Quiz } from '@/types/quiz'
import { leaderboardData } from '@/constant/quizLeaderBoard'
import StarRating from '../StarRating'
import { quizReviews } from '@/constant/quizReview'

interface QuizDetailProps {
  quiz: Quiz
}

function getDifficultyColor(difficulty: string) {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'bg-green-500 hover:bg-green-600'
    case 'medium':
      return 'bg-amber-500 hover:bg-amber-600'
    case 'hard':
      return 'bg-red-500 hover:bg-red-600'
    default:
      return 'bg-gray-500 hover:bg-gray-600'
  }
}

function getDifficultyBadge(difficulty: string) {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'bg-green-500 text-white-primary hover:bg-green-600'
    case 'medium':
      return 'bg-amber-500 text-white-primary hover:bg-amber-600'
    case 'hard':
      return 'bg-red-500 text-white-primary hover:bg-red-600'
    default:
      return 'bg-gray-500 text-white-primary hover:bg-gray-600'
  }
}

export default function QuizDetail({ quiz }: QuizDetailProps) {
  // Simulate current players (you can replace this with real data)
  const currentPlayers = quiz.currentPlayers
  const maxPlayers = quiz.maxPlayers
  const spotsLeft = maxPlayers - currentPlayers
  const progressPercentage = (currentPlayers / maxPlayers) * 100

  return (
    <div className='min-h-screen bg-slate-900 text-white'>
      {/* Header */}
      <div className='p-4'>
        <Link href='/quizzes'>
          <Button variant='ghost' className='text-white hover:bg-slate-800'>
            <ArrowLeft className='w-4 h-4 mr-2' />
            Back to List
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className='relative mx-4 mb-8 rounded-lg overflow-hidden'>
        <Image
          src={quiz.image}
          alt='Quiz background'
          width={600}
          height={400}
          className='w-full h-[400px] object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />

        {/* Quiz Info Overlay */}
        <div className='absolute bottom-0 left-0 p-6'>
          <div className='flex gap-2 mb-4'>
            <Badge className={getDifficultyBadge(quiz.difficulty)}>
              {quiz.difficulty}
            </Badge>
            <Badge className='bg-purple-500/80 hover:bg-purple-600 text-white-primary'>
              Featured
            </Badge>
            <Badge className='bg-blue-500/80 hover:bg-blue-600 text-white-primary'>
              Popular
            </Badge>
          </div>

          <h1 className='text-4xl font-bold mb-4'>{quiz.title}</h1>

          <div className='flex items-center gap-6 text-sm'>
            <div className='flex items-center gap-1'>
              <Clock className='w-4 h-4' />
              <span>{quiz.duration}</span>
            </div>
            <div className='flex items-center gap-1'>
              <Users className='w-4 h-4' />
              <span>{currentPlayers} players</span>
            </div>
            <div className='flex items-center gap-1'>
              <HelpCircle className='w-4 h-4' />
              <span>{quiz.questionCount} questions</span>
            </div>
            <div className='flex items-center gap-1'>
              <Star className='w-4 h-4 fill-amber-400 text-amber-400' />
              <span>4.8 (156 reviews)</span>
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-8 px-4'>
        {/* Main Content */}
        <div className='flex-1'>
          <Tabs defaultValue='overview' className='w-full'>
            <TabsList className='grid w-full grid-cols-3 bg-slate-800'>
              <TabsTrigger
                value='overview'
                className='data-[state=active]:bg-slate-700'
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value='leaderboard'
                className='data-[state=active]:bg-slate-700'
              >
                Leaderboard
              </TabsTrigger>
              <TabsTrigger
                value='reviews'
                className='data-[state=active]:bg-slate-700'
              >
                Reviews
              </TabsTrigger>
            </TabsList>

            <TabsContent value='overview' className='mt-6'>
              <div className='space-y-6'>
                <div>
                  <h2 className='text-2xl font-bold mb-4'>Description</h2>
                  <p className='text-slate-300 leading-relaxed'>
                    {quiz.description}
                  </p>
                </div>

                <div>
                  <h2 className='text-2xl font-bold mb-4'>Requirements</h2>
                  <ul className='text-slate-300 space-y-2'>
                    <li>• {quiz.requirements}</li>
                    <li>• Completion time: {quiz.duration}</li>
                  </ul>
                </div>

                <div className='max-w-6xl mx-auto'>
                  {/* Tags Section */}
                  <div className='mb-8'>
                    <h2 className='text-2xl font-bold mb-4'>Tags</h2>
                    <div className='flex flex-wrap gap-3'>
                      {quiz.tags?.map((tag) => (
                        <Button
                          key={tag}
                          variant='outline'
                          className='border-slate-600 text-white hover:bg-slate-700 hover:text-white bg-transparent'
                        >
                          {tag}
                        </Button>
                      ))}
                    </div>

                    {/* Related Quizzes Section ( do it later)*/}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value='leaderboard' className='mt-6'>
              <div className='min-h-screen bg-slate-900 p-6'>
                <div className='max-w-4xl mx-auto'>
                  <div className='bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 overflow-hidden'>
                    <div className='overflow-x-auto'>
                      <table className='w-full'>
                        <thead>
                          <tr className='border-b border-slate-700/50'>
                            <th className='text-left py-4 px-6 text-slate-300 font-medium text-sm'>
                              #
                            </th>
                            <th className='text-left py-4 px-6 text-slate-300 font-medium text-sm'>
                              Player
                            </th>
                            <th className='text-right py-4 px-6 text-slate-300 font-medium text-sm'>
                              Score
                            </th>
                            <th className='text-right py-4 px-6 text-slate-300 font-medium text-sm'>
                              Time
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {leaderboardData.map((player) => (
                            <tr
                              key={player.rank}
                              className='border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors'
                            >
                              <td className='py-4 px-6'>
                                <span className='text-slate-200 font-medium text-lg'>
                                  {player.rank}
                                </span>
                              </td>
                              <td className='py-4 px-6'>
                                <div className='flex items-center gap-3'>
                                  <div className='relative'>
                                    <Image
                                      src={player.avatar || '/placeholder.svg'}
                                      alt={`${player.player} avatar`}
                                      width={40}
                                      height={40}
                                      className='rounded-full border-2 border-slate-600'
                                    />
                                  </div>
                                  <span className='text-slate-100 font-medium text-base'>
                                    {player.player}
                                  </span>
                                </div>
                              </td>
                              <td className='py-4 px-6 text-right'>
                                <span className='text-slate-100 font-medium text-base'>
                                  {player.score}
                                </span>
                              </td>
                              <td className='py-4 px-6 text-right'>
                                <span className='text-slate-300 font-medium text-base'>
                                  {player.time}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value='reviews' className='mt-6'>
              <div className='bg-slate-900 text-white p-6 min-h-screen'>
                <div className='max-w-4xl mx-auto'>
                  {/* Header */}
                  <div className='flex justify-between items-center mb-8'>
                    <h1 className='text-2xl font-bold'>Reviews</h1>
                    <Button className='bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg'>
                      Write a Review
                    </Button>
                  </div>

                  {/* Reviews List */}
                  <div className='space-y-4'>
                    {quizReviews.map((review) => (
                      <div
                        key={review.id}
                        className='border border-slate-700 rounded-lg p-6 bg-slate-800/50'
                      >
                        <div className='flex items-start gap-4'>
                          {/* Avatar */}
                          <div className='flex-shrink-0'>
                            <Image
                              src={review.avatar || '/placeholder.svg'}
                              alt={`${review.username} avatar`}
                              width={48}
                              height={48}
                              className='rounded-full'
                            />
                          </div>

                          {/* Content */}
                          <div className='flex-1 min-w-0'>
                            <div className='flex items-center justify-between mb-2'>
                              <h3 className='font-semibold text-white'>
                                {review.username}
                              </h3>
                              <StarRating rating={review.rating} />
                            </div>
                            <p className='text-gray-300 text-sm leading-relaxed'>
                              {review.comment}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className='w-80 space-y-6'>
          {/* Spots Filled */}
          <div className='bg-slate-800 rounded-lg p-4'>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-slate-300'>Registered Spots</span>
              <span className='font-bold'>
                {currentPlayers}/{maxPlayers}
              </span>
            </div>
            <Progress value={progressPercentage} className='mb-3' />
            {spotsLeft <= 20 && (
              <p className='text-red-400 text-sm font-medium'>
                Almost full! Only {spotsLeft} spots left
              </p>
            )}
          </div>

          {/* Quiz Details */}
          <div className='bg-slate-800 rounded-lg p-4 space-y-4'>
            <div className='flex justify-between'>
              {quiz.category &&
                quiz.category.map((cate) => {
                  return <span key={cate}>{cate}</span>
                })}
            </div>

            <div className='flex justify-between'>
              <span className='text-slate-300'>Number of Questions</span>
              <span className='font-medium'>{quiz.questionCount}</span>
            </div>

            <div className='flex justify-between'>
              <span className='text-slate-300'>Duration</span>
              <span className='font-medium'>{quiz.duration}</span>
            </div>

            <div className='flex justify-between'>
              <span className='text-slate-300'>Difficulty</span>
              <span className='font-medium'>{quiz.difficulty}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='space-y-3'>
            <Link href={`/quizzes/${quiz.id}/start`} className='block'>
              <Button
                className={`w-full text-white font-medium ${getDifficultyColor(
                  quiz.difficulty
                )}`}
              >
                Start Quiz
              </Button>
            </Link>

            <Link href='/quizzes' className='block'>
              <Button
                variant='outline'
                className='w-full border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent'
              >
                Back to List
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
