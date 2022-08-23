import React from 'react'
import Actions from '../components/Actions';
import {MdViewList, MdDelete, MdEdit } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom';



const SingleProduct = (props) => {
  const {prod, handleDelete } = props;
  
const { id } = useParams();
  const {  code, barcode,name, price, category} = prod;
        
  return (
    <>
    
<tr key={prod.id}>
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
{price}
</td>
<td className=' gap-4 flex items-center text-3xl '>
<Link to={`/viewproduct/${prod.id}`}> <Actions icon={ <MdViewList className='text-blue-500'/>} text='view' /> </Link>


<Link to={`/edit/${prod.id}`} > <Actions icon={ <MdEdit className='text-green-500'/>} text='edit' /> </Link>


<Link to={`/${prod.id}`}>  <Actions icon={ <MdDelete  onClick={(()=> handleDelete(prod.id))} className='text-red-500'/>} text='delete' /> </Link>
</td>
</tr>
    </>
  )
}

export default SingleProduct