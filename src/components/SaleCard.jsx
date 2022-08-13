import React from 'react'
import {MdShoppingCart} from 'react-icons/md'

const SaleCard = ( {amount, salename}) => {
  return (
    <div className='w-full h-64  rounded-xl shadow-md  flex items-center justify-center shadow-md border-3 '>
      <MdShoppingCart className=' text-primary' style={{
        fontSize:'6rem',
        opacity: '65%'
    }}/>
      <div className=' flex capitalize flex-col justify- '>    
      <div className=" text-primary text-6xl">
       {amount}
      </div>
      <div className="text-2xl">
        {salename}
    </div>
    </div>
    </div>
  )
}

export default SaleCard