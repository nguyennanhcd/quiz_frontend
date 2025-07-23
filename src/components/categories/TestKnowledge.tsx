import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Trophy, Sparkles, Users, ArrowRight } from 'lucide-react'

export default function TestKnowledge() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      <div className='container mx-auto px-4 py-16'>
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
        <div className='text-center mb-16'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent leading-tight'>
            Ready to Test Your Knowledge?
          </h1>
          <p className='text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed'>
            Choose from thousands of quizzes across all categories or create
            your own to challenge friends and the community.
          </p>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Button
              size='lg'
              className='bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300'
            >
              Explore Quizzes
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent'
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
              <div className='w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
                <Trophy className='w-8 h-8 text-white' />
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
              <div className='w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
                <Sparkles className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Learn & Grow
              </h3>
              <p className='text-slate-400 leading-relaxed'>
                Expand your knowledge across 20+ categories with fun,
                interactive quizzes.
              </p>
            </CardContent>
          </Card>

          {/* Connect & Share */}
          <Card className='bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group'>
            <CardContent className='p-8 text-center'>
              <div className='w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
                <Users className='w-8 h-8 text-white' />
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
        <div className='bg-slate-800 rounded-2xl p-6 flex items-center justify-between gap-4'>
          <div className='flex items-center gap-4'>
            <div className='w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0'>
              <Users className='w-8 h-8 text-white' />
            </div>
            <div className='text-white'>
              <span className='text-lg font-medium'>
                <span className='font-bold'>500,000+</span> quiz enthusiasts
                have joined our community. Will you be next?
              </span>
            </div>
          </div>
          <Button className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium flex-shrink-0'>
            Join Now
          </Button>
        </div>
      </div>
    </div>
  )
}
