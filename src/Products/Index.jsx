import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SingleProduct from './SingleProduct';
import AllProduct from './AllProduct';
import Cate from './Cate';
import CreateProduct from './CreateProduct'
import ProductLayout from '../components/ProductLayout'

const Index = () => {
  return (
    <ProductLayout>
    <Routes>
    <Route path='/product'>
          <Route index element={<Product />} />
          <Route path='allproducts' element={<AllProduct />} />
          <Route path='createproduct' element={<CreateProduct />} />
          <Route path="singleproduct" element={<SingleProduct />} />
          <Route path="categories" element={<Cate />} />
    </Route>
  </Routes>
  <ProductLayout>
  )
}

export default Index