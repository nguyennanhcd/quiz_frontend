import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import categories from '@/constant/category'
import { difficultyColors } from '@/constant/difficultColor'
import {
  CalendarDays,
  Users,
  Trophy,
  Clock,
  ArrowRight,
  Calendar,
  ChevronDown,
  Check
} from 'lucide-react'
import Image from 'next/image'

type Tournament = {
  id: number
  title: string
  description: string
  image: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  status: string
  statusColor: string
  participants: number
  prize: string
  dateRange: string
  closingInfo?: string
}

const tournaments: Tournament[] = [
  {
    id: 1,
    title: 'Science Showdown',
    description:
      'Test your scientific knowledge across physics, chemistry, biology...',
    image: '/placeholder.svg?height=200&width=350',
    difficulty: 'Medium',
    status: 'Registration Open',
    statusColor: 'bg-green-500',
    participants: 342,
    prize: '$1,000',
    dateRange: 'June 1 - June 15, 2023',
    closingInfo: 'Closes in 2 days'
  },
  {
    id: 2,
    title: 'History Heroes',
    description:
      'Journey through time and test your knowledge of historical events and...',
    image: '/placeholder.svg?height=200&width=350',
    difficulty: 'Hard',
    status: 'Upcoming',
    statusColor: 'bg-blue-500',
    participants: 215,
    prize: '$750',
    dateRange: 'June 5 - June 20, 2023'
  },
  {
    id: 3,
    title: 'Pop Culture Party',
    description: 'From movies to music, test your knowledge of all things...',
    image: '/placeholder.svg?height=200&width=350',
    difficulty: 'Easy',
    status: 'Ongoing',
    statusColor: 'bg-orange-500',
    participants: 567,
    prize: '$1,500',
    dateRange: 'May 20 - June 5, 2023'
  },
  {
    id: 4,
    title: 'Geography Genius',
    description: 'Navigate through countries, capitals, landmarks and...',
    image: '/placeholder.svg?height=200&width=350',
    difficulty: 'Medium',
    status: 'Registration Open',
    statusColor: 'bg-green-500',
    participants: 189,
    prize: '$800',
    dateRange: 'June 10 - June 25, 2023'
  }
]

