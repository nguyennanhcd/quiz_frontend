'use client'

import type React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Upload } from 'lucide-react'
import { useState } from 'react'

export function ContactForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-3xl font-bold text-white mb-2'>Contact Support</h1>
      </div>

      <form className='space-y-6'>
        {/* Name and Email row */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-2'>
            <Label htmlFor='name' className='text-white font-medium'>
              Name
            </Label>
            <Input
              id='name'
              placeholder='Your name'
              className='bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500'
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='email' className='text-white font-medium'>
              Email
            </Label>
            <Input
              id='email'
              type='email'
              placeholder='your.email@example.com'
              className='bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500'
            />
          </div>
        </div>

        {/* Subject and Category row */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-2'>
            <Label htmlFor='subject' className='text-white font-medium'>
              Subject
            </Label>
            <Input
              id='subject'
              placeholder='Brief description of your issue'
              className='bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500'
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='category' className='text-white font-medium'>
              Category
            </Label>
            <Select>
              <SelectTrigger className='bg-slate-900/50 border-slate-700 text-white focus:border-blue-500'>
                <SelectValue placeholder='General' />
              </SelectTrigger>
              <SelectContent className='bg-slate-800 border-slate-700'>
                <SelectItem
                  value='general'
                  className='text-white hover:bg-slate-700'
                >
                  General
                </SelectItem>
                <SelectItem
                  value='account'
                  className='text-white hover:bg-slate-700'
                >
                  Account
                </SelectItem>
                <SelectItem
                  value='billing'
                  className='text-white hover:bg-slate-700'
                >
                  Billing
                </SelectItem>
                <SelectItem
                  value='quiz-creation'
                  className='text-white hover:bg-slate-700'
                >
                  Quiz Creation
                </SelectItem>
                <SelectItem
                  value='tournaments'
                  className='text-white hover:bg-slate-700'
                >
                  Tournaments
                </SelectItem>
                <SelectItem
                  value='privacy'
                  className='text-white hover:bg-slate-700'
                >
                  Privacy
                </SelectItem>
                <SelectItem
                  value='technical'
                  className='text-white hover:bg-slate-700'
                >
                  Technical Issues
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Message field */}
        <div className='space-y-2'>
          <Label htmlFor='message' className='text-white font-medium'>
            Message
          </Label>
          <Textarea
            id='message'
            placeholder='Please describe your issue in detail'
            rows={8}
            className='bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 resize-none'
          />
        </div>

        {/* File upload */}
        <div className='space-y-2'>
          <Label htmlFor='attachment' className='text-white font-medium'>
            Attachment (optional)
          </Label>
          <div className='space-y-2'>
            <div className='relative inline-block'>
              <input
                id='attachment'
                type='file'
                onChange={handleFileChange}
                accept='.jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.txt'
                className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
              />
              <Button
                type='button'
                variant='outline'
                size='sm'
                className='bg-slate-900/50 border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600 px-4'
              >
                <Upload className='w-4 h-4 mr-2' />
                {selectedFile ? selectedFile.name : 'Upload File'}
              </Button>
            </div>
            <p className='text-sm text-slate-400'>
              Accepted file types: Images, PDF, DOC, DOCX, TXT (Max 5MB)
            </p>
          </div>
        </div>

        {/* Submit button */}
        <Button
          type='submit'
          className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-2'
        >
          Submit Request
        </Button>
      </form>
    </div>
  )
}
