
import { useState, useEffect } from 'react'
import SaleCard from '../components/SaleCard'
import Chart from '../components/Chart'
import { UserData } from '../Data'
import Table from '../components/Table'

const Dashboard = (props) => {
  

const {data, isLoading} = props
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
    <div className='flex flex-col w-full h-full '>
   
      <div className='flex items-center justify-around mx-6 my-6 gap-14'>
      <SaleCard isLoading={isLoading} amount={2000} salename='total sale'/>
      <SaleCard isLoading={isLoading} amount={2000} salename='sales amount'/>
      <SaleCard isLoading={isLoading} amount={2000} salename='total pruduct'/>
      </div>

      <div className='flex items-center justify-around mx-6 my-6 gap-14'>
    <Chart isLoading={isLoading} chartData={userData} />
    <Chart  isLoading={isLoading} chartData={userData} />
    </div> 

    <div className='items-center justify-around mx-6 my-6 border-2 gap-14'>
    <Table isLoading={isLoading} data={data}/>
    </div>

</div>

  )
}

export default Dashboard