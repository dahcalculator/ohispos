import React from 'react'

const Table = (props) => {
  const{data, isLoading} = props
  return (
<div className="w-full h-full shadow-xl  bg-white rounded-xl items-center justify-evenly p-1 flex flex-col ">
{isLoading ? <div className='loader'></div> :  
<table className=' bg-white border-3  border-collapse text-color-black flex-warp rounded-lg w-full'>
  <th>Recent products</th>
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
 </tr>
{data?.map((prod)=> {
  const {id, code, name, category, price}=prod;
  console.log(prod)
  console.log('hi')
  return(

 <tr key={id}>
<td>
{code} 
</td>
<td>
{name}
</td>
<td>
{category}
</td>
<td>
{price}
</td>
</tr>
    
    )
  })}  
</table>
} 
</div>
  )
}

export default Table