'use client'

import type * as React from 'react'
import {
  BookOpen,
  Home,
  Trophy,
  Grid3X3,
  Compass,
  Users,
  BarChart3,
  MessageSquare,
  Plus,
  LogOut
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from '@/components/ui/sidebar'

// Navigation items
const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home
  },
  {
    title: "Today's Challenge",
    url: '/daily-challenge',
    icon: Trophy
  },
  {
    title: 'Categories',
    url: '/categories',
    icon: Grid3X3
  },
  {
    title: 'Explore Quizzes',
    url: '/quizzes',
    icon: Compass
  },
  {
    title: 'Quiz Tournament',
    url: '/tournament',
    icon: Users
  },
  {
    title: 'Leaderboard',
    url: '/leaderboard',
    icon: BarChart3
  },
  {
    title: 'Quiz Discussions',
    url: '/discussions',
    icon: MessageSquare
  },
  {
    title: 'Create Quiz',
    url: '/create-quiz',
    icon: Plus
  }
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar collapsible='icon' className='' {...props}>
      <SidebarHeader className='bg-main border-x border-slate-600'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <Link href='/'>
                <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-default text-white'>
                  <BookOpen className='size-4' />
                </div>
                <div className='flex flex-col gap-0.5 leading-none'>
                  <span className='font-bold text-white'>QuizHub</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className='bg-main border border-slate-600'>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className='text-slate-300 hover:text-white hover:bg-slate-700 data-[active=true]:bg-blue-600 data-[active=true]:text-white'
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className='bg-main border-x border-slate-600'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className='text-slate-300 hover:text-white hover:bg-slate-700'>
              <LogOut />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
