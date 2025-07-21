'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { quizCategories } from '@/constant/quizCategories'

export default function QuizCategories() {
  const [searchTerm, setSearchTerm] = useState('')
  const filteredCategories = quizCategories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className='min-h-screen bg-slate-900 text-white p-6'>
      <div className='max-w-7xl mx-auto'>
        {' '}
        {/* Added max-w-7xl and mx-auto for better centering on large screens */}
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
            <Card
              key={category.id}
              className='border bg-card text-card-foreground cursor-pointer hover:scale-105 transition-transform duration-200 relative overflow-hidden group p-0'
            >
              {/* Image container - now fills the space and clips content */}
              <div className='relative h-48 w-full overflow-hidden rounded-t-lg'>
                <Image
                  src='/placeholder.webp'
                  alt={category.name}
                  fill
                  className='object-cover' // Changed to object-cover to fill the container
                />
                {/* Count badge - positioned absolutely over the image */}
                <div className='absolute top-2 right-2 bg-black/20 backdrop-blur-sm rounded-full w-6 h-6 flex items-center justify-center z-10'>
                  <span className='text-white font-bold text-[1'>
                    {category.count}
                  </span>
                </div>
              </div>
              {/* Category Name - added below the image */}
              {/*
              <div className="p-4">
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
              */}
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
