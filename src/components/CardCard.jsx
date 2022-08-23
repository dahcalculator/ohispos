import React from 'react'

const CardCard = ({ productName, amount, imgsrc, addTocart   }) => {


  return (
    <div className='flex flex-col w-48 p-1 duration-300 bg-white border-2 rounded-lg hover:scale-105 hover:border-2 hover:border-black h-60 text-1xl '>
        <div className='w-full h-full '>
        <img 
        src={imgsrc} 
        alt={productName}
        className='object-cover h-40 w-38 '
        />
        </div>
        <div className='flex flex-wrap w-full h-10 overflow-hidden font-bold'>
        {productName}
        </div>
        <div className='flex h-10 p-1 font-semibold text-white rounded-sm w-fit text-xm bg-primary '>
          price: {amount}
        </div>
        
    </div>
  )
}

export default CardCard