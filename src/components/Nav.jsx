import React from 'react'
import { Link } from 'react-router-dom'
import {} from 'react-full-screen'
import {MdAccountCircle, MdNotifications, MdFullscreen} from 'react-icons/md'
import logo from '../img/logo.png'


const Nav = (props) => {
const{handle} = props;
  return (
    <div className='text-3xl container h-24 w-full flex  items-center shadow-sm bg-white'>
        <div className='w-full'>
            <Link to='/'>
                    <img src={logo} className='w-18 h-20' alt='logo' />
            </Link>
        </div>
        <ul className='capitalize flex gap-10 items-center  justify'>
        <li  className='flex justify-center item-center text-4xl'>
                <button onClick={handle.enter} className='hover:text-primary'>
                   <MdFullscreen/>
                </button>
            </li>
            <li className=' rounded-full border-2 hover:border-primary border-4  '>
                <Link to='/pos'>
                    pos
                </Link>
            </li>
            <li className='hover:text-primary'>
                <Link to='/notification'>
                   <MdNotifications/>
                </Link>
            </li>
            <li className='hover:text-primary' >
                <Link to='/user'>
                   <MdAccountCircle/>
                </Link>
            </li>
        </ul>
    </div>
  )
}


export default Nav