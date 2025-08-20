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
    <div className='min-h-screen w-full text-white p-4 sm:p-6 md:p-8'>
      <div className=' rounded-lg shadow-lg overflow-hidden'>
        {/* Header/Navigation Tabs */}
        <Tabs defaultValue='quiz-details' className='w-full'>
          <TabsList className='grid w-full grid-cols-3 bg-slate-700'>
            <TabsTrigger
              value='quiz-details'
              className='sm:text-base text-sm font-semibold data-[state=active]:bg-slate-800'
            >
              Quiz Details
            </TabsTrigger>
            <TabsTrigger
              value='questions'
              className='sm:text-base text-sm font-semibold data-[state=active]:bg-slate-700'
            >
              Questions
            </TabsTrigger>
            <TabsTrigger
              value='settings'
              className='sm:text-base text-sm font-semibold data-[state=active]:bg-slate-700'
            >
              Settings
            </TabsTrigger>
          </TabsList>

          <div className='mt-10'>
            {/* Quiz Details Tab Content */}
            <TabsContent
              value='quiz-details'
              className='p-6 space-y-8 border border-slate-700 rounded-xl'
            >
              <h2 className='text-2xl font-bold text-white'>
                Quiz Information
              </h2>

              <div className='space-y-4'>
                <div>
                  <Label
                    htmlFor='quiz-title'
                    className='text-base text-gray-300 mb-2 block'
                  >
                    Quiz Title
                  </Label>
                  <Input
                    id='quiz-title'
                    placeholder='Untitled Quiz'
                    className='bg-[#2a2a2e] border-none text-white placeholder:text-gray-500 focus:ring-offset-0 focus:ring-0'
                  />
                </div>

                <div>
                  <Label
                    htmlFor='description'
                    className='text-base text-gray-300 mb-2 block'
                  >
                    Description
                  </Label>
                  <Textarea
                    id='description'
                    placeholder='Quiz description'
                    className='bg-[#2a2a2e] border-none text-white placeholder:text-gray-500 min-h-[100px] resize-y focus:ring-offset-0 focus:ring-0'
                  />
                </div>

                <div>
                  <Label
                    htmlFor='difficulty-level'
                    className='text-base text-gray-300 mb-2 block'
                  >
                    Difficulty Level
                  </Label>
                  <Select defaultValue='medium'>
                    <SelectTrigger
                      id='difficulty-level'
                      className='w-full bg-[#2a2a2e] border-none text-white focus:ring-offset-0 focus:ring-0'
                    >
                      <SelectValue placeholder='Select difficulty' />
                    </SelectTrigger>
                    <SelectContent className='bg-[#2a2a2e] text-white border-none'>
                      <SelectItem value='easy'>Easy</SelectItem>
                      <SelectItem value='medium'>Medium</SelectItem>
                      <SelectItem value='hard'>Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor='tags'
                    className='text-base text-gray-300 mb-2 block'
                  >
                    Tags
                  </Label>
                  <div className='flex items-center gap-2'>
                    <Input
                      id='tags'
                      placeholder='Add a tag'
                      className='flex-1 bg-[#2a2a2e] border-none text-white placeholder:text-gray-500 focus:ring-offset-0 focus:ring-0'
                    />
                    <Button className='bg-[#4a4a4e] hover:bg-[#5a5a5e] text-white px-6 py-2 rounded-md'>
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Questions Tab Content (Placeholder) */}
            <TabsContent value='questions' className='p-6'>
              <h2 className='text-2xl font-bold text-white'>
                Questions Management
              </h2>
              <p className='text-gray-400 mt-4'>
                Content for managing quiz questions will go here.
              </p>
            </TabsContent>

            {/* Settings Tab Content (Placeholder) */}
            <TabsContent value='settings' className='p-6'>
              <h2 className='text-2xl font-bold text-white'>Quiz Settings</h2>
              <p className='text-gray-400 mt-4'>
                Content for quiz settings will go here.
              </p>
            </TabsContent>
          </div>
        </Tabs>

        {/* Footer Action Buttons */}
        <div className='flex flex-col sm:flex-row items-center justify-between p-6 bg-transparent  gap-4'>
          <div className='flex flex-wrap gap-3'>
            <Button className='bg-transparent hover:bg-slate-800 border-slate-200 text-white px-4 py-2 rounded-md'>
              <Plus className='w-4 h-4 mr-2' />
              New Quiz
            </Button>
            <Button className='bg-transparent hover:bg-slate-800 border-slate-200 text-white px-4 py-2 rounded-md'>
              <Eye className='w-4 h-4 mr-2' />
              Preview
            </Button>
          </div>
          <div className='flex flex-wrap gap-3'>
            <Button className='bg-[#7F1D1D] hover:bg-[#b91c1c] text-white px-4 py-2 rounded-md'>
              <Trash2 className='w-4 h-4 mr-2' />
              Delete Quiz
            </Button>
            <Button className='bg-transparent hover:bg-slate-800 text-white px-4 py-2 rounded-md'>
              <Save className='w-4 h-4 mr-2' />
              Save Draft
            </Button>
            <Button className='bg-default hover:bg-default-hover text-white px-4 py-2 rounded-md'>
              <Upload className='w-4 h-4 mr-2' />
              Publish Quiz
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
