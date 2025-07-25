import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Trophy, Sparkles, Users, ArrowRight } from 'lucide-react'

export default function TestKnowledge() {
  return (
    <div className='bg-gradient-to-br bg-default to-indigo-900 rounded-xl px-6 py-10 w-full overflow-hidden shadow-lg mt-10'>
      {/* Header Badge */}
      <div className='flex justify-center mb-12'>
        <div className='inline-flex items-center gap-2 bg-slate-800/50 border border-purple-500/20 rounded-full px-6 py-3 backdrop-blur-sm'>
          <Sparkles className='w-5 h-5 text-purple-400' />
          <span className='text-slate-300 text-sm font-medium'>
            Discover Your Next Challenge
          </span>
        </div>
      </div>

      {/* Main Hero Section */}
      <div className='text-center mb-10'>
        <h1 className='text-2xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent leading-tight'>
          Ready to Test Your Knowledge?
        </h1>
        <p className='text-white-primary text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed'>
          Choose from thousands of quizzes across all categories or create your
          own to challenge friends and the community.
        </p>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Button
            size='lg'
            className='bg-gradient-to-r from-default to-default/60 hover:from-default-hover hover:to-default-hover/60 text-white px-8 py-6  font-semibold rounded-xl shadow-lg hover:shadow-default-hover/25 transition-all duration-300 text-base'
          >
            Explore Quizzes
            <ArrowRight className='w-5 h-5 ml-2' />
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 font-semibold rounded-xl transition-all duration-300 bg-transparent text-base'
          >
            Create Your Own Quiz
          </Button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {/* Compete & Win */}
        <Card className='bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group'>
          <CardContent className='p-8 text-center'>
            <div className='inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-4'>
              <Trophy className='w-6 h-6 text-purple-400' />
            </div>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Compete & Win
            </h3>
            <p className='text-slate-400 leading-relaxed'>
              Join tournaments, climb the leaderboards, and earn rewards for
              your knowledge.
            </p>
          </CardContent>
        </Card>

        {/* Learn & Grow */}
        <Card className='bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group'>
          <CardContent className='p-8 text-center'>
            <div className='inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 dark:bg-indigo-900/30 mb-4'>
              <Sparkles className='w-6 h-6 text-indigo-400' />
            </div>
            <h3 className='text-2xl font-bold text-white mb-4'>Learn & Grow</h3>
            <p className='text-slate-400 leading-relaxed'>
              Expand your knowledge across 20+ categories with fun, interactive
              quizzes.
            </p>
          </CardContent>
        </Card>

        {/* Connect & Share */}
        <Card className='bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group'>
          <CardContent className='p-8 text-center'>
            <div className='inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4'>
              <Users className='w-6 h-6 text-blue-400' />
            </div>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Connect & Share
            </h3>
            <p className='text-slate-400 leading-relaxed'>
              Challenge friends, share results, and join a community of quiz
              enthusiasts.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Join Our Community */}
      <div className='bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group flex items-center justify-between gap-4 mt-15 px-8 py-5 w-[80%] mx-auto rounded-2xl'>
        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 bg-default rounded-full flex items-center justify-center flex-shrink-0'>
            <Users className='w-5 h-5 text-white' />
          </div>
          <div className='text-white'>
            <span className='text-lg font-medium'>
              <span className='font-bold'>500,000+</span> quiz enthusiasts have
              joined our community. Will you be next?
            </span>
          </div>
        </div>
        <Button className='bg-default-hover hover:bg-default-hover text-white px-6 py-2 rounded-lg font-medium flex-shrink-0'>
          Join Now
        </Button>
      </div>
    </div>
  )
}
