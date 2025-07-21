/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import React from 'react'
import { Card } from '@/components/ui/card'

interface QuizCategoryProps {
  id: number
  name: string
  count: number
}

const QuizCategoriesCard = ({ id, name, count }: QuizCategoryProps) => {
  return (
    <Card
      key={id}
      className='border bg-card text-card-foreground cursor-pointer hover:scale-105 transition-transform duration-200 relative overflow-hidden group p-0'
    >
      {/* Image container - now fills the space and clips content */}
      <div className='relative h-48 w-full overflow-hidden rounded-t-lg'>
        <Image
          src='/placeholder.webp'
          alt={name}
          fill
          className='object-cover' // Changed to object-cover to fill the container
        />
        {/* Count badge - positioned absolutely over the image */}
        <div className='absolute top-2 right-2 bg-black/20 backdrop-blur-sm rounded-full w-6 h-6 flex items-center justify-center z-10'>
          <span className='text-white font-bold text-[1'>{count}</span>
        </div>
      </div>
    </Card>
  )
}

export default QuizCategoriesCard
