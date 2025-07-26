import { leaderboardData } from '@/constant/quizLeaderBoard'
import Image from 'next/image'
import React from 'react'

const Leaderboard = () => {
  return (
    <div className='min-h-screen bg-slate-900 p-6'>
      <div className='max-w-4xl mx-auto'>
        <div className='bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='border-b border-slate-700/50'>
                  <th className='text-left py-4 px-6 text-slate-300 font-medium text-sm'>
                    #
                  </th>
                  <th className='text-left py-4 px-6 text-slate-300 font-medium text-sm'>
                    Player
                  </th>
                  <th className='text-right py-4 px-6 text-slate-300 font-medium text-sm'>
                    Score
                  </th>
                  <th className='text-right py-4 px-6 text-slate-300 font-medium text-sm'>
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((player) => (
                  <tr
                    key={player.rank}
                    className='border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors'
                  >
                    <td className='py-4 px-6'>
                      <span className='text-slate-200 font-medium text-lg'>
                        {player.rank}
                      </span>
                    </td>
                    <td className='py-4 px-6'>
                      <div className='flex items-center gap-3'>
                        <div className='relative'>
                          <Image
                            src={player.avatar || '/placeholder.svg'}
                            alt={`${player.player} avatar`}
                            width={40}
                            height={40}
                            className='rounded-full border-2 border-slate-600'
                          />
                        </div>
                        <span className='text-slate-100 font-medium text-base'>
                          {player.player}
                        </span>
                      </div>
                    </td>
                    <td className='py-4 px-6 text-right'>
                      <span className='text-slate-100 font-medium text-base'>
                        {player.score}
                      </span>
                    </td>
                    <td className='py-4 px-6 text-right'>
                      <span className='text-slate-300 font-medium text-base'>
                        {player.time}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
