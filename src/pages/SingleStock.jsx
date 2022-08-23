import React from 'react'
import Actions from '../components/Actions';
import {MdViewList, MdDelete, MdEdit } from 'react-icons/md'
import { Link } from 'react-router-dom';




const SingleStock = (props) => {
  const {stock} = props;
  const { id, code, barcode,name, price, category, quantity} = stock;
              
  return (
    <>
    <tr key={id} >
    <td>
      {code}
    </td>
    <td>
      {barcode}
    </td>
    <td>
      {name}
    </td>
    <td>
      {category}
    </td>
    <td>
      {quantity}
    </td>
    <td>
      {price}
    </td>
    <td className='  gap-4 flex items-center text-3xl '>
<Link to='/'> <Actions icon={ <MdViewList className='text-blue-500'/>} text='view' /> </Link>
<Link to='/'> <Actions icon={ <MdEdit className='text-green-500'/>} text='edit' /> </Link>
<Link to='/'> <Actions icon={ <MdDelete className='text-red-500'/>} text='delete' /> </Link>
</td>
 </tr>
    </>
  )
}

export default SingleStock