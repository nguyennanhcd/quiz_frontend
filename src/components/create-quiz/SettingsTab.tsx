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
    <div className='p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm'>
      <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-6'>
        Quiz Settings
      </h2>

      <div className='space-y-5'>
        {/* Time Limit */}
        <div>
          <Label
            htmlFor='time-limit'
            className='text-gray-700 dark:text-gray-200 text-sm mb-2 font-medium block'
          >
            Time Limit (minutes)
          </Label>
          <Select defaultValue='no-limit'>
            <SelectTrigger
              id='time-limit'
              className='w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent rounded-md'
            >
              <SelectValue placeholder='Select time limit' />
            </SelectTrigger>
            <SelectContent className='bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600'>
              <SelectItem
                value='no-limit'
                className='text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                No time limit
              </SelectItem>
              <SelectItem
                value='5'
                className='text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                5 minutes
              </SelectItem>
              <SelectItem
                value='10'
                className='text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                10 minutes
              </SelectItem>
              <SelectItem
                value='15'
                className='text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                15 minutes
              </SelectItem>
              <SelectItem
                value='30'
                className='text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                30 minutes
              </SelectItem>
              <SelectItem
                value='60'
                className='text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                60 minutes
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Time Per Question */}
        <div>
          <Label
            htmlFor='time-per-question'
            className='text-gray-700 dark:text-gray-200 text-sm mb-2 font-medium block'
          >
            Time Per Question (seconds)
          </Label>
          <Select defaultValue='no-limit-per-question'>
            <SelectTrigger
              id='time-per-question'
              className='w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent rounded-md'
            >
              <SelectValue placeholder='Select time per question' />
            </SelectTrigger>
            <SelectContent className='bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600'>
              <SelectItem
                value='no-limit-per-question'
                className='text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                No limit per question
              </SelectItem>
              <SelectItem
                value='10'
                className='text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                10 seconds
              </SelectItem>
              <SelectItem
                value='20'
                className='text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                20 seconds
              </SelectItem>
              <SelectItem
                value='30'
                className='text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                30 seconds
              </SelectItem>
              <SelectItem
                value='60'
                className='text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                60 seconds
              </SelectItem>
              <SelectItem
                value='120'
                className='text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                2 minutes
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Randomize Questions */}
        <div className='flex items-center justify-between py-2'>
          <Label
            htmlFor='randomize-questions'
            className='text-gray-700 dark:text-gray-200 text-sm font-medium'
          >
            Randomize Questions
          </Label>
          <label className='relative inline-flex items-center cursor-pointer'>
            <input
              type='checkbox'
              id='randomize-questions'
              className='sr-only peer'
            />
            <div className="relative w-10 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:peer-focus:ring-blue-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500 dark:peer-checked:bg-blue-400"></div>
          </label>
        </div>

        {/* Show Explanations After Answering */}
        <div className='flex items-center justify-between py-2'>
          <Label
            htmlFor='show-explanations'
            className='text-gray-700 dark:text-gray-200 text-sm font-medium'
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
            <div className="relative w-10 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:peer-focus:ring-blue-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500 dark:peer-checked:bg-blue-400"></div>
          </label>
        </div>

        {/* Allow Retakes */}
        <div className='flex items-center justify-between py-2'>
          <Label
            htmlFor='allow-retakes'
            className='text-gray-700 dark:text-gray-200 text-sm font-medium'
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
            <div className="relative w-10 h-6 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:peer-focus:ring-blue-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500 dark:peer-checked:bg-blue-400"></div>
          </label>
        </div>

        {/* Passing Score */}
        <div className='py-2'>
          <div className='flex items-center justify-between mb-3'>
            <Label className='text-gray-700 dark:text-gray-200 text-sm font-medium'>
              Passing Score: 70%
            </Label>
          </div>
          <Slider
            defaultValue={[70]}
            max={100}
            min={0}
            step={1}
            className='w-full [&>span:first-child]:bg-gray-200 dark:[&>span:first-child]:bg-gray-600 [&_[role=slider]]:bg-blue-500 dark:[&_[role=slider]]:bg-blue-400 [&>span:first-child>span]:bg-blue-500 dark:[&>span:first-child>span]:bg-blue-400'
          />
        </div>

        {/* Quiz Visibility */}
        <div>
          <Label
            htmlFor='quiz-visibility'
            className='text-gray-700 dark:text-gray-200 text-sm mb-2 font-medium block'
          >
            Quiz Visibility
          </Label>
          <Select defaultValue='private'>
            <SelectTrigger
              id='quiz-visibility'
              className='w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent rounded-md'
            >
              <SelectValue placeholder='Select visibility' />
            </SelectTrigger>
            <SelectContent className='bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600'>
              <SelectItem
                value='private'
                className='text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                Private (Only you can see)
              </SelectItem>
              <SelectItem
                value='public'
                className='text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                Public (Everyone can see)
              </SelectItem>
              <SelectItem
                value='unlisted'
                className='text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                Unlisted (Only with link)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
