import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'

export default function SettingsTab() {
  return (
    <div className='p-6 border border-gray-300 dark:border-slate-700 rounded-xl'>
      <h2 className='text-2xl font-bold text-foreground mb-8'>Quiz Settings</h2>

      <div className='space-y-8'>
        {/* Time Limit */}
        <div>
          <Label
            htmlFor='time-limit'
            className='text-foreground text-sm mb-3 font-semibold block'
          >
            Time Limit (minutes)
          </Label>
          <Select defaultValue='no-limit'>
            <SelectTrigger
              id='time-limit'
              className='w-full bg-transparent text-foreground focus:ring-offset-0 focus:ring-0 border border-gray-300 dark:border-slate-700'
            >
              <SelectValue placeholder='Select time limit' />
            </SelectTrigger>
            <SelectContent className='bg-white dark:bg-slate-800 text-foreground'>
              <SelectItem value='no-limit'>No time limit</SelectItem>
              <SelectItem value='5'>5 minutes</SelectItem>
              <SelectItem value='10'>10 minutes</SelectItem>
              <SelectItem value='15'>15 minutes</SelectItem>
              <SelectItem value='30'>30 minutes</SelectItem>
              <SelectItem value='60'>60 minutes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Time Per Question */}
        <div>
          <Label
            htmlFor='time-per-question'
            className='text-foreground text-sm mb-3 font-semibold block'
          >
            Time Per Question (seconds)
          </Label>
          <Select defaultValue='no-limit-per-question'>
            <SelectTrigger
              id='time-per-question'
              className='w-full bg-transparent text-foreground focus:ring-offset-0 focus:ring-0 border border-gray-300 dark:border-slate-700'
            >
              <SelectValue placeholder='Select time per question' />
            </SelectTrigger>
            <SelectContent className='bg-white dark:bg-slate-800 text-foreground'>
              <SelectItem value='no-limit-per-question'>
                No limit per question
              </SelectItem>
              <SelectItem value='10'>10 seconds</SelectItem>
              <SelectItem value='20'>20 seconds</SelectItem>
              <SelectItem value='30'>30 seconds</SelectItem>
              <SelectItem value='60'>60 seconds</SelectItem>
              <SelectItem value='120'>2 minutes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Randomize Questions */}
        <div className='flex items-center justify-between py-4'>
          <Label
            htmlFor='randomize-questions'
            className='text-foreground text-sm font-semibold'
          >
            Randomize Questions
          </Label>
          <label className='relative inline-flex items-center cursor-pointer'>
            <input
              type='checkbox'
              id='randomize-questions'
              className='sr-only peer'
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        {/* Show Explanations After Answering */}
        <div className='flex items-center justify-between py-4'>
          <Label
            htmlFor='show-explanations'
            className='text-foreground text-sm font-semibold'
          >
            Show Explanations After Answering
          </Label>
          <label className='relative inline-flex items-center cursor-pointer'>
            <input
              type='checkbox'
              id='show-explanations'
              className='sr-only peer'
              defaultChecked
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        {/* Allow Retakes */}
        <div className='flex items-center justify-between py-4'>
          <Label
            htmlFor='allow-retakes'
            className='text-foreground text-sm font-semibold'
          >
            Allow Retakes
          </Label>
          <label className='relative inline-flex items-center cursor-pointer'>
            <input
              type='checkbox'
              id='allow-retakes'
              className='sr-only peer'
              defaultChecked
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        {/* Passing Score */}
        <div className='py-4'>
          <div className='flex items-center justify-between mb-4'>
            <Label className='text-foreground text-sm font-semibold'>
              Passing Score: 70%
            </Label>
          </div>
          <Slider
            defaultValue={[70]}
            max={100}
            min={0}
            step={1}
            className='w-full'
          />
        </div>

        {/* Quiz Visibility */}
        <div>
          <Label
            htmlFor='quiz-visibility'
            className='text-foreground text-sm mb-3 font-semibold block'
          >
            Quiz Visibility
          </Label>
          <Select defaultValue='private'>
            <SelectTrigger
              id='quiz-visibility'
              className='w-full bg-transparent text-foreground focus:ring-offset-0 focus:ring-0 border border-gray-300 dark:border-slate-700'
            >
              <SelectValue placeholder='Select visibility' />
            </SelectTrigger>
            <SelectContent className='bg-white dark:bg-slate-800 text-foreground'>
              <SelectItem value='private'>
                Private (Only you can see)
              </SelectItem>
              <SelectItem value='public'>Public (Everyone can see)</SelectItem>
              <SelectItem value='unlisted'>
                Unlisted (Only with link)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
