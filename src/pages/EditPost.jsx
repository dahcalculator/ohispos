import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../components/axios'





const EditPost = () => {

  const [products, setProducts] = useState([])
 
useEffect(() =>{
  const fetchProducts = async () => {
   const results = await api.get('/product/')
   setProducts(await results.data)
  }

  fetchProducts();
}, [])

const {data} = products;
const { id } = useParams();
const prod = data?.find(prod => (prod.id).toString() === id);





console.log(data)

  return (
    <div>
    <div>EditPost</div>
   

    <input type="text" name="" id="" 
    defaultValue={prod.id}
    />
   
    </div>

  )
}

export default EditPost