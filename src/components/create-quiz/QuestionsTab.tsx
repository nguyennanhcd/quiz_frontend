import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Plus, Eye, Trash2 } from 'lucide-react'

export default function QuestionsTab() {
  return (
    <div className='p-6 border border-gray-300 dark:border-slate-700 rounded-xl'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-2xl font-bold text-foreground'>Questions</h2>
        <Button className='bg-default hover:bg-default-hover text-white px-4 py-2 rounded-md'>
          <Plus className='w-4 h-4 mr-2' />
          Add Question
        </Button>
      </div>

      {/* Question Card */}
      <div className='bg-transparent border border-gray-300 dark:border-slate-700 rounded-lg p-6 mb-6'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-lg font-semibold text-foreground'>Question 1</h3>
          <div className='flex items-center gap-2'>
            <Button
              variant='ghost'
              size='sm'
              className='text-foreground hover:bg-gray-100 dark:hover:bg-slate-800'
            >
              <Plus className='w-4 h-4' />
            </Button>
            <Button
              variant='ghost'
              size='sm'
              className='text-foreground hover:bg-gray-100 dark:hover:bg-slate-800'
            >
              <Eye className='w-4 h-4' />
            </Button>
            <Button
              variant='ghost'
              size='sm'
              className='text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
            >
              <Trash2 className='w-4 h-4' />
            </Button>
          </div>
        </div>

        <div className='space-y-6'>
          {/* Question Text */}
          <div>
            <Label
              htmlFor='question-text'
              className='text-foreground text-sm mb-2 font-semibold'
            >
              Question Text
            </Label>
            <Textarea
              id='question-text'
              placeholder='Question 1'
              className='bg-transparent text-foreground placeholder:text-foreground/70 min-h-[100px] resize-y focus:ring-offset-0 focus:ring-0 border border-gray-300 dark:border-slate-700'
            />
          </div>

          {/* Options */}
          <div>
            <Label className='text-foreground text-sm mb-3 font-semibold block'>
              Options
            </Label>
            <div className='space-y-3'>
              {/* Option 1 */}
              <div className='flex items-center gap-3'>
                <input
                  type='radio'
                  name='correct-answer'
                  id='option-1'
                  className='w-4 h-4 text-blue-600'
                  defaultChecked
                />
                <Input
                  placeholder='Option 1'
                  className='flex-1 bg-transparent text-foreground placeholder:text-foreground/70 focus:ring-offset-0 focus:ring-0 border border-gray-300 dark:border-slate-700'
                />
              </div>

              {/* Option 2 */}
              <div className='flex items-center gap-3'>
                <input
                  type='radio'
                  name='correct-answer'
                  id='option-2'
                  className='w-4 h-4 text-blue-600'
                />
                <Input
                  placeholder='Option 2'
                  className='flex-1 bg-transparent text-foreground placeholder:text-foreground/70 focus:ring-offset-0 focus:ring-0 border border-gray-300 dark:border-slate-700'
                />
              </div>

              {/* Option 3 */}
              <div className='flex items-center gap-3'>
                <input
                  type='radio'
                  name='correct-answer'
                  id='option-3'
                  className='w-4 h-4 text-blue-600'
                />
                <Input
                  placeholder='Option 3'
                  className='flex-1 bg-transparent text-foreground placeholder:text-foreground/70 focus:ring-offset-0 focus:ring-0 border border-gray-300 dark:border-slate-700'
                />
              </div>

              {/* Option 4 */}
              <div className='flex items-center gap-3'>
                <input
                  type='radio'
                  name='correct-answer'
                  id='option-4'
                  className='w-4 h-4 text-blue-600'
                />
                <Input
                  placeholder='Option 4'
                  className='flex-1 bg-transparent text-foreground placeholder:text-foreground/70 focus:ring-offset-0 focus:ring-0 border border-gray-300 dark:border-slate-700'
                />
              </div>
            </div>
          </div>

          {/* Explanation */}
          <div>
            <Label
              htmlFor='explanation'
              className='text-foreground text-sm mb-2 font-semibold'
            >
              Explanation (shown after answering)
            </Label>
            <Textarea
              id='explanation'
              placeholder='Explanation for the correct answer'
              className='bg-transparent text-foreground placeholder:text-foreground/70 min-h-[100px] resize-y focus:ring-offset-0 focus:ring-0 border border-gray-300 dark:border-slate-700'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
