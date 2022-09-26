import React from 'react'
import { chartObj } from './chartData'
import './chart.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
  return (
    <div className='chart'>
      <div className="chart__heading">
        <h5>Last seven days visits</h5>
      </div>

      <div className="chart__diagram">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartObj}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="visits" stroke="#1480bd" activeDot={{ r: 10 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Chart
