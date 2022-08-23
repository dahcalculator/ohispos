import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../components/axios'

const EditCate = () => {
  const {cate,setCategories} = useState([])
  const [editCateName, setEditCateName] = useState('');
  const [editCateCode, setEditCateCode] = useState('');

 

useEffect(() =>{
  const fetchCategory = async () => {
    const results = await api.get('/category/')
    setCategories(await results.data);
   }
   console.log(cate)
  fetchCategory();
}, [])

console.log(cate)


return(
     <div>

  
    </div>
  )
}

export default EditCate