import { Star } from 'lucide-react'
import React from 'react'

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className='flex gap-1'>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-gray-600 text-gray-600'
          }`}
        />
      ))}
    </div>
  )
}

export default StarRating
