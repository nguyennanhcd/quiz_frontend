'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart'
import { BarChart, Bar, XAxis, CartesianGrid } from 'recharts'
import { performanceData } from '@/constant/performanceData'
import { useState } from 'react'
import ChallengePieChart from './ChallengePieChart'

const chartConfig = {
  yourScore: {
    label: 'Your Score'
  },
  avgScore: {
    label: 'Average Score'
  }
} satisfies ChartConfig

const ChallengeChart = () => {
  const [activeTab, setActiveTab] = useState('Performance')

  return (
    <section className=' bg-slate-900 text-white rounded-lg'>
      {/* Performance Chart */}
      <Card className='bg-slate-800 border-slate-700 lg:col-span-2 lg:row-span-2 py-6'>
        <CardHeader>
          <CardTitle>Your Challenge Stats</CardTitle>
          <div className='flex space-x-4'>
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
        </CardHeader>
        <CardContent>
          {activeTab === 'Performance' && (
            <div className='space-y-6'>
              <ChartContainer
                config={chartConfig}
                className='min-h-20 dark:[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-slate-700'
              >
                <BarChart
                  accessibilityLayer
                  data={performanceData}
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
                  <ChartLegend
                    content={<ChartLegendContent className='text-sm' />}
                  />
                  <ChartTooltip
                    cursor={{ fill: '#1e293b' }}
                    content={<ChartTooltipContent />}
                  />
                  <Bar
                    dataKey='yourScore'
                    fill='rgb(168 85 247)' // purple-500
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey='avgScore'
                    fill='rgb(34 197 94)' // green-500
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>

              <p className='text-center text-slate-400 text-sm'>
                Your daily challenge performance compared to the average
              </p>
            </div>
          )}
        </CardContent>

        {activeTab === 'Categories' && <ChallengePieChart />}
      </Card>
    </section>
  )
}

export default ChallengeChart
