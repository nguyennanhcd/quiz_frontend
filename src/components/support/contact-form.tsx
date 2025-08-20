'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ContactForm() {
  return (
    <div className='bg-slate-800 rounded-lg p-8'>
      <h2 className='text-2xl font-bold mb-6'>Contact Support</h2>
      <p className='text-slate-300 mb-6'>
        Need help? Our support team is here to assist you. Please fill out the
        form below and we&apos;ll get back to you as soon as possible.
      </p>
      <div className='space-y-4'>
        <Input
          placeholder='Your Name'
          className='bg-slate-700 border-slate-600'
        />
        <Input
          placeholder='Email Address'
          type='email'
          className='bg-slate-700 border-slate-600'
        />
        <Input
          placeholder='Subject'
          className='bg-slate-700 border-slate-600'
        />
        <textarea
          placeholder='Describe your issue...'
          rows={6}
          className='w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 resize-none'
        />
        <Button className='bg-blue-600 hover:bg-blue-700'>Send Message</Button>
      </div>
    </div>
  )
}
