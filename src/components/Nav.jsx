import React from 'react'
import { Link } from 'react-router-dom'
import {} from 'react-full-screen'
import {MdAccountCircle, MdNotifications, MdFullscreen} from 'react-icons/md'
import logo from '../img/logo.png'


const Nav = (props) => {
const{handle} = props;
  return (
    <div className='container flex items-center w-full h-24 text-3xl bg-white shadow-sm'>
        <div className='w-full'>
            <Link to='/'>
                    <img src={logo} className='h-20 w-18' alt='logo' />
            </Link>
        </div>
        <ul className='flex items-center gap-10 capitalize justify'>
        <li  className='flex justify-center text-4xl item-center'>
                <button onClick={handle.enter} className='hover:text-primary'>
                   <MdFullscreen/>
                </button>
            </li>
            <li className='border-2 border-4 rounded-full hover:border-primary'>
                <Link to='/pos'>
                    pos
                </Link>
            </li>
            <li className='hover:text-primary'>
                <Link to='/'>
                   <MdNotifications/>
                </Link>
            </li>
            <li className='hover:text-primary' >
                <Link to='/'>
                   <MdAccountCircle/>
                </Link>
            </li>
        </ul>
    </div>
  )
}


export default Nav