export default function QuizTournament() {
  return (
    <div className='min-h-screen text-white p-4 md:p-8 lg:p-12'>
      <div className='max-w-7xl'>
        <h1 className='text-3xl md:text-4xl font-bold mb-2'>
          Quiz Tournaments
        </h1>
        <p className='text-gray-400 text-lg mb-8'>
          Compete against other quiz enthusiasts and win amazing prizes
        </p>

        <div className='relative bg-gradient-to-br bg-default to-indigo-950 rounded-xl p-6 md:p-10 lg:p-12 overflow-hidden shadow-lg'>
          {/* Abstract background shapes - simplified for demonstration */}
          <div className='absolute inset-0 opacity-20'>
            <div className='absolute w-64 h-64 bg-default rounded-full -top-16 -left-16 blur-3xl'></div>
            <div className='absolute w-96 h-96 bg-indigo-700 rounded-full -bottom-32 -right-32 blur-3xl'></div>
            <div className='absolute w-48 h-48 bg-default rounded-full top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 blur-3xl'></div>
          </div>

          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            {/* Left Section */}
            <div className='space-y-6'>
              <span className='inline-flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white'>
                FEATURED
              </span>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight'>
                Global Knowledge Championship
              </h2>
              <p className='text-lg text-gray-200'>
                Test your knowledge against the best quiz enthusiasts from
                around the world in this premier tournament with multiple rounds
                of challenging questions.
              </p>
              <div className='flex flex-wrap items-center gap-4 text-gray-300 text-sm'>
                <div className='flex items-center gap-2'>
                  <CalendarDays className='w-5 h-5' />
                  <span>May 15 - June 10, 2023</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Users className='w-5 h-5' />
                  <span>1,248 participants</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Trophy className='w-5 h-5' />
                  <span>$5,000 prize pool</span>
                </div>
              </div>
              <Button className='bg-default px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2'>
                Join Tournament
                <ArrowRight className='w-5 h-5' />
              </Button>
            </div>

            {/* Right Section */}
            <div className='bg-default/30 backdrop-blur-sm rounded-lg p-6 space-y-6 lg:ml-auto lg:max-w-sm w-full'>
              <div className='flex items-center justify-between text-gray-200'>
                <span>Registration closes in</span>
                <div className='flex items-center gap-1'>
                  <Clock className='w-4 h-4' />
                  <span>3 days</span>
                </div>
              </div>
              <div className='w-full bg-default rounded-full h-2.5'>
                <div
                  className='bg-white h-2.5 rounded-full'
                  style={{ width: '70%' }}
                ></div>
              </div>
              <div className='grid grid-cols-3 gap-4'>
                <div className='bg-default rounded-lg p-4 text-center'>
                  <div className='text-3xl font-bold'>3</div>
                  <div className='text-gray-300 text-sm'>Rounds</div>
                </div>
                <div className='bg-default rounded-lg p-4 text-center'>
                  <div className='text-3xl font-bold'>15</div>
                  <div className='text-gray-300 text-sm'>Categories</div>
                </div>
                <div className='bg-default rounded-lg p-4 text-center'>
                  <div className='text-3xl font-bold'>50</div>
                  <div className='text-gray-300 text-sm'>Questions</div>
                </div>
              </div>
              <p className='text-gray-300 text-sm text-center'>
                Top 100 participants advance to the final round
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='flex items-center justify-between mb-8'>
          <h1 className='text-3xl font-bold'>All Tournaments</h1>
          <Select defaultValue='all'>
            <SelectTrigger className='w-48 bg-gray-900 border-gray-700'>
              <SelectValue placeholder='All Tournaments' />
            </SelectTrigger>
            <SelectContent className='bg-gray-900 border-gray-700'>
              <SelectItem value='all' className='text-white'>
                <div className='flex items-center gap-2'>
                  <Check className='w-4 h-4' />
                  All Tournaments
                </div>
              </SelectItem>
              <SelectItem value='upcoming' className='text-white'>
                Upcoming
              </SelectItem>
              <SelectItem value='ongoing' className='text-white'>
                Ongoing
              </SelectItem>
              <SelectItem value='completed' className='text-white'>
                Completed
              </SelectItem>
              <SelectItem value='registration' className='text-white'>
                Registration Open
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Category Filter */}
        <div className='flex gap-3 mb-8 overflow-x-auto pb-2'>
          {categories.map((category, index) => (
            <Button
              key={category.id}
              variant={index === 0 ? 'default' : 'outline'}
              className={`whitespace-nowrap ${
                index === 0
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Tournament Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {tournaments.map((tournament) => (
            <Card
              key={tournament.id}
              className='bg-gray-900 border-gray-700 overflow-hidden'
            >
              <div className='relative'>
                <Image
                  src={tournament.image || '/placeholder.svg'}
                  alt={tournament.title}
                  width={350}
                  height={200}
                  className='w-full h-48 object-cover'
                />
                <div className='absolute top-3 left-3'>
                  <Badge
                    className={`${difficultyColors[tournament.difficulty].bg}`}
                  >
                    {tournament.difficulty}
                  </Badge>
                </div>
                <div className='absolute top-3 right-3'>
                  <Badge className={`${tournament.statusColor} text-white`}>
                    {tournament.status}
                  </Badge>
                </div>
              </div>

              <CardContent className='p-4'>
                <h3 className='text-xl font-bold mb-2 text-white'>
                  {tournament.title}
                </h3>
                <p className='text-gray-400 text-sm mb-4 line-clamp-2'>
                  {tournament.description}
                </p>

                <div className='space-y-2 mb-4'>
                  <div className='flex items-center gap-2 text-gray-400 text-sm'>
                    <Calendar className='w-4 h-4' />
                    {tournament.dateRange}
                  </div>
                  <div className='flex items-center gap-2 text-gray-400 text-sm'>
                    <Users className='w-4 h-4' />
                    {tournament.participants} participants
                  </div>
                  <div className='flex items-center gap-2 text-gray-400 text-sm'>
                    <Trophy className='w-4 h-4' />
                    {tournament.prize} prize
                  </div>
                </div>

                {tournament.closingInfo && (
                  <div className='flex items-center gap-2 text-yellow-400 text-sm mb-4'>
                    <Clock className='w-4 h-4' />
                    {tournament.closingInfo}
                  </div>
                )}

                <Button className='w-full bg-purple-600 hover:bg-purple-700 text-white'>
                  View Details
                  <ChevronDown className='w-4 h-4 ml-2 rotate-[-90deg]' />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
