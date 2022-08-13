import React from 'react'

const CardCard = ({ productName, amount, imgsrc, addTocart   }) => {


  return (
    <div className='w-48 hover:scale-105 hover:border-2 hover:border-black h-60 duration-300  border-2 flex-col text-1xl rounded-lg  bg-white flex p-1 '>
        <div className='h-full w-full '>
        <img 
        src={imgsrc} 
        alt={productName}
        className='object-cover h-38 w-96 '
        />
        </div>
        <div className='w-full h-10  flex flex-wrap font-bold overflow-hidden'>
        {productName}
        </div>
        <div className='w-fit h-10 flex text-xm  font-semibold rounded-sm bg-primary text-white p-1 '>
          price: {amount}
        </div>
        
    </div>
  )
}

export default CardCard