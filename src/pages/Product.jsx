import React from 'react'
import SecondNav from '../components/SecondNav'
import AllProduct from './AllProduct'


const Product = () => {
  return (
    <div className='flex max-w-full '>
      <div className="w- bg-gray-300 h-screen ">
        <SecondNav/>
      </div>
      <AllProduct/>
      </div>
      
  )
}

export default Product