import React from 'react'

import { Clock, Users, DollarSign, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import SpotAvailabilityIndicator from '@/components/SpotAvailabiltyIndicator'

const difficultyColors = {
  Easy: 'bg-green-500',
  Medium: 'bg-orange-500',
  Hard: 'bg-red-500'
}

export type QuizType = {
  id: number
  title: string
  category: string
  difficulty: string
  duration: number
  image: string
  creator: {
    name: string
    avatar: string
    rating: number
  }
  rating: number
  reviews: number
  spotsLeft: number
  reward: number
  players: number
  spots: number
  completion: number
  timeLeft?: number
  badges: string[]
  almostFull: boolean
  bgGradient: string
}

const QuizCard = (props: QuizType) => {
  console.log(props)
  return (
    <Card key={props.id} className=''>
      <div className='relative h-48'>
        <Image
          src={props.image}
          alt={props.title}
          fill
          className='w-full h-48 object-cover'
        />
        <Badge
          className={`absolute top-3 left-3 ${
            difficultyColors[props.difficulty as keyof typeof difficultyColors]
          } text-white`}
        >
          {props.difficulty}
        </Badge>
        <div className='absolute top-3 right-3 bg-black/50 rounded-full px-2 py-1 flex items-center gap-1 text-white text-sm'>
          <Clock className='w-3 h-3' />
          {props.duration}
        </div>
      </div>

      <CardContent className='p-4'>
        <h3 className='font-bold text-lg mb-3 text-white truncate overflow-hidden'>
          {props.title}
        </h3>

        <div className='flex items-center gap-3 mb-3'>
          <Avatar className='w-8 h-8'>
            <AvatarImage src={props.creator.avatar || '/placeholder.svg'} />
            <AvatarFallback>{props.creator.name[0]}</AvatarFallback>
          </Avatar>
          <span className='text-slate-300 text-sm'>{props.creator.name}</span>
          <Badge variant='secondary' className='bg-slate-700 text-slate-300'>
            {props.category}
          </Badge>
        </div>

        <div className='flex items-center justify-between mb-3'>
          <div className='flex items-center gap-1'>
            <Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />
            <span className='text-white font-semibold'>{props.rating}</span>
            <span className='text-slate-400 text-sm'>({props.reviews})</span>
          </div>
          <div className='flex items-center gap-1 text-green-400 font-bold'>
            <DollarSign className='w-4 h-4' />
            {props.reward.toFixed(2)}
          </div>
        </div>

        <div className='flex items-center gap-4 mb-4 text-sm text-slate-400'>
          <div className='flex items-center gap-1'>
            <Users className='w-4 h-4' />
            {props.players} players
          </div>
          <div>{props.spotsLeft} spots left</div>
          <div className='flex-1'>
            <SpotAvailabilityIndicator
              currentSpots={props.spots - props.spotsLeft}
              totalSpots={props.spots}
              mode='default'
            />
          </div>
        </div>

        {props.almostFull && (
          <p className='text-red-400 text-sm mb-3'>
            Almost full! Only {props.spotsLeft} spots left
          </p>
        )}

        <Button className='w-full bg-default hover:bg-default-hover'>
          Play Now
        </Button>
      </CardContent>
    </Card>
  )
}

export default QuizCard
