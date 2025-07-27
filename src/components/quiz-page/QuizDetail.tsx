import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  Bell,
  Bookmark,
  Clock,
  HelpCircle,
  Share2,
  Star,
  Users
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Quiz } from '@/types/quiz'
import { difficultyColors } from '@/constant/difficultColor'
import Overview from '../quizDetail/Overview'
import Leaderboard from '../quizDetail/Leaderboard'
import Reviews from '../quizDetail/Reviews'
import { Card, CardContent } from '../ui/card'

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

      {/* Content Section */}
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
          <div className='bg-main'>
            {/* Quiz Details Grid */}
            <div className='grid grid-cols-2 gap-4'>
              <Card className='bg-slate-800 border-slate-700'>
                <CardContent className='p-4'>
                  <div className='text-slate-400 text-sm mb-1'>Category</div>
                  <div className='text-white font-semibold text-lg'>
                    Science &<br />
                    Technology
                  </div>
                </CardContent>
              </Card>

              <Card className='bg-slate-800 border-slate-700'>
                <CardContent className='p-4'>
                  <div className='text-slate-400 text-sm mb-1'>Questions</div>
                  <div className='text-white font-bold text-2xl'>25</div>
                </CardContent>
              </Card>

              <Card className='bg-slate-800 border-slate-700'>
                <CardContent className='p-4'>
                  <div className='text-slate-400 text-sm mb-1'>Time Limit</div>
                  <div className='text-white font-bold text-xl'>20 min</div>
                </CardContent>
              </Card>

              <Card className='bg-slate-800 border-slate-700'>
                <CardContent className='p-4'>
                  <div className='text-slate-400 text-sm mb-1'>Difficulty</div>
                  <div className='text-white font-bold text-xl'>Medium</div>
                </CardContent>
              </Card>
            </div>

            {/* Creator Profile */}
            <Card className='bg-slate-800 border-slate-700'>
              <CardContent className='p-4'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-12 h-12 rounded-full overflow-hidden bg-slate-600'>
                    <Image
                      src='/placeholder.svg?height=48&width=48'
                      alt='MarvelFan2023 avatar'
                      width={48}
                      height={48}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div>
                    <div className='text-white font-semibold text-lg'>
                      MarvelFan2023
                    </div>
                    <div className='text-slate-400 text-sm'>
                      Expert Quiz Creator
                    </div>
                  </div>
                </div>

                <div className='flex justify-between text-sm'>
                  <div>
                    <span className='text-slate-400'>Quizzes: </span>
                    <span className='text-white font-semibold'>42</span>
                  </div>
                  <div>
                    <span className='text-slate-400'>Updated: </span>
                    <span className='text-white'>2023-10-15</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Play Button */}
            <Button
              className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 text-lg rounded-xl'
              size='lg'
            >
              Play Now
            </Button>

            {/* Action Buttons */}
            <div className='flex justify-center gap-6 pt-2'>
              <Button
                variant='ghost'
                size='icon'
                className='text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl'
              >
                <Bookmark className='h-6 w-6' />
              </Button>

              <Button
                variant='ghost'
                size='icon'
                className='text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl'
              >
                <Share2 className='h-6 w-6' />
              </Button>

              <Button
                variant='ghost'
                size='icon'
                className='text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl'
              >
                <Bell className='h-6 w-6' />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='space-y-3'>
            <Link href={`/quizzes/${quiz.id}/start`} className='block'>
              <Button className='w-full text-white font-medium bg-default hover:bg-default-hover'>
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
