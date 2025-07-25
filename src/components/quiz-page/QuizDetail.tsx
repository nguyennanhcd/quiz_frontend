import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, HelpCircle, Star, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Quiz } from '@/constant/mockQuizzes'

interface QuizDetailProps {
  quiz: Quiz
}

function getDifficultyColor(difficulty: string) {
  switch (difficulty.toLowerCase()) {
    case 'dễ':
      return 'bg-green-500 hover:bg-green-600'
    case 'trung bình':
      return 'bg-amber-500 hover:bg-amber-600'
    case 'khó':
      return 'bg-red-500 hover:bg-red-600'
    default:
      return 'bg-gray-500 hover:bg-gray-600'
  }
}

function getDifficultyBadge(difficulty: string) {
  switch (difficulty.toLowerCase()) {
    case 'dễ':
      return 'bg-green-500 text-white hover:bg-green-600'
    case 'trung bình':
      return 'bg-amber-500 text-black hover:bg-amber-600'
    case 'khó':
      return 'bg-red-500 text-white hover:bg-red-600'
    default:
      return 'bg-gray-500 text-white hover:bg-gray-600'
  }
}

export default function QuizDetail({ quiz }: QuizDetailProps) {
  // Simulate current players (you can replace this with real data)
  const currentPlayers = Math.floor(Math.random() * 200) + 50
  const maxPlayers = 300
  const spotsLeft = maxPlayers - currentPlayers
  const progressPercentage = (currentPlayers / maxPlayers) * 100

  return (
    <div className='min-h-screen bg-slate-900 text-white'>
      {/* Header */}
      <div className='p-4'>
        <Link href='/quizzes'>
          <Button variant='ghost' className='text-white hover:bg-slate-800'>
            <ArrowLeft className='w-4 h-4 mr-2' />
            Quay lại danh sách
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className='relative mx-4 mb-8 rounded-lg overflow-hidden'>
        <Image
          src='/quiz-hero.png'
          alt='Quiz background'
          width={1400}
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
            <Badge className='bg-purple-600 hover:bg-purple-700'>Nổi bật</Badge>
            <Badge className='bg-blue-600 hover:bg-blue-700'>Phổ biến</Badge>
          </div>

          <h1 className='text-4xl font-bold mb-4'>{quiz.title}</h1>

          <div className='flex items-center gap-6 text-sm'>
            <div className='flex items-center gap-1'>
              <Clock className='w-4 h-4' />
              <span>{quiz.duration}</span>
            </div>
            <div className='flex items-center gap-1'>
              <Users className='w-4 h-4' />
              <span>{currentPlayers} người chơi</span>
            </div>
            <div className='flex items-center gap-1'>
              <HelpCircle className='w-4 h-4' />
              <span>{quiz.questionCount} câu hỏi</span>
            </div>
            <div className='flex items-center gap-1'>
              <Star className='w-4 h-4 fill-amber-400 text-amber-400' />
              <span>4.8 (156 đánh giá)</span>
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
                Tổng quan
              </TabsTrigger>
              <TabsTrigger
                value='leaderboard'
                className='data-[state=active]:bg-slate-700'
              >
                Bảng xếp hạng
              </TabsTrigger>
              <TabsTrigger
                value='reviews'
                className='data-[state=active]:bg-slate-700'
              >
                Đánh giá
              </TabsTrigger>
            </TabsList>

            <TabsContent value='overview' className='mt-6'>
              <div className='space-y-6'>
                <div>
                  <h2 className='text-2xl font-bold mb-4'>Mô tả</h2>
                  <p className='text-slate-300 leading-relaxed'>
                    {quiz.description}
                  </p>
                </div>

                <div>
                  <h2 className='text-2xl font-bold mb-4'>Yêu cầu</h2>
                  <ul className='text-slate-300 space-y-2'>
                    <li>• Có kiến thức cơ bản về chủ đề</li>
                    <li>• Thời gian hoàn thành: {quiz.duration}</li>
                    <li>• Cần tập trung cao độ</li>
                  </ul>
                </div>

                <div>
                  <h2 className='text-2xl font-bold mb-4'>Câu hỏi mẫu</h2>
                  {quiz.questions.slice(0, 2).map((question, index) => (
                    <div
                      key={question.id}
                      className='bg-slate-800 rounded-lg p-4 mb-4'
                    >
                      <h3 className='font-medium mb-3'>
                        Câu {index + 1}: {question.text}
                      </h3>
                      <div className='grid grid-cols-2 gap-2'>
                        {question.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className='bg-slate-700 rounded p-2 text-sm'
                          >
                            {String.fromCharCode(65 + optionIndex)}. {option}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value='leaderboard' className='mt-6'>
              <div className='text-center py-8'>
                <p className='text-slate-400'>
                  Bảng xếp hạng sẽ được cập nhật sau khi có kết quả...
                </p>
              </div>
            </TabsContent>

            <TabsContent value='reviews' className='mt-6'>
              <div className='space-y-4'>
                <div className='bg-slate-800 rounded-lg p-4'>
                  <div className='flex items-center gap-2 mb-2'>
                    <div className='flex'>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className='w-4 h-4 fill-amber-400 text-amber-400'
                        />
                      ))}
                    </div>
                    <span className='font-medium'>Nguyễn Văn A</span>
                  </div>
                  <p className='text-slate-300'>
                    Quiz rất hay và bổ ích, giúp tôi ôn tập kiến thức hiệu quả!
                  </p>
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
              <span className='text-slate-300'>Số chỗ đã đăng ký</span>
              <span className='font-bold'>
                {currentPlayers}/{maxPlayers}
              </span>
            </div>
            <Progress value={progressPercentage} className='mb-3' />
            {spotsLeft <= 20 && (
              <p className='text-red-400 text-sm font-medium'>
                Sắp đầy! Chỉ còn {spotsLeft} chỗ trống
              </p>
            )}
          </div>

          {/* Quiz Details */}
          <div className='bg-slate-800 rounded-lg p-4 space-y-4'>
            <div className='flex justify-between'>
              <span className='text-slate-300'>Danh mục</span>
              <span className='font-medium'>Giáo dục</span>
            </div>

            <div className='flex justify-between'>
              <span className='text-slate-300'>Số câu hỏi</span>
              <span className='font-medium'>{quiz.questionCount}</span>
            </div>

            <div className='flex justify-between'>
              <span className='text-slate-300'>Thời gian</span>
              <span className='font-medium'>{quiz.duration}</span>
            </div>

            <div className='flex justify-between'>
              <span className='text-slate-300'>Độ khó</span>
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
                Bắt đầu làm bài
              </Button>
            </Link>

            <Link href='/quizzes' className='block'>
              <Button
                variant='outline'
                className='w-full border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent'
              >
                Quay lại danh sách
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
