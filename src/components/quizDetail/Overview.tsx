import React from 'react'
import { Button } from '../ui/button'

const Overview = ({
  description,
  requirements,
  duration,
  tags
}: {
  description: string
  requirements: string
  duration: number
  tags: string[]
}) => {
  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-2xl font-bold mb-4'>Description</h2>
        <p className='text-slate-300 leading-relaxed'>{description}</p>
      </div>

      <div>
        <h2 className='text-2xl font-bold mb-4'>Requirements</h2>
        <ul className='text-slate-300 space-y-2'>
          <li>• {requirements}</li>
          <li>• Completion time: {duration}</li>
        </ul>
      </div>

      <div className='max-w-6xl mx-auto'>
        {/* Tags Section */}
        <div className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Tags</h2>
          <div className='flex flex-wrap gap-3'>
            {tags?.map((tag) => (
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
  )
}

export default Overview
