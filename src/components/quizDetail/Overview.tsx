import React from 'react'
import { Button } from '../ui/button'
import { formatDuration } from '@/lib/formatDuration'

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
    <div className='space-y-6 text-foreground'>
      <div>
        <h2 className='text-xl font-bold mb-4'>Description</h2>
        <p className='text-foreground/80 leading-relaxed text-[0.9rem]'>
          {description}
        </p>
      </div>

      <div>
        <h2 className='text-xl font-bold mb-4'>Requirements</h2>
        <p className='text-foreground/80 leading-relaxed text-[0.9rem]'>
          {requirements}
        </p>
        <p className='text-foreground/80 leading-relaxed text-[0.9rem]'>
          Completion time: {formatDuration(duration)}
        </p>
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
                className='border-slate-600 text-foreground dark:hover:bg-slate-700 dark:hover:text-white bg-transparent px-2 py-1 h-auto leading-none'
              >
                <span className='text-xs'>{tag}</span>
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
