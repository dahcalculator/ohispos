
import React from 'react'
import { useState } from 'react'
import SaleCard from '../components/SaleCard'
import Chart from '../components/Chart'
import { UserData } from '../Data'
import Table from '../components/Table'

const Dashboard = () => {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "user lost",
      data: UserData.map((data) => data.UserGain),
      backgroundColor: ['grey', 'pink', 'yellow', 'blue', 'black'],
      borderColor: 'green',
      borderWidth: '2px'
    },
  ],
  });


  return (
    <div className='flex flex-col h-full w-full '>
   
      <div className=' flex  justify-around items-center  my-6 mx-6 gap-14'>
      <SaleCard amount={2000} salename='total sale'/>
      <SaleCard amount={2000} salename='sales amount'/>
      <SaleCard amount={2000} salename='total pruduct'/>
      </div>

      <div className=' flex justify-around items-center  my-6 mx-6 gap-14 '>
    <Chart chartData={userData} />
    <Chart chartData={userData} />
    </div> 

    <div className='justify-around items-center  my-6 mx-6 gap-14 border-2'>
    <Table/>
    </div>

</div>

  )
}

export default Dashboard