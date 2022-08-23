import React from 'react'
import { Link } from 'react-router-dom'
import {MdDashboard, MdShoppingCart , MdInventory, MdReceipt, MdReport, MdAccountCircle, MdSettings} from 'react-icons/md'


const SideBar = () => {

  return (
    
     <ul className='pt-4 w-44 h-full fixed oscroll-behavior-smooth;
     overflow-x-scroll '>

<li className='li-sidebar '>
    <Link to='/dashboard'>
    <Sidebaricon 
   
    title='dashboard' 
    icon={<MdDashboard />} 
    />
    </Link> 
 </li>
 
<li className='li-sidebar'>
    <Link to='/product'>
    <Sidebaricon title='product' icon={<MdShoppingCart />} />
    </Link> 
 </li>
</ul>
  )
}


const Sidebaricon = ( {title, icon}) => {
  return(
  <div className="side-icon text-1xl">
  <i className='text-2xl text-primary'>{icon}</i>
  <span className="title ">
  {title}
  </span> 
  </div>
  )
}


export default SideBar