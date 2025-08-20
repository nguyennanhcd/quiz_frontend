'use client'

import { useState } from 'react'
import { HelpCircle, MessageSquare, BookOpen } from 'lucide-react'

interface SupportTabsProps {
  onTabChange: (tab: string) => void
}

export function SupportTabs({ onTabChange }: SupportTabsProps) {
  const [activeTab, setActiveTab] = useState('faq')

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    onTabChange(tab)
  }

  return (
    <div className='border-b border-slate-700 mb-8'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex space-x-8'>
          <button
            onClick={() => handleTabChange('faq')}
            className={`flex items-center gap-2 py-4 px-2 border-b-2 transition-colors ${
              activeTab === 'faq'
                ? 'border-blue-500 text-white'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <HelpCircle className='w-5 h-5' />
            Frequently Asked Questions
          </button>
          <button
            onClick={() => handleTabChange('contact')}
            className={`flex items-center gap-2 py-4 px-2 border-b-2 transition-colors ${
              activeTab === 'contact'
                ? 'border-blue-500 text-white'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <MessageSquare className='w-5 h-5' />
            Contact Support
          </button>
          <button
            onClick={() => handleTabChange('knowledge')}
            className={`flex items-center gap-2 py-4 px-2 border-b-2 transition-colors ${
              activeTab === 'knowledge'
                ? 'border-blue-500 text-white'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className='w-5 h-5' />
            Knowledge Base
          </button>
        </div>
      </div>
    </div>
  )
}
