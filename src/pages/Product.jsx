import React from 'react'
import SecondNav from '../components/SecondNav'
import AllProduct from './AllProduct'

const Product = (props) => {
  const {isLoading, products, handleDelete, handleEdit
  } = props;
  


  return (
    <div className='flex max-w-full '>
      <div className="items-center h-screen bg-gray-300 w- justify-items-center">
          <SecondNav/>
      </div>
      <div className='w-full'>
      <AllProduct products={products} isLoading={isLoading}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      />
      </div>
      </div>
      
  )
}

export default Product