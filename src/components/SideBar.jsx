import React from 'react'
import { Link } from 'react-router-dom'
import {MdDashboard, MdShoppingCart , MdInventory, MdReceipt, MdReport, MdAccountCircle, MdSettings} from 'react-icons/md'


const SideBar = () => {

  return (
    
     <ul className='pt-4 h-full fixed'>

<li className='li-sidebar'>
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
 <li className='li-sidebar'>
    <Link to='/stock'>
    <Sidebaricon title='stock' icon={<MdInventory />} />
    </Link> 
 </li>
 <li className='li-sidebar'>
    <Link to='/invoice'>
    <Sidebaricon title='invoice' icon={<MdReceipt />} />
    </Link> 
 </li>
<li className='li-sidebar'>
    <Link to='/report'>
    <Sidebaricon title='report' icon={<MdReport />} />
    </Link> 
 </li>

<li>
    <Link to='/users'>
    <Sidebaricon title='users' icon={<MdAccountCircle />} />
    </Link> 
 </li>
<li>
    <Link to='/settings'>
    <Sidebaricon title='settings' icon={<MdSettings />} />
    </Link> 
 </li>
</ul>
  )
}


const Sidebaricon = ( {title, icon}) => {
  return(
  <div className="side-icon  text-1xl">
  <i className='text-primary text-4xl'>{icon}</i>
  <span className="title">
  {title}
  </span> 
  </div>
  )
}


export default SideBar