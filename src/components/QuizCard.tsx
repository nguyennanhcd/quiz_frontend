import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { difficultyColors } from '@/constant/difficultColor'
import { Badge } from '@/components/ui/badge'
import { Quiz } from '@/types/quiz'

const QuizCard = ({ title, category, difficulty, image }: Quiz) => {
  return (
    <div className='border rounded-xl overflow-hidden relative'>
      <div className='relative h-48'>
        <Image src={image} alt={title} fill className='object-cover ' />

        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4'>
          <div className='w-full'>
            <Badge
              className={`absolute top-3 left-3 ${
                difficultyColors[difficulty as keyof typeof difficultyColors].bg
              } text-white`}
            >
              {difficulty}
            </Badge>
            <h3 className='font-bold text-base mb-3 absolute bottom-3 text-white line-clamp-2 p-1'>
              {title}
            </h3>
          </div>
        </div>
      </div>

      <div className='p-4 flex justify-between overflow-hidden'>
        <div className='inline-flex items-center rounded-full border px-2.5 py-0 text-[12px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground bg-slate-50 dark:bg-slate-700'>
          {category}
        </div>

        <Button className=' bg-default hover:bg-default-hover'>Play Now</Button>
      </div>
    </div>
  )
}

export default QuizCard
