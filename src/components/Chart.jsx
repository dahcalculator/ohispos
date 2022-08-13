

import React from 'react'

/*
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';
*/

const Chart = ({chartData}) => {
  return (
    <div className='w-full h-64  rounded-xl shadow-md  flex items-center justify-center shadow-md border-3'>
      
        <a data={chartData} />
    </div>
  )
}

export default Chart
