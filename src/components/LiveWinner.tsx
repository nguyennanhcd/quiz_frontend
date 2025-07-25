import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { winners } from '@/constant/liveWinner'

export default function LiveWinners() {
  return (
    <div className='mt-20 bg-main p-5 rounded-xl'>
      <div className=' overflow-hidden'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-xl md:text-2xl font-bold flex items-center gap-3'>
            <span className='relative flex h-3 w-3'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-emerald-500'></span>
            </span>
            Live Winners
          </h2>
          <Button
            variant='ghost'
            className='rounded-full bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 text-sm'
          >
            8 recent winners
          </Button>
        </div>

        <div className='flex overflow-x-auto pb-4 px-2 gap-2'>
          {winners.map((winner) => (
            <Card
              key={winner.id}
              className='flex-shrink-0 w-fit h-fit max-w-full md:max-w-md px-3 relative overflow-hidden'
            >
              <div
                className='absolute top-4 right-4 text-2xl'
                role='img'
                aria-label='Confetti popper'
              >
                🎉
              </div>
              <div className='flex items-center gap-4 mb-4'>
                <Avatar className='w-12 h-12 border-2 border-white'>
                  <AvatarImage
                    src={winner.avatarUrl || '/placeholder.svg'}
                    alt={winner.name}
                  />
                  <AvatarFallback>{winner.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className='font-semibold text-lg'>{winner.name}</p>
                  <p className='text-gray-400 text-sm'>{winner.timeAgo}</p>
                </div>
              </div>
              <div className=' text-sm'>
                <span role='img' aria-label='Money bag'>
                  💰
                </span>
                Won{' '}
                <span className='text-emerald-400 font-semibold'>
                  ${winner.amountWon}
                </span>{' '}
                playing &quot;
                {winner.game}&quot;
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
