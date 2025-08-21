'use client'

import { useState } from 'react'
import {
  Search,
  ChevronDown,
  Trophy,
  Star,
  Flame,
  TrendingUp
} from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { players } from '@/constant/players'

const getBadgeColor = (badge: string) => {
  switch (badge) {
    case 'Diamond':
      return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
    case 'Platinum':
      return 'bg-purple-500/20 text-purple-400 border-purple-500/50'
    case 'Gold':
      return 'bg-amber-500/20 text-amber-400 border-amber-500/50'
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/50'
  }
}

export default function GlobalLeaderboard() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('Score') // State for sort criterion
  const maxScore = Math.max(...players.map((p) => p.score || 0))

  // Filter players based on search query
  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Sort players based on selected criterion
  const sortedPlayers = [...filteredPlayers].sort((a, b) => {
    switch (sortBy) {
      case 'Score':
        return (b.score || 0) - (a.score || 0) // Descending
      case 'Level':
        return (b.level || 0) - (a.level || 0) // Descending
      case 'Quizzes':
        return (b.quizzes || 0) - (a.quizzes || 0) // Descending
      case 'Streak':
        return (b.streak || 0) - (a.streak || 0) // Descending
      case 'Name':
        return a.name.localeCompare(b.name) // Ascending
      default:
        return (b.score || 0) - (a.score || 0) // Default to Score
    }
  })

  return (
    <div className='min-h-screen mt-10'>
      {/* Header Section */}
      <div className='relative overflow-hidden rounded-xl p-6 md:p-8 mb-8 bg-default'>
        <div className='relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
          <div>
            <h1 className='text-3xl md:text-4xl font-bold mb-2'>
              Global Leaderboard
            </h1>
            <p className='text-lg text-gray-300'>
              Compete with the best quiz masters from around the world
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-3'>
            <Button className='bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-full px-5 py-2 cursor-pointer'>
              <Trophy className='w-5 h-5 mr-2' />
              Hall of Fame
            </Button>
            <Button className='bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-full px-5 py-2 cursor-pointer'>
              <Trophy className='w-5 h-5 mr-2' />
              Seasonal Awards
            </Button>
          </div>
        </div>
        <div
          className='absolute inset-0 opacity-20'
          style={{
            background:
              'radial-gradient(circle at top right, #8a2be2, transparent 50%)'
          }}
        ></div>
      </div>

      {/* Search and Filter Section */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 mb-6'>
        <div className='relative w-full md:w-1/3 bg-transparent'>
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 bg-transparent w-5 h-5' />
          <Input
            type='text'
            placeholder='Search players...'
            className='w-full pl-10 pr-4 py-2 rounded-lg bg-transparent border outline-none'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className='flex gap-3 w-full md:w-auto justify-end'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='outline'
                className='bg-[#1a1a2e] text-white border border-[#3a3a5e] hover:bg-[#2a2a4e] hover:text-white rounded-lg px-4 py-2 flex items-center gap-2'
              >
                Sort by: {sortBy}
                <ChevronDown className='w-4 h-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-[#1a1a2e] border border-[#3a3a5e] text-white'>
              <DropdownMenuItem
                className='hover:bg-[#2a2a4e] cursor-pointer'
                onClick={() => setSortBy('Score')}
              >
                Score
              </DropdownMenuItem>
              <DropdownMenuItem
                className='hover:bg-[#2a2a4e] cursor-pointer'
                onClick={() => setSortBy('Level')}
              >
                Level
              </DropdownMenuItem>
              <DropdownMenuItem
                className='hover:bg-[#2a2a4e] cursor-pointer'
                onClick={() => setSortBy('Quizzes')}
              >
                Quizzes
              </DropdownMenuItem>
              <DropdownMenuItem
                className='hover:bg-[#2a2a4e] cursor-pointer'
                onClick={() => setSortBy('Streak')}
              >
                Streak
              </DropdownMenuItem>
              <DropdownMenuItem
                className='hover:bg-[#2a2a4e] cursor-pointer'
                onClick={() => setSortBy('Name')}
              >
                Name
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='outline'
                className='bg-transparent text-white border border-[#3a3a5e] hover:bg-[#2a2a4e] hover:text-white rounded-lg px-4 py-2 flex items-center gap-2'
              >
                All Time
                <ChevronDown className='w-4 h-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-[#1a1a2e] border border-[#3a3a5e] text-white'>
              <DropdownMenuItem className='hover:bg-[#2a2a4e] cursor-pointer'>
                All Time
              </DropdownMenuItem>
              <DropdownMenuItem className='hover:bg-[#2a2a4e] cursor-pointer'>
                Last Month
              </DropdownMenuItem>
              <DropdownMenuItem className='hover:bg-[#2a2a4e] cursor-pointer'>
                Last Week
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className='bg-transparent rounded-xl overflow-hidden border border-[#3a3a5e]'>
        {/* Table Header */}
        <div className='grid grid-cols-[0.5fr_2fr_1.5fr_1fr_1fr_1fr] md:grid-cols-[0.5fr_2fr_1.5fr_1fr_1fr_1fr] gap-4 p-4 text-gray-400 font-semibold border-b border-[#3a3a5e] text-sm md:text-base'>
          <div className='text-center'>Rank</div>
          <div>User</div>
          <div>Score</div>
          <div>Level</div>
          <div>Quizzes</div>
          <div>Badge</div>
        </div>

        {/* Table Rows */}
        {sortedPlayers.map((player, index) => (
          <div
            key={player.id}
            className='grid grid-cols-[0.5fr_2fr_1.5fr_1fr_1fr_1fr] md:grid-cols-[0.5fr_2fr_1.5fr_1fr_1fr_1fr] gap-4 p-4 border-b border-[#3a3a5e] last:border-b-0 items-center text-sm md:text-base'
          >
            {/* Rank */}
            <div className='flex justify-center items-center'>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold
                  ${index === 0 ? 'bg-amber-500 text-white' : ''}
                  ${index === 1 ? 'bg-gray-400 text-white' : ''}
                  ${index === 2 ? 'bg-orange-600 text-white' : ''}
                  ${index > 2 ? 'bg-[#2a2a4e] text-gray-300' : ''}
                `}
              >
                {index + 1}
              </div>
            </div>

            {/* User */}
            <div className='flex items-center gap-3'>
              <Avatar className='w-10 h-10 border border-[#3a3a5e]'>
                <AvatarImage
                  src={player.avatar || '/placeholder.svg'}
                  alt={`${player.name}'s avatar`}
                />
                <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className='flex flex-col'>
                <span className='font-semibold'>{player.name}</span>
                <span className='text-gray-400 text-xs flex items-center gap-1'>
                  {player.country} <Flame className='w-3 h-3 text-orange-400' />{' '}
                  {player.streak} streak
                </span>
              </div>
            </div>

            {/* Score */}
            <div className='flex flex-col items-start'>
              <span className='font-semibold mb-1'>
                {player.score?.toLocaleString()}
              </span>
              <div className='w-full h-1.5 rounded-full bg-[#3a3a5e]'>
                <div
                  className='h-full rounded-full'
                  style={{
                    width: `${((player.score || 0) / maxScore) * 100}%`,
                    background:
                      index === 0
                        ? '#f59e0b'
                        : index === 1
                        ? '#9ca3af'
                        : index === 2
                        ? '#ea580c'
                        : '#6b7280'
                  }}
                />
              </div>
            </div>

            {/* Level */}
            <div className='flex items-center gap-1'>
              <Star className='w-4 h-4 fill-amber-400 text-amber-400' />
              <span>{player.level}</span>
            </div>

            {/* Quizzes */}
            <div className='flex flex-col items-start'>
              <span className='font-semibold'>{player.quizzes}</span>
              <span className='text-xs text-emerald-400 flex items-center gap-1'>
                <TrendingUp className='w-3 h-3' /> Active
              </span>
            </div>

            {/* Badge */}
            <div>
              <Button
                variant='outline'
                className={`rounded-full px-3 py-1 h-auto text-xs font-medium flex items-center gap-1
                  ${getBadgeColor(player.badge || 'Gold')}
                `}
              >
                <Trophy className='w-3 h-3' />
                {player.badge}
              </Button>
            </div>
          </div>
        ))}
        <div className='text-sm p-5 flex flex-row justify-between'>
          <span>Showing 1-10 of {sortedPlayers.length} players</span>
          <div className='flex items-center gap-2'>
            <Button className='rounded-full px-3 py-1 h-auto text-xs font-medium flex items-center gap-1'>
              Previous
            </Button>
            <Button className='rounded-full px-3 py-1 h-auto text-xs font-medium flex items-center gap-1'>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
