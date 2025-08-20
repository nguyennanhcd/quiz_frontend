import type React from 'react'
import {
  Search,
  ArrowRight,
  BookOpen,
  User,
  CreditCard,
  PlusCircle,
  Trophy,
  Shield,
  Settings
} from 'lucide-react'
import { Input } from '@/components/ui/input'

interface Article {
  id: string
  category: string
  title: string
  description: string
  readTime: string
  icon: React.ComponentType<{ className?: string }>
  slug: string
  content?: string
  tags?: string[]
  lastUpdated?: string
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced'
}

const articles: Article[] = [
  {
    id: '1',
    category: 'General',
    title: 'Getting Started with QuizHub',
    description:
      'Everything you need to know to begin your journey on our platform.',
    readTime: '5 min read',
    icon: BookOpen,
    slug: 'getting-started-with-quizhub',
    content: 'Complete guide to getting started...',
    tags: ['beginner', 'setup', 'introduction'],
    lastUpdated: '2024-01-15',
    difficulty: 'Beginner'
  },
  {
    id: '2',
    category: 'Account',
    title: 'Complete Account Setup Guide',
    description:
      'Learn how to set up your account, customize your profile, and configure your preferences.',
    readTime: '5 min read',
    icon: User,
    slug: 'complete-account-setup-guide',
    content: 'Step-by-step account setup instructions...',
    tags: ['account', 'profile', 'settings'],
    lastUpdated: '2024-01-12',
    difficulty: 'Beginner'
  },
  {
    id: '3',
    category: 'Billing',
    title: 'Managing Your Subscription',
    description:
      'Learn how to upgrade, downgrade, or cancel your subscription plan.',
    readTime: '4 min read',
    icon: CreditCard,
    slug: 'managing-your-subscription',
    content: 'Comprehensive billing and subscription management...',
    tags: ['billing', 'subscription', 'payment'],
    lastUpdated: '2024-01-10',
    difficulty: 'Beginner'
  },
  {
    id: '4',
    category: 'Quiz creation',
    title: 'Quiz Creation Basics',
    description:
      'A step-by-step guide to creating your first quiz from scratch.',
    readTime: '5 min read',
    icon: PlusCircle,
    slug: 'quiz-creation-basics',
    content: 'Learn the fundamentals of quiz creation...',
    tags: ['quiz', 'creation', 'basics'],
    lastUpdated: '2024-01-08',
    difficulty: 'Beginner'
  },
  {
    id: '5',
    category: 'Tournaments',
    title: 'Creating Your First Tournament',
    description:
      'Learn how to set up, configure, and launch a successful quiz tournament.',
    readTime: '6 min read',
    icon: Trophy,
    slug: 'creating-your-first-tournament',
    content: 'Tournament setup and management guide...',
    tags: ['tournament', 'competition', 'setup'],
    lastUpdated: '2024-01-05',
    difficulty: 'Intermediate'
  },
  {
    id: '6',
    category: 'Privacy',
    title: 'Understanding Privacy Settings',
    description:
      'A comprehensive guide to all privacy options available on the platform.',
    readTime: '5 min read',
    icon: Shield,
    slug: 'understanding-privacy-settings',
    content: 'Complete privacy settings overview...',
    tags: ['privacy', 'security', 'settings'],
    lastUpdated: '2024-01-03',
    difficulty: 'Beginner'
  },
  {
    id: '7',
    category: 'Quiz creation',
    title: 'Advanced Quiz Features',
    description:
      'Explore advanced features like timers, multimedia questions, and custom scoring.',
    readTime: '8 min read',
    icon: Settings,
    slug: 'advanced-quiz-features',
    content: 'Deep dive into advanced quiz functionality...',
    tags: ['quiz', 'advanced', 'features'],
    lastUpdated: '2024-01-01',
    difficulty: 'Advanced'
  },
  {
    id: '8',
    category: 'Account',
    title: 'Profile Customization Guide',
    description:
      'Learn how to personalize your profile with avatars, bio, and social links.',
    readTime: '3 min read',
    icon: User,
    slug: 'profile-customization-guide',
    content: 'Complete profile customization walkthrough...',
    tags: ['profile', 'customization', 'personalization'],
    lastUpdated: '2023-12-28',
    difficulty: 'Beginner'
  },
  {
    id: '9',
    category: 'Tournaments',
    title: 'Tournament Moderation Tools',
    description:
      'Master the tools available for moderating and managing tournament participants.',
    readTime: '7 min read',
    icon: Shield,
    slug: 'tournament-moderation-tools',
    content: 'Tournament moderation best practices...',
    tags: ['tournament', 'moderation', 'management'],
    lastUpdated: '2023-12-25',
    difficulty: 'Advanced'
  },
  {
    id: '10',
    category: 'Billing',
    title: 'Understanding Pricing Plans',
    description:
      'Compare different pricing tiers and find the plan that best suits your needs.',
    readTime: '4 min read',
    icon: CreditCard,
    slug: 'understanding-pricing-plans',
    content: 'Detailed pricing plan comparison...',
    tags: ['pricing', 'plans', 'comparison'],
    lastUpdated: '2023-12-22',
    difficulty: 'Beginner'
  },
  {
    id: '11',
    category: 'General',
    title: 'Mobile App Features',
    description:
      'Discover all the features available in our mobile application.',
    readTime: '6 min read',
    icon: BookOpen,
    slug: 'mobile-app-features',
    content: 'Complete mobile app feature overview...',
    tags: ['mobile', 'app', 'features'],
    lastUpdated: '2023-12-20',
    difficulty: 'Beginner'
  },
  {
    id: '12',
    category: 'Privacy',
    title: 'Data Export and Deletion',
    description:
      'Learn how to export your data or permanently delete your account.',
    readTime: '4 min read',
    icon: Shield,
    slug: 'data-export-and-deletion',
    content: 'Data management and account deletion guide...',
    tags: ['data', 'export', 'deletion', 'gdpr'],
    lastUpdated: '2023-12-18',
    difficulty: 'Intermediate'
  }
]

export function KnowledgeBase() {
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold text-white'>
          All Categories Knowledge Base
        </h2>
        <div className='relative w-80'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4' />
          <Input
            placeholder='Search articles...'
            className='pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400'
          />
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {articles.map((article) => {
          const IconComponent = article.icon
          return (
            <div
              key={article.id}
              className='bg-slate-800 border border-slate-700 rounded-lg p-6 hover:bg-slate-750 transition-colors cursor-pointer'
            >
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center gap-2'>
                  <IconComponent className='h-4 w-4 text-slate-400' />
                  <span className='text-sm text-slate-400'>
                    {article.category}
                  </span>
                </div>
                <span className='text-sm text-slate-400'>
                  {article.readTime}
                </span>
              </div>
              <h3 className='text-lg font-semibold text-white mb-2'>
                {article.title}
              </h3>
              <p className='text-slate-300 text-sm mb-4'>
                {article.description}
              </p>
              <div className='flex items-center text-blue-400 hover:text-blue-300 transition-colors'>
                <span className='text-sm font-medium'>Read article</span>
                <ArrowRight className='h-4 w-4 ml-1' />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
