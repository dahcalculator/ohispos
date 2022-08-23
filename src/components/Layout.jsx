import React, { useState } from 'react'
import {MdMenu} from 'react-icons/md'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { FullScreen, useFullScreenHandle } from "react-full-screen";



const Layout = ({children}) => {
  const handle = useFullScreenHandle();
    const[close, setClose] = useState(true);

  return (
    
        
     
    <div className=' flex flex-col w-screen h-screen 
    '>
      <FullScreen handle={handle}>    <div className='bg-white shadow-md w-full h-22 flex items-center justify-around pl-2 pr-2 fixed z-20'>
    
    <span className=' text-3xl ' onClick={()=> setClose(!close)}> <MdMenu /></span>
    <Nav handle={handle} />
    </div>    
    <div className='w-full h-full flex my-24 mx-34  z-0'>
    <div className={` ${close ? 'w-48': "hidden"}  duration-500 h-screen bg-white border-b-0  border-r-2  z-10 relative flex-wrap`} >
    <SideBar/>
    </div>
    <main className=' h-full w-full'>
    {children}
    <ToastContainer/>
    </main>
    </div>   
    </FullScreen>
    </div>
  )
}

export default Layout