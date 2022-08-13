import React from 'react'
import SecondNav from '../components/SecondNav'

const Product = ({pikin}) => {
  return (
    <div className='flex w-screen '>
      <div className="w- bg-gray-300 h-screen ">
        <SecondNav/>
      </div>
      <div className="products w-screen flex m-0">
     products children
      </div>
      {pikin}
    </div>
  )
}

export default Product