/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { FindFriendsPopup } from './find-friends-popup'

interface LeaderboardHeaderProps {
  onFindFriends?: () => void
  onYourRanking?: () => void
}

export function LeaderboardHeader({
  onFindFriends,
  onYourRanking
}: LeaderboardHeaderProps) {
  const [showFindFriends, setShowFindFriends] = useState(false)

  return (
    <>
      <header className='mb-6 sm:mb-8 space-y-4 flex flex-col xl:flex-row justify-between items-center'>
        <div className='text-center xl:text-left'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-white'>
            Leader Board
          </h1>
          <p className='text-slate-400 text-sm sm:text-base md:text-lg'>
            See who&apos;s leading the pack in our global quiz rankings.
          </p>
        </div>
        <div className='flex flex-wrap gap-2 justify-center items-center'>
          <Button
            className='bg-slate-700 hover:bg-slate-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2'
            onClick={() => setShowFindFriends(true)}
          >
            Find Friends
          </Button>
          <Button
            className='bg-slate-700 hover:bg-slate-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2'
            onClick={onYourRanking}
          >
            Your Ranking
          </Button>
        </div>
      </header>

      <FindFriendsPopup
        isOpen={showFindFriends}
        onClose={() => setShowFindFriends(false)}
      />
    </>
  )
}
