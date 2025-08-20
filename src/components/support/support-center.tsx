'use client'

import { useState } from 'react'
import { HelpCategories } from './help-categories'
import { FAQSection } from './faq-section'
import { ContactForm } from './contact-form'
import { KnowledgeBase } from './knowledge-base'
import { SupportTabs } from './support-tabs'

export function SupportCenter() {
  const [activeTab, setActiveTab] = useState('faq')

  return (
    <div className='min-h-screen bg-slate-900 text-white'>
      {/* Header */}
      <div className='text-center py-12 px-4'>
        <h1 className='text-4xl font-bold mb-4'>Support Center</h1>
        <p className='text-slate-400 text-lg max-w-2xl mx-auto'>
          Find answers to common questions or get in touch with our support team
        </p>
      </div>

      <SupportTabs onTabChange={setActiveTab} />

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 pb-12'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          <div className='lg:col-span-1'>
            <HelpCategories />
          </div>

          <div className='lg:col-span-3'>
            {activeTab === 'faq' && <FAQSection />}
            {activeTab === 'contact' && <ContactForm />}
            {activeTab === 'knowledge' && <KnowledgeBase />}
          </div>
        </div>
      </div>
    </div>
  )
}
