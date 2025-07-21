import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { QuizType } from '@/types/quizType'
import { difficultyColors } from '@/constant/difficultColor'
import { Badge } from 'lucide-react'

const QuizCard = ({ id, title, category, difficulty, image }: QuizType) => {
  return (
    <div key={id} className='border rounded-xl overflow-hidden'>
      <div className='relative h-48'>
        <Image src={image} alt={title} fill className='object-cover ' />
        <Badge
          className={`absolute top-3 left-3 ${
            difficultyColors[difficulty as keyof typeof difficultyColors]
          } text-white`}
        >
          {difficulty}
        </Badge>
      </div>

      <div className='p-4'>
        <h3 className='font-bold text-lg mb-3 text-white truncate overflow-hidden'>
          {title}
        </h3>

        <Badge className='bg-slate-700 text-slate-300'>{category}</Badge>

        <Button className='w-full bg-default hover:bg-default-hover'>
          Play Now
        </Button>
      </div>
    </div>
  )
}

export default QuizCard
