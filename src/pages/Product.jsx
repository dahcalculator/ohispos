import React from 'react'
import SecondNav from '../components/SecondNav'
import AllProduct from './AllProduct'

const Product = (props) => {
  const {isLoading, data, handleDelete, handleEdit, refresh
  } = props;
  


  return (
    <div className='flex max-w-full '>
      <div className="items-center h-screen bg-gray-300 w- justify-items-center">
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