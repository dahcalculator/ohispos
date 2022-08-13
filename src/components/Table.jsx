import React from 'react'

const Table = () => {
  return (
<div className="w-full h-full  rounded-xl items-center justify-evenly p-1 flex flex-col  ">
<table className='shadow-md border-3  border-collapse text-color-black flex-warp rounded-lg' style={{width:'100%'}}>
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
  <th>
    quantity
  </th>  
  </tr>
  <tr>
    <td>
      22333
    </td>
    <td>
      slide
    </td>
    <td>
      shoe
    </td>
    <td>
      N 22333
    </td>
    <td>
      444
    </td>
  </tr>
  <tr>
    <td>
      22333
    </td>
    <td>
      slide
    </td>
    <td>
      shoe
    </td>
    <td>
      N 22333
    </td>
    <td>
      444
    </td>
  </tr>


</table>
</div>
  )
}

export default Table