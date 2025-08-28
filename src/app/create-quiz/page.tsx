import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Plus, Eye, Trash2, Save, Upload } from 'lucide-react'

export default function QuizForm() {
  return (
    <div className='min-h-screen w-full text-foreground p-4 sm:p-6 md:p-8 bg-background'>
      <Tabs defaultValue='quiz-details' className='w-full '>
        {/* Header/Navigation Tabs */}

        <TabsList className='grid w-full grid-cols-3 bg-[#f5f5f5] dark:bg-main'>
          <TabsTrigger
            value='quiz-details'
            className=' text-sm font-semibold dark:data-[state=active]:bg-default dark:dark:data-[state=active]:text-white data-[state=active]:bg-background text-foreground/70 data-[state=active]:text-foreground transition-transform'
          >
            Quiz Details
          </TabsTrigger>
          <TabsTrigger
            value='questions'
            className=' text-sm font- dark:data-[state=active]:bg-default  dark:data-[state=active]:text-white data-[state=active]:bg-background text-foreground/70 data-[state=active]:text-foreground transition-transform'
          >
            Questions
          </TabsTrigger>
          <TabsTrigger
            value='settings'
            className=' text-sm font-light dark:data-[state=active]:bg-default  dark:data-[state=active]:text-white data-[state=active]:bg-background text-foreground/70 data-[state=active]:text-foreground transition-transform'
          >
            Settings
          </TabsTrigger>
        </TabsList>

        {/* Tabs Content */}
        <div className='mt-10 bg-white dark:bg-transparent'>
          {/* Quiz Details Tab Content */}
          <TabsContent
            value='quiz-details'
            className='p-6 space-y-8 border border-gray-300 dark:border-slate-700 rounded-xl'
          >
            <h2 className='text-2xl font-bold text-foreground'>
              Quiz Information
            </h2>

            <div className='space-y-4'>
              <div>
                <Label
                  htmlFor='quiz-title'
                  className=' text-foreground text-sm mb-2 font-semibold'
                >
                  Quiz Title
                </Label>
                <Input
                  id='quiz-title'
                  placeholder='Untitled Quiz'
                  className='bg-transparent text-foreground placeholder:text-foreground/70 focus:ring-offset-0 focus:ring-0 border border-gray-300 dark:border-slate-700'
                />
              </div>

              <div>
                <Label
                  htmlFor='description'
                  className=' text-foreground text-sm mb-2 font-semibold'
                >
                  Description
                </Label>
                <Textarea
                  id='description'
                  placeholder='Quiz description'
                  className='bg-transparent text-foreground placeholder:text-foreground/70 min-h-[100px] resize-y focus:ring-offset-0 focus:ring-0 border border-gray-300 dark:border-slate-700'
                />
              </div>

              <div>
                <Label
                  htmlFor='difficulty-level'
                  className=' text-foreground text-sm mb-2 block'
                >
                  Difficulty Level
                </Label>
                <Select defaultValue='medium'>
                  <SelectTrigger
                    id='difficulty-level'
                    className='w-full bg-white text-foreground placeholder:text-foreground/70 focus:ring-offset-0 focus:ring-0 border border-gray-300 dark:border-slate-700'
                  >
                    <SelectValue placeholder='Select difficulty' />
                  </SelectTrigger>
                  <SelectContent className='bg-white text-foreground'>
                    <SelectItem value='easy'>Easy</SelectItem>
                    <SelectItem value='medium'>Medium</SelectItem>
                    <SelectItem value='hard'>Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor='tags'
                  className=' text-foreground text-sm mb-2 block'
                >
                  Tags
                </Label>
                <div className='flex items-center gap-2'>
                  <Input
                    id='tags'
                    placeholder='Add a tag'
                    className='flex-1 bg-transparent text-foreground placeholder:text-foreground/70 focus:ring-offset-0 focus:ring-0 border border-gray-300 dark:border-slate-700'
                  />
                  <Button className='bg-transparent hover:bg-main-hover text-foreground px-6 py-2 rounded-md'>
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Questions Tab Content */}
          <TabsContent
            value='questions'
            className='p-6 border border-gray-300 dark:border-slate-700 rounded-xl'
          >
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
                <h3 className='text-lg font-semibold text-foreground'>
                  Question 1
                </h3>
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
          </TabsContent>

          {/* Settings Tab Content */}
          <TabsContent
            value='settings'
            className='p-6 border border-gray-300 dark:border-slate-700 rounded-xl'
          >
            <h2 className='text-2xl font-bold text-foreground mb-8'>
              Quiz Settings
            </h2>

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
                    <SelectItem value='public'>
                      Public (Everyone can see)
                    </SelectItem>
                    <SelectItem value='unlisted'>
                      Unlisted (Only with link)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>

      {/* Footer Action Buttons */}
      <div className='flex flex-col sm:flex-row items-center justify-between p-6 bg-transparent  gap-4 text-foreground'>
        <div className='flex flex-wrap gap-3'>
          <Button className='bg-transparent dark:hover:bg-slate-800 hover:bg-main-hover border border-gray-300 dark:border-slate-700 text-foreground px-4 py-2 rounded-md'>
            <Plus className='w-4 h-4 mr-2' />
            New Quiz
          </Button>
          <Button className='bg-transparent dark:hover:bg-slate-800 hover:bg-main-hover border border-gray-300 dark:border-slate-700 text-foreground px-4 py-2 rounded-md'>
            <Eye className='w-4 h-4 mr-2' />
            Preview
          </Button>
        </div>
        <div className='flex flex-wrap gap-3'>
          <Button className='dark:bg-[#7F1D1D] bg-[#ef4444] hover:bg-[#b91c1c] text-white px-4 py-2 rounded-md border border-gray-300 dark:border-slate-700'>
            <Trash2 className='w-4 h-4 mr-2' />
            Delete Quiz
          </Button>
          <Button className='bg-transparent dark:hover:bg-slate-800 hover:bg-main-hover text-foreground px-4 py-2 rounded-md border border-gray-300 dark:border-slate-700'>
            <Save className='w-4 h-4 mr-2' />
            Save Draft
          </Button>
          <Button className='bg-default hover:bg-default-hover text-white px-4 py-2 rounded-md border border-gray-300 dark:border-slate-700'>
            <Upload className='w-4 h-4 mr-2' />
            Publish Quiz
          </Button>
        </div>
      </div>
    </div>
  )
}
