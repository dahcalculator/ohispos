import React from 'react'
import { Link } from 'react-router-dom'
import {MdViewList, MdDelete, MdEdit,MdSearch} from 'react-icons/md'
const Invoice = () => {
  return (
      
    <div className='flex flex-col h-full  my-6 mx-6 gap-4 capitalize text-xl'>
     
    <div className=' flex'>
    Invoice
   </div>
    <div className=' rounded-lg flex border-2  items-center shadow-md  h-12 w-64 '>
      <MdSearch className='text-3xl'/>
      <input type="search" placeholder='search here...' name="" id="" className='w-full h-full outline-none' />
   </div>
   <div className=' flex justify-around items-center  '>

  
   </div>
   <div className='justify-around items-center  border-2 shadow-xl flex-wrap'>

       <table className=' border-3  border-collapse text-color-black flex-warp rounded-lg' style={{width:'100%'}}>
      <tbody>           <tr>
           <th>
             invoice-ID
           </th>  
           <th>
             staff-ID
           </th>  
           <th>
             customer-ID
           </th>  
           <th>
             product-ID
           </th>  
           <th>
             quantity
           </th>  
           <th>
             cost
           </th>  
           <th>
             action
           </th>  
           </tr>
           <tr>
             <td>
               12877sgx
             </td>
             <td>
               adam
             </td>
             <td>
               288s1
             </td>
             <td>
               4
             </td>
             <td>
               N 366,355
             </td>
             <td>
               N 366,355
             </td>
             <td className='  gap-4 flex items-center text-3xl '>
         <Link to='/'> <Actions icon={ <MdViewList className='text-blue-500'/>} text='view' /> </Link>
         <Link to='/'> <Actions icon={ <MdEdit className='text-green-500'/>} text='edit' /> </Link>
         <Link to='/'> <Actions icon={ <MdDelete className='text-red-500'/>} text='delete' /> </Link>
         </td>
           </tr>
           <tr>
             <td>
               12877sgx
             </td>
             <td>
               adam
             </td>
             <td>
               288s1
             </td>
             <td>
               4
             </td>
             <td>
               N 366,355
             </td>
             <td>
               N 366,355
             </td>
             <td className='  gap-4 flex items-center text-3xl '>
         <Link to='/'> <Actions icon={ <MdViewList className='text-blue-500'/>} text='view' /> </Link>
         <Link to='/'> <Actions icon={ <MdEdit className='text-green-500'/>} text='edit' /> </Link>
         <Link to='/'> <Actions icon={ <MdDelete className='text-red-500'/>} text='delete' /> </Link>
         </td>
           </tr>
         
           </tbody>

         </table>
   </div>
   </div>
    )
  }

  
  const Actions =({text, icon}) =>{
    return(
      <div className='actions group'>
       {icon}
        <span className='actions-tips group-hover:scale-100 '>
          {text}
        </span>
      </div>
    )
  }

export default Invoice