/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const data = [
  { name: 'Science', value: 35, color: '#8B5CF6' },
  { name: 'History', value: 25, color: '#10B981' },
  { name: 'Geography', value: 20, color: '#F59E0B' },
  { name: 'Entertainment', value: 15, color: '#EF4444' },
  { name: 'Sports', value: 5, color: '#3B82F6' }
]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.2
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
      className='text-sm font-medium'
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

const CustomLegend = (props: any) => {
  // Provide a default empty array to avoid undefined errors
  const { payload = [] } = props

  if (!payload.length) return null

  return (
    <div className='flex flex-wrap justify-center gap-4 mt-6'>
      {payload.map((entry: any, index: number) => (
        <div key={index} className='flex items-center gap-2'>
          <div
            className='w-3 h-3 rounded-full'
            style={{ backgroundColor: entry.color }}
          />
          <span className='text-white text-sm font-medium'>{entry.value}</span>
        </div>
      ))}
    </div>
  )
}

export default function ChallengePieChart() {
  return (
    <div className='w-full max-w-4xl mx-auto p-8 bg-slate-900 rounded-lg'>
      <div className='h-96'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill='#8884d8'
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className='text-center text-gray-400 text-sm mt-4'>
        Distribution of your correct answers by category
      </p>
    </div>
  )
}
