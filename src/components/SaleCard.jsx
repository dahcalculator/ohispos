import React from 'react'
import { useState } from 'react';
import {MdShoppingCart} from 'react-icons/md'

const SaleCard = ( props) => {
const {isLoading} = props; 
const[getData, setGetData] = useState(false)
  return (
   
    <div className='w-full h-64 bg-white rounded-xl shadow-xl  flex items-center justify-center shadow-md border-3 '>
    {isLoading?  <div className='loader'></div> :
     <>
    
      
      <MdShoppingCart className=' text-primary' style={{
        fontSize:'6rem',
        opacity: '65%'
    }}/>
      <div className=' flex capitalize flex-col justify- '>    
      <div className=" text-primary text-6xl">
      43877
      </div>
      <div className="text-2xl">
       day
    </div>
    </div>
      

     
    </>
    }
    </div>
    
  )
}

export default SaleCard