'use client'

import { useMemo } from 'react'

interface SpotAvailabilityIndicatorProps {
  currentSpots: number
  totalSpots: number
  mode?: 'default' | 'percentage'
}

export default function SpotAvailabilityIndicator({
  currentSpots,
  totalSpots,
  mode = 'default'
}: SpotAvailabilityIndicatorProps) {
  const displaySpots = Math.max(0, currentSpots)
  const displayTotal = Math.max(1, totalSpots)

  const occupiedPercentage = (displayTotal - displaySpots) / displayTotal
  const availablePercentage = displaySpots / displayTotal

  const occupiedSegmentColor = useMemo(() => {
    if (occupiedPercentage > 0.9) return 'rgb(239, 68, 68)' // Red
    return 'rgb(255, 255, 255)' // White
  }, [occupiedPercentage])

  const unoccupiedSegmentColor = 'rgb(55, 65, 81)'
  const radius = 10
  const circumference = 2 * Math.PI * radius

  return (
    <div className='flex items-center gap-2 p-4 bg-gray-900 text-gray-300 rounded-lg'>
      {mode === 'default' && (
        <div className='w-6 h-6 flex items-center justify-center'>
          <svg className='w-full h-full' viewBox='0 0 24 24'>
            <circle
              cx='12'
              cy='12'
              r={radius}
              strokeWidth='4'
              fill='none'
              stroke={unoccupiedSegmentColor}
            />
            <circle
              cx='12'
              cy='12'
              r={radius}
              strokeWidth='4'
              fill='none'
              stroke={occupiedSegmentColor}
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - occupiedPercentage)}
              strokeLinecap='round'
              transform='rotate(-90 12 12)'
            />
          </svg>
        </div>
      )}

      {mode === 'percentage' && (
        <div className='relative w-10 h-10 flex items-center justify-center'>
          <svg className='absolute w-full h-full' viewBox='0 0 24 24'>
            <circle
              cx='12'
              cy='12'
              r={radius}
              strokeWidth='1.5'
              fill='none'
              stroke={unoccupiedSegmentColor}
            />
            <circle
              cx='12'
              cy='12'
              r={radius}
              strokeWidth='1.5'
              fill='none'
              stroke={occupiedSegmentColor}
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - availablePercentage)}
              strokeLinecap='round'
              transform='rotate(-90 12 12)'
            />
          </svg>
          <span className='text-[10px] text-white z-10 font-semibold'>
            {Math.round(availablePercentage * 100)}%
          </span>
        </div>
      )}
    </div>
  )
}
