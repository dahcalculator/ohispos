import React from 'react'
import SecondNav from '../components/SecondNav'
import AllProduct from './AllProduct'

const Product = (props) => {
  const {isLoading, data, handleDelete, handleEdit, refresh
  } = props;
  


  return (
    <div className='flex max-w-full '>
      <div className="w- bg-gray-300 h-screen   justify-items-center items-center">
        <button onClick={() => refresh()} > refresh here</button>
        <SecondNav/>
      </div>
      <div className='w-full'>
      <AllProduct data={data} isLoading={isLoading}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      />
      </div>
      </div>
      
  )
}

export default Product