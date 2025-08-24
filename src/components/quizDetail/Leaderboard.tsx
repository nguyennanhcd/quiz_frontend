'use client'

import { leaderboardData, LeaderboardEntry } from '@/constant/leaderBoard'
import Image from 'next/image'
import React, { useState } from 'react'

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState<'today' | 'week' | 'allTime'>(
    'allTime'
  )

  const renderTable = (data: LeaderboardEntry[]) => (
    <table className='w-full'>
      <thead>
        <tr className='border-b border-gray-300 dark:border-slate-700/50'>
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
          <th className='text-right py-4 px-6 text-slate-300 font-medium text-sm'>
            Badge
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((player) => (
          <tr
            key={player.id}
            className='border-b border-gray-300 dark:border-slate-700/30 hover:bg-slate-700/20 transition-colors'
          >
            <td className='py-4 px-6'>
              <span
                className={`text-lg font-medium ${
                  player.rankTextColor || 'text-slate-200'
                } ${
                  player.rankBgColor
                    ? `px-2 py-1 rounded ${player.rankBgColor}`
                    : ''
                }`}
              >
                {player.rank}
              </span>
            </td>
            <td className='py-4 px-6'>
              <div className='flex items-center gap-3'>
                <div className='relative'>
                  <Image
                    src={player.avatar || '/placeholder.svg'}
                    alt={`${player.name} avatar`}
                    width={40}
                    height={40}
                    className={`rounded-full border-2 ${
                      player.borderColor || 'border-slate-600'
                    }`}
                  />
                </div>
                <span className='text-slate-100 font-medium text-base'>
                  {player.name}
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
                {player.time || 'N/A'}
              </span>
            </td>
            <td className='py-4 px-6 text-right'>
              <span
                className={`text-sm font-medium px-2 py-1 rounded ${
                  player.badgeColor || 'bg-slate-600'
                }`}
              >
                {player.badge}
                {player.stars && ` (${player.stars} ⭐)`}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )

  return (
    <div className='min-h-screen bg-slate-900 p-6'>
      <div className='max-w-4xl mx-auto'>
        <div className='bg-slate-800/50 backdrop-blur-sm rounded-lg border border-gray-300 dark:border-slate-700/50 overflow-hidden'>
          <div className='flex border-b border-gray-300 dark:border-slate-700/50'>
            {(['allTime', 'week', 'today'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-6 text-sm font-medium ${
                  activeTab === tab
                    ? 'bg-slate-700 text-slate-100'
                    : 'text-slate-400 hover:bg-slate-700/50'
                } transition-colors`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className='overflow-x-auto'>
            {activeTab === 'today' && renderTable(leaderboardData.today)}
            {activeTab === 'week' && renderTable(leaderboardData.week)}
            {activeTab === 'allTime' && renderTable(leaderboardData.allTime)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
