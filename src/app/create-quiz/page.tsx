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
            className=' text-sm font-semibold dark:data-[state=active]:bg-default  dark:data-[state=active]:text-white data-[state=active]:bg-background text-foreground/70 data-[state=active]:text-foreground transition-transform'
          >
            Questions
          </TabsTrigger>
          <TabsTrigger
            value='settings'
            className=' text-sm font-semibold dark:data-[state=active]:bg-default  dark:data-[state=active]:text-white data-[state=active]:bg-background text-foreground/70 data-[state=active]:text-foreground transition-transform'
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

          {/* Questions Tab Content (Placeholder) */}
          <TabsContent
            value='questions'
            className='p-6 border border-gray-300 dark:border-slate-700 rounded-xl'
          >
            <h2 className='text-2xl font-bold text-foreground'>
              Questions Management
            </h2>
            <p className='text-foreground mt-4'>
              Content for managing quiz questions will go here.
            </p>
          </TabsContent>

          {/* Settings Tab Content (Placeholder) */}
          <TabsContent
            value='settings'
            className='p-6 border border-gray-300 dark:border-slate-700 rounded-xl'
          >
            <h2 className='text-2xl font-bold text-foreground'>
              Quiz Settings
            </h2>
            <p className='text-foreground mt-4'>
              Content for quiz settings will go here.
            </p>
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
