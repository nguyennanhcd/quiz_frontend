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

export default function QuizDetailsTab() {
  return (
    <div className='p-6 space-y-8 border border-gray-300 dark:border-slate-700 rounded-xl'>
      <h2 className='text-2xl font-bold text-foreground'>Quiz Information</h2>

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
              className='w-full bg-white dark:bg-background text-foreground placeholder:text-foreground/70 focus:ring-offset-0 focus:ring-0 border border-gray-300 dark:border-slate-700'
            >
              <SelectValue placeholder='Select difficulty' />
            </SelectTrigger>
            <SelectContent className='bg-white dark:bg-background text-foreground'>
              <SelectItem value='easy'>Easy</SelectItem>
              <SelectItem value='medium'>Medium</SelectItem>
              <SelectItem value='hard'>Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor='tags' className=' text-foreground text-sm mb-2 block'>
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
    </div>
  )
}
