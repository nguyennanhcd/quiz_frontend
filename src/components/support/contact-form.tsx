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
    <div className='space-y-8 bg-transparent border border-gray-300 dark:border-slate-700 rounded-lg p-8'>
      <div className='flex items-center justify-between mb-8 '>
        <h2 className='text-2xl font-bold text-foreground'>Contact Support</h2>
      </div>

      <form className='space-y-6'>
        {/* Name and Email row */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-2'>
            <Label htmlFor='name' className='text-foreground font-medium'>
              Name
            </Label>
            <Input
              id='name'
              placeholder='Your name'
              className='bg-transparent border border-gray-300 dark:border-slate-700 text-foreground placeholder:text-foreground/70 focus:border-blue-500'
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='email' className='text-foreground font-medium'>
              Email
            </Label>
            <Input
              id='email'
              type='email'
              placeholder='your.email@example.com'
              className='bg-transparent border border-gray-300 dark:border-slate-700 text-foreground placeholder:text-foreground/70 focus:border-blue-500'
            />
          </div>
        </div>

        {/* Subject and Category row */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-2'>
            <Label htmlFor='subject' className='text-foreground font-medium'>
              Subject
            </Label>
            <Input
              id='subject'
              placeholder='Brief description of your issue'
              className='bg-transparent border border-gray-300 dark:border-slate-700 text-foreground placeholder:text-foreground/70 focus:border-blue-500'
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='category' className='text-foreground font-medium'>
              Category
            </Label>
            <Select>
              <SelectTrigger className='bg-transparent text-foreground focus:border-default'>
                <SelectValue placeholder='General' />
              </SelectTrigger>
              <SelectContent className='bg-gray-300 dark:bg-slate-700 border-gray-300 dark:border-slate-700'>
                <SelectItem
                  value='general'
                  className='text-foreground hover:bg-default-hover'
                >
                  General
                </SelectItem>
                <SelectItem
                  value='account'
                  className='text-foreground hover:bg-default-hover'
                >
                  Account
                </SelectItem>
                <SelectItem
                  value='billing'
                  className='text-foreground hover:bg-default-hover'
                >
                  Billing
                </SelectItem>
                <SelectItem
                  value='quiz-creation'
                  className='text-foreground hover:bg-default-hover'
                >
                  Quiz Creation
                </SelectItem>
                <SelectItem
                  value='tournaments'
                  className='text-foreground hover:bg-default-hover'
                >
                  Tournaments
                </SelectItem>
                <SelectItem
                  value='privacy'
                  className='text-foreground hover:bg-default-hover'
                >
                  Privacy
                </SelectItem>
                <SelectItem
                  value='technical'
                  className='text-foreground hover:bg-default-hover'
                >
                  Technical Issues
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Message field */}
        <div className='space-y-2'>
          <Label htmlFor='message' className='text-foreground font-medium'>
            Message
          </Label>
          <Textarea
            id='message'
            placeholder='Please describe your issue in detail'
            rows={8}
            className='bg-transparent border border-gray-300 dark:border-slate-700 text-foreground placeholder:text-foreground/70 focus:border-default resize-none'
          />
        </div>

        {/* File upload */}
        <div className='space-y-2'>
          <Label htmlFor='attachment' className='text-foreground font-medium'>
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
                className='bg-transparent border border-gray-300 dark:border-slate-700 text-foreground hover:bg-default-hover hover:border-default px-4'
              >
                <Upload className='w-4 h-4 mr-2' />
                {selectedFile ? selectedFile.name : 'Upload File'}
              </Button>
            </div>
            <p className='text-sm text-foreground/70'>
              Accepted file types: Images, PDF, DOC, DOCX, TXT (Max 5MB)
            </p>
          </div>
        </div>

        {/* Submit button */}
        <Button
          type='submit'
          className='bg-default hover:bg-default-hover text-foreground px-8 py-2'
        >
          Submit Request
        </Button>
      </form>
    </div>
  )
}
