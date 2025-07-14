'use client'

import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'
import { Button } from '@/components/ui/button'
import { ChartConfig, ChartContainer } from './ui/chart'

const data = [
  { day: 'Mon', yourScore: 80, averageScore: 65 },
  { day: 'Tue', yourScore: 60, averageScore: 70 },
  { day: 'Wed', yourScore: 95, averageScore: 72 },
  { day: 'Thu', yourScore: 72, averageScore: 68 },
  { day: 'Fri', yourScore: 88, averageScore: 75 },
  { day: 'Sat', yourScore: 75, averageScore: 70 },
  { day: 'Sun', yourScore: 92, averageScore: 73 }
]

const chartConfig = {
  yourScore: {
    label: 'Your Score',
    color: 'hsl(var(--chart-1))'
  },
  avgScore: {
    label: 'Average Score',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig

export default function Component() {
  const [activeTab, setActiveTab] = useState('Performance')

  return (
    <div className='w-full max-w-4xl mx-auto p-6 bg-slate-900 text-white rounded-lg'>
      <h1 className='text-2xl font-bold mb-6'>Your Challenge Stats</h1>

      <div className='flex mb-6'>
        <Button
          variant={activeTab === 'Performance' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('Performance')}
          className={`mr-2 px-6 py-2 rounded-md ${
            activeTab === 'Performance'
              ? 'bg-slate-800 text-white'
              : 'bg-transparent text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          Performance
        </Button>
        <Button
          variant={activeTab === 'Categories' ? 'default' : 'ghost'}
          onClick={() => setActiveTab('Categories')}
          className={`px-6 py-2 rounded-md ${
            activeTab === 'Categories'
              ? 'bg-slate-800 text-white'
              : 'bg-transparent text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          Categories
        </Button>
      </div>

      {activeTab === 'Performance' && (
        <div className='space-y-6'>
          <div className='h-80'>
            <ChartContainer config={chartConfig}>
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
                barCategoryGap='20%'
              >
                <CartesianGrid
                  strokeDasharray='3 3'
                  stroke='#374151'
                  horizontal={true}
                  vertical={true}
                />
                <XAxis
                  dataKey='day'
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9CA3AF', fontSize: 14 }}
                />
                <YAxis
                  domain={[0, 100]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9CA3AF', fontSize: 14 }}
                  ticks={[0, 25, 50, 75, 100]}
                />
                <Bar
                  dataKey='yourScore'
                  fill='#8B5CF6'
                  radius={[2, 2, 0, 0]}
                  name='Your Score'
                />
                <Bar
                  dataKey='averageScore'
                  fill='#10B981'
                  radius={[2, 2, 0, 0]}
                  name='Average Score'
                />
              </BarChart>
            </ChartContainer>
          </div>

          <p className='text-center text-slate-400 text-sm'>
            Your daily challenge performance compared to the average
          </p>
        </div>
      )}

      {activeTab === 'Categories' && (
        <div className='h-80 flex items-center justify-center'>
          <p className='text-slate-400'>Categories view coming soon...</p>
        </div>
      )}
    </div>
  )
}
