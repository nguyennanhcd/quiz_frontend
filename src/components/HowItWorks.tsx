import Image from 'next/image'

const howItWorksData = [
  {
    imageSrc: '/placeholder.svg?height=192&width=300',
    altText: 'Browse Categories',
    title: 'Browse Categories',
    description:
      'Explore our diverse range of quiz categories to find topics that interest you.'
  },
  {
    imageSrc: '/placeholder.svg?height=192&width=300',
    altText: 'Take Quizzes',
    title: 'Take Quizzes',
    description:
      'Challenge yourself with quizzes of varying difficulty levels and formats.'
  },
  {
    imageSrc: '/placeholder.svg?height=192&width=300',
    altText: 'Earn Rewards',
    title: 'Earn Rewards',
    description:
      'Collect points, badges, and climb the leaderboards as you complete quizzes.'
  }
]

export default function HowItWorks() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 bg-slate-950 text-white'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='inline-block rounded-lg bg-slate-800 px-3 py-1 text-sm text-slate-300'>
              Simple Process
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              How It Works
            </h2>
            <p className='max-w-[900px] text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Getting started with our quiz platform is easy. Follow these
              simple steps to begin your quiz journey.
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12'>
          {howItWorksData.map((item, index) => (
            <div
              key={index}
              className='grid gap-4 rounded-lg bg-slate-900 p-6 shadow-lg'
            >
              <div className='relative w-full h-48 overflow-hidden rounded-md'>
                <Image
                  src={item.imageSrc || '/placeholder.svg'}
                  alt={item.altText}
                  width={300}
                  height={192}
                  className='object-cover w-full h-full'
                />
              </div>
              <h3 className='text-xl font-bold'>{item.title}</h3>
              <p className='text-slate-400'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
