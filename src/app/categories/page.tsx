'use client'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { quizCategories } from '@/constant/quizCategories'
import QuizCategoriesCard from '@/components/quizCategoriesCard'
import TestKnowledge from '@/components/categories/TestKnowledge'
import HowItWorks from '@/components/HowItWorks'

export default function QuizCategories() {
  const [searchTerm, setSearchTerm] = useState('')
  const filteredCategories = quizCategories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className='min-h-screen bg-slate-900 text-white p-6'>
      <div className='max-w-7xl mx-auto'>
        {' '}
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
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5' />
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
            <QuizCategoriesCard key={category.id} {...category} />
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
        <TestKnowledge />
        <HowItWorks />
      </div>
    </div>
  )
}
