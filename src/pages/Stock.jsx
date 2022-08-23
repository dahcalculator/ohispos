import React, { useState, useEffect } from 'react'
import {MdSearch} from 'react-icons/md'
import SingleStock from './SingleStock'
import api from '../components/axios'


const Stock = (props) => {
  const { isLoading} = props;
const[stock, setStock] = useState([])
const [searchStock, setSearchStock] = useState('')


const fetchStock = async () => {
 const results = await api.get('/stock/')
 setStock(await results.data);
}



useEffect(() =>{
fetchStock();
}, [])




    return (
        
      <div className='flex flex-col h-full w-full  my-6 mx-6 gap-4 capitalize text-xl'>
     
      <div className=' flex'>
      stocks
     </div>
      <div className=' rounded-lg flex border-2  items-center shadow-md  h-12 w-64 '>
        <MdSearch className='text-3xl'/>
        <input 
        type="search" 
        placeholder='search here...' 
        name="" id="" 
        className='w-full h-full outline-none' 
        onChange={(event) => {
          setSearchStock(event.target.value)
        }}
        
        />
     </div>
     <div className=' flex justify-around items-center  '>
 
    
     </div>
     <div className='justify-around items-center  border-2 shadow-sm flex-wrap'>
 
         <table className=' border-3  border-collapse text-color-black flex-warp rounded-lg' style={{width:'100%'}}>
             <tr>
             <th>
               code
             </th> 
             <th>
               barcode
             </th>   
             <th>
               name
             </th>  
             <th>
               category
             </th>  
             <th>
               quantity
             </th>  
             <th>
               price
             </th>  
             <th>
               action
             </th>  
             </tr>
             {isLoading ? 'loading...'
             :
             <>
              {stock?.filter((val) => {
          if (searchStock === "") {
            return val
          }else  if(val.name.toLowerCase().includes(searchStock.toLowerCase())){
            return val
          } else  if(val.barcode === searchStock){
            return val
          }

        }).map((stock)=> {
              return(
    <>
    
    <SingleStock stock={stock}/>
    </>

            )})}
             </>
              }
            

           </table>
     </div>
     </div>
      )
    }

    
   
export default Stock