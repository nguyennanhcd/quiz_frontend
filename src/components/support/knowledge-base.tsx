import type React from 'react'
import { Input } from '@/components/ui/input'
import { Search, ArrowRight } from 'lucide-react'
import { articles } from '@/constant/articles'

export function KnowledgeBase() {
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold text-white'>
          All Categories Knowledge Base
        </h2>
        <div className='relative w-80'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4' />
          <Input
            placeholder='Search articles...'
            className='pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400'
          />
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {articles.map((article) => {
          const IconComponent = article.icon
          return (
            <div
              key={article.id}
              className='bg-slate-800 border border-slate-700 rounded-lg p-6 hover:bg-slate-750 transition-colors cursor-pointer'
            >
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center gap-2'>
                  <IconComponent className='h-4 w-4 text-slate-400' />
                  <span className='text-sm text-slate-400'>
                    {article.category}
                  </span>
                </div>
                <span className='text-sm text-slate-400'>
                  {article.readTime}
                </span>
              </div>
              <h3 className='text-lg font-semibold text-white mb-2'>
                {article.title}
              </h3>
              <p className='text-slate-300 text-sm mb-4'>
                {article.description}
              </p>
              <div className='flex items-center text-blue-400 hover:text-blue-300 transition-colors'>
                <span className='text-sm font-medium'>Read article</span>
                <ArrowRight className='h-4 w-4 ml-1' />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
