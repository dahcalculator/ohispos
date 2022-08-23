import React from 'react'
import Actions from '../components/Actions';
import {MdViewList, MdDelete, MdEdit } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom';

const SingleCategory = (props) => {
    const {cate, handleDeleteCate } = props;
    const{id } = useParams(); 
    const {  code,name } = cate;
                
    return (
      <>
       <tr key={id}>
  <td>
  {code}
  </td>
  <td>
  {name}
  </td>
  <td className='  gap-4 flex items-center text-3xl '>
  <Link to={`/viewcategory/${cate.id}`}> <Actions icon={ <MdViewList className='text-blue-500'/>} text='view' /> </Link>
  
  
  <Link to={`/${cate.id}/`}> <Actions icon={ <MdDelete
  className='text-red-500' onClick={(()=> handleDeleteCate(cate.id))} />} text='delete' 
  /> </Link>
  </td>
  </tr>
      </>
    )
  }
  
export default SingleCategory
