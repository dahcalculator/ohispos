import React from 'react'
import {MdDetails} from 'react-icons/md'
import { useParams } from 'react-router-dom';

const ViewProduct = (props) => {
   const {products} = props;

   const { id } = useParams();
   const prod = products.find(prod => (prod.id).toString() === id);


  return (
    <div className='w-full capitalize flex flex-col ml-10 text-2xl h-full gap-10'>
      <div className='bg-gray-300 text-xl '> product details</div>
      <div className='flex'><MdDetails/> {prod.barcode} </div>
      <div className='w-full flex gap-10'>
        <table className='w-96 border-2 shadow-md gap-10'>
          <tbody className='flex flex-col gap-4 justify-center ml-4'>
         <tr><th>code</th>  
          <td> {prod.code} </td> </tr>
          <tr> <th>name</th>
          <td> {prod.name} </td></tr>
          <tr>  <th>category</th> 
          <td> {prod.category} </td></tr>
          <tr>  <th>price</th> 
          <td> {prod.price} </td></tr>
          <tr>  <th>quantity</th> 
          <td> {prod.quantity} </td> </tr>
          </tbody>
        </table>

        <div>
        <img src={prod.image} alt={`${prod.name}`} />
        </div>
      </div>
    </div>
  )
}

export default ViewProduct