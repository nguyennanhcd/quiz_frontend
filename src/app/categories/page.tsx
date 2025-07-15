'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

const quizCategories = [
  {
    id: 1,
    name: 'Animals & Nature',
    subtitle: 'QUIZ',
    count: 2,
    gradient: 'from-green-400 to-emerald-600',
    bgColor: 'bg-gradient-to-br from-green-400 to-emerald-600',
    icon: '🦝',
    description: 'Test your knowledge about wildlife and nature'
  },
  {
    id: 2,
    name: 'Architecture',
    subtitle: 'QUIZ',
    count: 4,
    gradient: 'from-blue-400 to-cyan-600',
    bgColor: 'bg-gradient-to-br from-blue-400 to-cyan-600',
    icon: '🏛️',
    description: 'Explore famous buildings and architectural styles'
  },
  {
    id: 3,
    name: 'Business & Finance',
    subtitle: 'QUIZ',
    count: 6,
    gradient: 'from-orange-400 to-red-500',
    bgColor: 'bg-gradient-to-br from-orange-400 to-red-500',
    icon: '💰',
    description: 'Master business concepts and financial literacy'
  },
  {
    id: 4,
    name: 'Coding & Programming',
    subtitle: 'QUIZ',
    count: 3,
    gradient: 'from-purple-500 to-indigo-600',
    bgColor: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    icon: '💻',
    description: 'Challenge your programming knowledge'
  },
  {
    id: 5,
    name: 'Comics',
    subtitle: 'QUIZ',
    count: 5,
    gradient: 'from-yellow-400 to-red-500',
    bgColor: 'bg-gradient-to-br from-yellow-400 to-red-500',
    icon: '🦸',
    description: 'Superhero and comic book trivia'
  },
  {
    id: 6,
    name: 'Fashion & Style',
    subtitle: 'QUIZ',
    count: 8,
    gradient: 'from-pink-400 to-purple-500',
    bgColor: 'bg-gradient-to-br from-pink-400 to-purple-500',
    icon: '👗',
    description: 'Fashion trends and style knowledge'
  },
  {
    id: 7,
    name: 'Food & Cooking',
    subtitle: 'QUIZ',
    count: 9,
    gradient: 'from-orange-400 to-yellow-500',
    bgColor: 'bg-gradient-to-br from-orange-400 to-yellow-500',
    icon: '🍕',
    description: 'Culinary arts and cooking techniques'
  },
  {
    id: 8,
    name: 'General Knowledge',
    subtitle: 'QUIZ',
    count: 2,
    gradient: 'from-yellow-400 to-orange-500',
    bgColor: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    icon: '💡',
    description: 'Test your general knowledge across topics'
  },
  {
    id: 9,
    name: 'Geography',
    subtitle: 'QUIZ',
    count: 6,
    gradient: 'from-blue-400 to-green-500',
    bgColor: 'bg-gradient-to-br from-blue-400 to-green-500',
    icon: '🌍',
    description: 'Explore countries, capitals, and landmarks'
  },
  {
    id: 10,
    name: 'Health & Medicine',
    subtitle: 'QUIZ',
    count: 3,
    gradient: 'from-blue-500 to-teal-600',
    bgColor: 'bg-gradient-to-br from-blue-500 to-teal-600',
    icon: '⚕️',
    description: 'Medical knowledge and health topics'
  }
]

export default function QuizCategories() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCategories = quizCategories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className='min-h-screen bg-slate-900 text-white p-6'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Quiz Categories
          </h1>
          <p className='text-slate-400 text-lg mb-6'>
            Browse all quiz categories and find quizzes that match your
            interests.
          </p>

          {/* Search Bar */}
          <div className='relative max-w-md'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5' />
            <Input
              type='text'
              placeholder='Search categories...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='pl-10 bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-slate-600'
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
          {filteredCategories.map((category) => (
            <Card
              key={category.id}
              className={`${category.bgColor} border-0 cursor-pointer hover:scale-105 transition-transform duration-200 relative overflow-hidden group`}
            >
              <div className='p-6 h-48 flex flex-col justify-between relative'>
                {/* Quiz Count Badge */}
                <div className='absolute top-3 right-3 bg-black/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center'>
                  <span className='text-white font-bold text-sm'>
                    {category.count}
                  </span>
                </div>

                {/* Category Icon */}
                <div className='text-4xl mb-2'>{category.icon}</div>

                {/* Category Name */}
                <div>
                  <h3 className='font-bold text-white text-lg leading-tight mb-1'>
                    {category.name.toUpperCase()}
                  </h3>
                  <p className='text-white/90 font-bold text-lg'>
                    {category.subtitle}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className='absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full'></div>
                <div className='absolute -top-2 -left-2 w-12 h-12 bg-white/10 rounded-full'></div>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-slate-400 text-lg'>
              No categories found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
