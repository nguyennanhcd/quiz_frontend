import { howItWorksData } from '@/constant/howItWorks'
import Image from 'next/image'

export default function HowItWorks() {
  return (
    <section className='bg-main mt-20 rounded-xs'>
      <div className='container p-4 md:p-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center mt-10'>
          <div className='space-y-2'>
            <div className='inline-block rounded-lg bg-slate-600 px-3 py-1 text-sm text-slate-300'>
              Simple Process
            </div>
            <h2 className='text-xl font-bold tracking-tighter sm:text-3xl'>
              How It Works
            </h2>
            <p className='text-slate-400 md:text-base/relaxed '>
              Getting started with our quiz platform is easy. Follow these
              simple steps to begin your quiz journey.
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-screen-2xl items-start gap-6 py-10 px-4 lg:grid-cols-3 lg:gap-10'>
          {howItWorksData.map((item, index) => (
            <div
              key={index}
              className='bg-main rounded-xl shadow-md overflow-hidden w-full h-full'
            >
              <div className='relative w-full h-48'>
                <Image
                  src={item.imageSrc || '/placeholder.svg'}
                  alt={item.altText}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='p-6 bg-slate-700'>
                <h3 className='text-lg font-semibold mb-1'>{item.title}</h3>
                <p className='text-base text-slate-400'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-center flex-col space-y-4'>
          <span className='text-white-primary'>
            Ready to start your quiz journey? Browse categories, find your
            interests, and begin challenging yourself today!
          </span>

          <div className='flex justify-center items-center gap-2 bg-slate-700 px-4 py-2 rounded-xl'>
            <span className='relative flex  w-3'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-emerald-500'></span>
            </span>
            <span className='text-white-primary text-sm'>
              3000+ users online now
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
