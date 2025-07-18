'use client'

import { useMemo } from 'react'

interface SpotAvailabilityIndicatorProps {
  currentSpots: number
  totalSpots: number
}

export default function SpotAvailabilityIndicator({
  currentSpots,
  totalSpots
}: SpotAvailabilityIndicatorProps) {
  const displaySpots = Math.max(0, currentSpots)
  const displayTotal = Math.max(1, totalSpots) // Ensure totalSpots is at least 1

  // Calculate the percentage of spots that are OCCUPIED
  const occupiedPercentage = (displayTotal - displaySpots) / displayTotal // Value from 0 to 1

  // Determine the color of the segment representing OCCUPIED spots
  const occupiedSegmentColor = useMemo(() => {
    if (occupiedPercentage > 0.9) {
      return 'rgb(239, 68, 68)' // Red (Tailwind red-500) if more than 90% occupied
    }
    return 'rgb(255, 255, 255)' // White otherwise
  }, [occupiedPercentage])

  // The color of the background segment (UNOCCUPIED spots) is always dark gray
  const unoccupiedSegmentColor = 'rgb(55, 65, 81)' // Dark gray (Tailwind gray-700)

  // SVG circle properties
  const radius = 10
  const circumference = 2 * Math.PI * radius
  // strokeDashoffset for the OCCUPIED segment:
  // When occupiedPercentage is 0, offset is circumference (segment is hidden).
  // When occupiedPercentage is 1, offset is 0 (segment is fully visible).
  const strokeDashoffset = circumference * (1 - occupiedPercentage)

  return (
    <div className='flex items-center gap-2 p-4 bg-gray-900 text-gray-300 rounded-lg'>
      <div className='w-6 h-6 flex items-center justify-center'>
        <svg className='w-full h-full' viewBox='0 0 24 24'>
          {/* Background circle (representing UNOCCUPIED portion) */}
          <circle
            cx='12'
            cy='12'
            r={radius}
            strokeWidth='4'
            fill='none'
            stroke={unoccupiedSegmentColor} // Always dark gray
          />
          {/* Foreground circle (representing OCCUPIED portion) */}
          <circle
            cx='12'
            cy='12'
            r={radius}
            strokeWidth='4'
            fill='none'
            stroke={occupiedSegmentColor} // White or red
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap='round'
            transform='rotate(-90 12 12)' // Starts the progress from the top
          />
        </svg>
      </div>
    </div>
  )
}
