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
      <div className='gap-8 px-4 grid grid-cols-1 md:grid-cols-3 '>
        {/* Main Content */}
        <div className='flex-1 col-span-2'>
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
        <div className=' space-y-6 col-span-1'>
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
          <div className='bg-main p-4 rounded-lg mb-3'>
            {/* Quiz Details Grid */}
            <div className='grid grid-cols-2 gap-4 mb-5 grid-rows-[auto] items-stretch'>
              <Card className='bg-slate-900 border-slate-700 h-full'>
                <CardContent className='rounded-lg border p-3 h-full'>
                  <div className='text-xs text-muted-foreground mb-1'>
                    Category
                  </div>
                  <div className='font-medium'>
                    Science &<br />
                    Technology
                  </div>
                </CardContent>
              </Card>

              <Card className='bg-slate-900 border-slate-700 h-full'>
                <CardContent className='rounded-lg border p-3 h-full '>
                  <div className='text-xs text-muted-foreground mb-1'>
                    Questions
                  </div>
                  <div className='font-medium'>25</div>
                </CardContent>
              </Card>

              <Card className='bg-slate-900 border-slate-700 h-full'>
                <CardContent className='rounded-lg border p-3 h-full '>
                  <div className='text-xs text-muted-foreground mb-1'>
                    Time Limit
                  </div>
                  <div className='font-medium'>20 min</div>
                </CardContent>
              </Card>

              <Card className='bg-slate-900 border-slate-700 h-full'>
                <CardContent className='rounded-lg border p-3 h-full '>
                  <div className='text-xs text-muted-foreground mb-1'>
                    Difficulty
                  </div>
                  <div className='font-medium'>Medium</div>
                </CardContent>
              </Card>
            </div>

            {/* Creator Profile */}
            <Card className='bg-slate-900 border-slate-700 mb-5'>
              <CardContent className='p-4'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-12 h-12 rounded-full overflow-hidden bg-slate-600'>
                    <Image
                      src={quiz.creator.imageURL}
                      alt={`${quiz.creator.name}'s name`}
                      width={48}
                      height={48}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div>
                    <div className=''>{quiz.creator.name}</div>
                    <div className='text-white-primary text-sm'>
                      {quiz.creator.position}
                    </div>
                  </div>
                </div>

                <div className='flex justify-between text-sm'>
                  <div>
                    <span className='text-slate-400'>Quizzes: </span>
                    <span className='text-white font-semibold'>
                      {quiz.creator.quizzesCreated}
                    </span>
                  </div>
                  <div>
                    <span className='text-slate-400'>Updated: </span>
                    <span className='text-white'>{quiz.updatedAt}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Play Button */}
            <Button
              className='w-[98%] mx-auto flex justify-center items-center bg-default hover:bg-default-hover text-white font-semibold py-4 text-base rounded-xl'
              size='lg'
            >
              Play now
            </Button>

            {/* Action Buttons */}
            <div className='flex justify-center gap-6 pt-2 mt-3'>
              <Button size='icon' className='text-white-primary rounded-xl'>
                <Bookmark className='h-6 w-6' />
              </Button>

              <Button size='icon' className='text-white-primary  rounded-xl'>
                <Share2 className='h-6 w-6' />
              </Button>

              <Button size='icon' className='text-white-primary  rounded-xl'>
                <Bell className='h-6 w-6' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
