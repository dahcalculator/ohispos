import React from 'react'
import { useParams } from 'react-router-dom';



const ViewProduct = (props) => {
  const {categories} = props;
  const { id } = useParams();
  const cate = categories.find(cate => (cate.id).toString() === id);

  return (
    <div className='w-full capitalize flex flex-col ml-10 text-2xl h-full gap-10'>
    <div className='bg-gray-300 w-fit h-fit p-10 text-2xl font-bold '> category details</div>
      <div className='w-full flex gap-10'>
        <table className='w-96 border-2 shadow-md gap-10 h-32 pb-10'>
          <tbody className='flex flex-col gap-4 justify-center'>
         <tr className='flex wi-full  gap-6  ml-4'><th>code</th>  
          <td> {cate.code} </td> </tr>
          <tr className='flex wi-full  gap-6  ml-4'> <th>name</th>
          <td> {cate.name} </td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewProduct

