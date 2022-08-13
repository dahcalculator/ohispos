import React from 'react'
import { Link } from 'react-router-dom'
import {MdViewList, MdDelete, MdEdit,MdSearch} from 'react-icons/md'

const AllProduct = () => {
    return (
        
      <div className='flex flex-col h-full w-full  my-6 mx-6 gap-4 capitalize text-xl'>
     
      <div className=' flex'>
      all product
     </div>
      <div className=' rounded-lg flex border-2  items-center shadow-md  h-12 w-64 '>
        <MdSearch className='text-3xl'/>
        <input type="search" placeholder='search here...' name="" id="" className='w-full h-full outline-none' />
     </div>
     <div className=' flex justify-around items-center  '>
 
    
     </div>
     <div className='justify-around items-center  border-2 shadow-xl flex-wrap'>
 
         <table className=' border-3  border-collapse text-color-black flex-warp rounded-lg' style={{width:'100%'}}>
             <tr>
             <th>
               code
             </th>  
             <th>
               name
             </th>  
             <th>
               category
             </th>  
             <th>
               price
             </th>  
             <th>
               quantity
             </th>  
             <th>
               action
             </th>  
             </tr>
             <tr>
               <td>
                 22333
               </td>
               <td>
                 slide
               </td>
               <td>
                 shoe
               </td>
               <td>
                 N 22333
               </td>
               <td>
                 444
               </td>
               <td className='  gap-4 flex items-center text-3xl '>
           <Link to='/'> <Actions icon={ <MdViewList className='text-blue-500'/>} text='view' /> </Link>
           <Link to='/'> <Actions icon={ <MdEdit className='text-green-500'/>} text='edit' /> </Link>
           <Link to='/'> <Actions icon={ <MdDelete className='text-red-500'/>} text='delete' /> </Link>
           </td>
             </tr>
           
           
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

export default AllProduct
