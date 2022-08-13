import React from 'react'
import { MdEdit,  MdDelete,MdSearch} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Categories = ({title ='category'}) => {
  return (

    <div className='flex flex-col h-full  my-6 mx-6 gap-4 capitalize text-xl'>
      
     
     
      <div className=' rounded-lg flex   items-center  h-14 w-full justify-between p-4  '>
        <div className=' border-b-2 uppercase font-bold bg-gray-400 p-4 w-34 justify-center flex h-14 ' >
          {title}
        </div>
        <button className=' border-b-2 uppercase font-bold bg-orange-400 hover:bg-primary text-white rounded-md cursor-pointer p-4 w-34 justify-center flex h-14 '>
          create
        </button>
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
               category name
             </th>  
             <th>
               category code
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
               <td className='  gap-4 flex items-center text-3xl '>
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

export default Categories