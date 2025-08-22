import React from 'react'
import { Button } from '../ui/button'
import { quizzes } from '@/constant/mockQuizzes'
import Image from 'next/image'
import StarRating from '../StarRating'

const Reviews = () => {
  return (
    <div className='bg-slate-900 text-white p-6 min-h-screen'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-2xl font-bold'>Reviews</h1>
          <Button
            className='bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg'
            aria-label='Write a new review'
          >
            Write a Review
          </Button>
        </div>

        {/* Reviews List */}
        <div className='space-y-4'>
          {quizzes.map((quiz, quizIndex) =>
            quiz.quizReview?.map((review) => (
              <div
                key={`${quiz.id || quizIndex}-${review.userId}`}
                className='border border-slate-700 rounded-lg p-6 bg-slate-800/50'
              >
                <div className='flex items-start gap-4'>
                  {/* Avatar */}
                  <div className='flex-shrink-0'>
                    <Image
                      src={quiz.authorAvatarSrc || '/placeholder.svg'}
                      alt={
                        review.username
                          ? `${review.username} avatar`
                          : 'User avatar'
                      }
                      width={48}
                      height={48}
                      className='rounded-full'
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg'
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-center justify-between mb-2'>
                      <h3 className='font-semibold text-white truncate'>
                        {review.username || 'Anonymous'}
                      </h3>
                      <StarRating rating={review.rating ?? 0} />
                    </div>
                    <p className='text-gray-300 text-sm leading-relaxed break-words'>
                      {review.comment || 'No comment provided.'}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Reviews
