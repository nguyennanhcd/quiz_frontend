import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, HelpCircle, Star, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Quiz } from '@/types/quiz'
import { difficultyColors } from '@/constant/difficultColor'
import Overview from '../quizDetail/Overview'
import Leaderboard from '../quizDetail/Leaderboard'
import Reviews from '../quizDetail/Reviews'

interface QuizDetailProps {
  quiz: Quiz
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
            <Badge
              className={`${
                difficultyColors[quiz.difficulty].bg || 'bg-gray-600'
              } ${
                difficultyColors[quiz.difficulty]?.hover || 'hover:bg-gray-500'
              } text-white-primary cursor-pointer`}
            >
              {quiz.difficulty}
            </Badge>
            {quiz.isFeatured && (
              <Badge className='cursor-pointer bg-purple-500/80 hover:bg-purple-600 text-white-primary'>
                Featured
              </Badge>
            )}
            {quiz.isPopular && (
              <Badge className='cursor-pointer bg-blue-500/80 hover:bg-blue-600 text-white-primary'>
                Popular
              </Badge>
            )}
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
              <span>
                {quiz.rating} ({quiz.quizReview.length} reviews)
              </span>
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
              <Overview
                description={quiz.description}
                requirements={quiz.requirements}
                duration={quiz.duration}
                tags={quiz.tags}
              />
            </TabsContent>

            <TabsContent value='leaderboard' className='mt-6'>
              <Leaderboard />
            </TabsContent>

            <TabsContent value='reviews' className='mt-6'>
              <Reviews />
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
                className={`w-full text-white font-medium ${
                  difficultyColors[quiz.difficulty].bg || 'bg-gray-600'
                } ${
                  difficultyColors[quiz.difficulty]?.hover ||
                  'hover:bg-gray-500'
                } text-white-primary`}
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
