import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Logout from './Logout'
import ErrorPage from './ErrorPage';
import Layout from '../components/Layout';
import Product from './Product';
import Pos from './Pos'
import Invoice from './Invoice'
import Stock from './Stock'
import data from '../DB'
import SingleProduct from './SingleProduct';
import AllProduct from './AllProduct';
import Cate from './Cate';
import CreateProduct from './CreateProduct'
import Users from './Users';
import Settings from './Settings';


const Pages = () => {


  const{ products} = data;

  return (
  <Layout >
    <Routes>
    <Route>
    <Route path='/' element={<Dashboard />}  />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/login' element={<Login />} />
    <Route path='/logout' element={<Logout />} />
    <Route path='/product'>
          <Route index element={<Product />} />
          <Route path='allproducts' element={<AllProduct />} />
          <Route path='createproduct' element={<CreateProduct />} />
          <Route path="singleproduct" element={<SingleProduct />} />
          <Route path="categories" element={<Cate />} />
    </Route>

    <Route path='/invoice' element={<Invoice />} />
    <Route path='/stock' element={<Stock />} />
    </Route>
    <Route path='/pos' element={
    <Pos  
    products={products} 
    />} 
    />
    <Route path='/users' element={
    <Users  
    />} 
    />
    <Route path='/settings' element={
    <Settings  
    />} 
    />
    <Route path='/*' element={<ErrorPage />} />
  </Routes>

  </Layout>

  )
}


export default Pages