import Image from 'next/image'
import Link from 'next/link'

interface CategoryCardProps {
  id: string
  name: string
  count: number
  slug: string
  imageUrl: string
}

export function CategoryCard({
  name,
  count,
  slug,
  imageUrl
}: CategoryCardProps) {
  return (
    <Link
      href={`/quizzes/${slug}`}
      className='block w-[300px] h-[200px] overflow-hidden' // Fixed size, no scroll
      style={{ overscrollBehavior: 'none' }} // Prevent touch scroll chaining
    >
      <div className='relative w-full h-full rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105'>
        <Image
          src={imageUrl || '/placeholder.svg'}
          alt={`${name} Quiz Background`}
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none' />

        {/* Category Tag */}
        <div className='absolute top-4 left-4 bg-gray-800/70 text-white px-3 py-1 rounded-full text-sm font-medium z-10'>
          {name}
        </div>

        {/* Count Badge */}
        <div className='absolute top-4 right-4 bg-white/40 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs font-medium'>
          {count}
        </div>
      </div>
    </Link>
  )
}
