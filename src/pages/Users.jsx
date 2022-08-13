import React from 'react'
import { Link } from 'react-router-dom'
import {MdViewList, MdDelete, MdEdit} from 'react-icons/md'

const Users = () => {
    return(
    <div className='flex flex-col h-full  my-6 mx-6 gap-4 capitalize text-xl'>
    <div className=' flex'>
    user
   </div>
   <div className=' flex justify-around items-center  '>
   </div>
   <div className='justify-around items-center  border-2 shadow-xl flex-wrap'>

       <table className=' border-3  border-collapse text-color-black flex-warp rounded-lg' style={{width:'100%'}}>
      <tbody>           <tr>
           <th>
            staff-id
           </th>  
           <th>
             lastname
           </th>  
           <th>
             firstname
           </th>  
           <th>
             email
           </th>  
           <th>
             role
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
               bello
             </td>
             <td className='lowercase'>
               adam@gmail.com
             </td>
             <td>
               admin
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


export default Users