

import React from 'react'

/*
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';
*/

const Chart = (props) => {
  const {isLoading} = props;
  return (
    <div className='w-full h-64 shadow-xl  bg-white rounded-xl shadow-md  flex items-center justify-center shadow-md border-3'>
        {isLoading?  <div class="loadingio-spinner-pulse-iageksyidln"><div class="ldio-25tpbqm2mcg">
            <div></div><div></div><div></div>
            </div></div>:
      
        <>
        
        < />
        }
     </div>
  )
}

export default Chart
