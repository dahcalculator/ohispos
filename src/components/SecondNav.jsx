import React from 'react'
import { Link } from 'react-router-dom'

const SecondNav = () => {
  return (
   
       <ul className='productMenu w-full flex h-full flex-col mt-10 gap-4 text-md p-4 '>
           <li className='secondNav-li w-40'>
               <Link to='/allproducts' >
                  products
               </Link>
           </li>
           <li className='secondNav-li'>
               <Link to='/categories' >
                   Categories
               </Link>
           </li>
       </ul>
  )
}

export default SecondNav