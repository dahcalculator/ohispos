import React from 'react'
import logo from '../img/logo.png'

const Login = () => {
  return (
    <div className='w-full h-full flex justify-center items-center '>
       <div className='w-1/2 h-1/2 flex border-2 shadow-1xl justify-center item-center rounded-md  bg-white'>
        <div className='w-full h-full flex flex-col gap-2 font-semibold text-3xl justify-center items-center' >
            <img className='w-1/2 h-40  ' src={`${logo}`} />
           <span className='text-4xl uppercase text-primary' > ohi's stores</span>
        
        </div>
        <div className='w-full capitalize'>
          <form className='w-full flex flex-col text-xl font-semibold justify-center gap-4 h-full capitalize p-2'>
            <div className=''>
            <label htmlFor="email">email
            </label>
            <input placeholder='example@gmail.com' className='  pl-2 w-full h-14 bg-gray-200 hover:border-b-gray-400 border-2 outline-0' type="email" name="email" id="email" required />
            </div>
            <div className=''>
            <label htmlFor="password">id number
            </label>
            <input placeholder='************' className='border-outline-0 hover:border-b-gray-400 border-2 pl-2 w-full h-14 bg-gray-200   outline-0' type="password" name="password" id="password" required />
            </div>

             <button type="submit" className='flex items-center justify-center w-1/2 h-14 bg-primary text-white capitalize font-semibold  rounded-md shadow-xl'> login</button>
       
          </form>
        </div>
       </div>
       
    </div>
  )
}

export default Login