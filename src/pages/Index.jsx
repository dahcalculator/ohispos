import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Logout from './Logout'
import ErrorPage from './ErrorPage';
import Layout from '../components/Layout';
import Product from './Product';
import Pos from './Pos'
import Invoice from './Invoice'
import Stock from './Stock'
import SingleProduct from './SingleProduct';
import AllProduct from './AllProduct';
import Cate from './Cate';
import CreateProduct from './CreateProduct'
import Users from './Users';
import Settings from './Settings';
import { useEffect, useState } from 'react';
import api from '../components/axios'
import EditPost from './EditPost'
import EditCate from './EditCate'
import ViewProduct from './ViewProduct'
import ViewCategory from './ViewCategory'
import { toast } from 'react-toastify'
import Reg from './Reg'
import useRefreshToken from '../hooks/useRefreshToken'
import UseAxiosPrivate from '../hooks/useAxiosPrivate'


const Index = () => {
  const [products, setProducts] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [prodName, setProdName] = useState('');
const [prodCode, setProdCode] = useState('');
const [prodBarcode, setProdBarcode] = useState('');
const [prodCategory, setProdCategory] = useState('');
const [prodPrice, setProdPrice] = useState('');
const [prodImage, setProdImage] = useState('');



const [editProdName, setEditProdName] = useState('');
const [editProdCode, setEditProdCode] = useState('');
const [editProdBarcode, setEditProdBarcode] = useState('');
const [editProdCategory, setEditProdCategory] = useState('');
const [editProdPrice, setEditProdPrice] = useState('');
const [editProdImage, setEditProdImage] = useState('');



const [categories, setCategories] = useState('');




const axiosPrivate = UseAxiosPrivate();
const refresh = useRefreshToken();




const toastoptions = {
  autoclose: 400,
  pauseOnHover: true
}






// const fetchCategory = async () => {
//   const results = await api.get('/category/')
//   setCategories(await results.data);
//  }
 
//  useEffect(() =>{
//  fetchCategory();
//  }, [])
 




useEffect(() =>{ 
  let isMounted = true;
  const controller = new AbortController();
  const getCategory = async () => {
    try{
      const res = await axiosPrivate.get('/category', {
        signal: controller.signal
      });
      console.log(res.data)
      isMounted && setCategories(res.data)
  } catch (err) {
    console.error(err)
  }
}
getCategory();
return () => {
  isMounted = false;
  controller.abort();
}
}, [])




// useEffect(() =>{
//   const fetchProducts = async () => {
//     setIsLoading(true);
//    const results = await api.get('/product/')
//    setProducts(await results.data);
//    setIsLoading(false);
//   }

//   fetchProducts();
// }, [])
// // console.log(products)
// const {data} = products;
const navigate = useNavigate()


//the test

useEffect(() =>{
  let isMounted = true;
  const controller = new AbortController();
  const getProducts = async () => {
    try{
      const res = await axiosPrivate.get('/product', {
        signal: controller.signal
      });
      console.log(res.data)
      isMounted && setProducts(res.data)
  } catch (err) {
    console.error(err)
  }
}
getProducts();
return () => {
  isMounted = false;
  controller.abort();
}
}, [])





const handleSubmit= (e) => {
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", "Bearer 6|njvRDzgitMKpUMFDTKZDhIfdofEchrgfJ4rxI0kt");
  
  const newProduct = {
    name: prodName,
    code: prodCode,
    barcode: prodBarcode,
    price: prodPrice,
    category: prodCategory,
    image: prodImage
      };
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(newProduct),
    redirect: 'follow'
  };
  
  fetch("http://ohisstores.pgis.org.ng/api/product", requestOptions)
    .then(response => response.text())
    .then(result => alert(result))
    .catch(error => console.log('error', error));
  
  }


const handleEdit = async (id) =>{
  const editProduct = {
    name: editProdName,
    code: editProdCode, 
    barcode: editProdBarcode,  
    price: editProdPrice, 
    category: editProdCategory, 
    image: editProdImage
  }
  try {
    const response = await api.put(`/product/${id}`, editProduct);
    setProducts(products.map(prod => prod.id === id ? { ...response.data } : prod));
    setEditProdName('');
    setEditProdBarcode('');
    setEditProdCode('');
    setEditProdCategory('');
    setEditProdPrice('');
    setEditProdImage('');
    navigate("/product")
    toast(`edited ${products.name} from products`, toastoptions)
   } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}



const handleDelete = async (id) => {
  try {
    await api.delete(`/product/${id}`);
    const prodList = products?.filter(prod =>  prod.id !== id);
    setProducts(prodList);
   navigate('/product')
   toast(`deletetd ${prodName} from products`, toastoptions)
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}


  return (
    <Layout >
    <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/login' element={<Login />} />
    
    <Route path='/register' element={<Reg/>} />
    <Route path='/dashboard' element={<Dashboard 
     isLoading={isLoading} 
     data={products}
    />} />
    <Route path='/logout' element={<Logout />} />
 
    <Route path='/product' element={<Product 
    data={products} 
    isLoading={isLoading} 
    handleDelete={handleDelete} 
    handleEdit={handleEdit} 
    prodBarcode={prodBarcode}
    prodCategory={prodCategory}
    prodCode={prodCode}
    prodImage={prodImage}
    prodName={prodName}
    prodPrice={prodPrice}
    setProdBarcode={setProdBarcode}
    setProdCategory={setProdCategory}
    setProdCode={setProdCode}
    setProdImage={setProdImage}
    setProdName={setProdName}
    setProdPrice={setProdPrice}
    refresh={refresh}
    />} />
    <Route  path='/allproducts' element={<AllProduct 
    data={products} 
    isLoading={isLoading}  
    handleDelete={handleDelete} 
    handleEdit={handleEdit}
    setProducts={setProducts}
    categories={categories}
    setCategories={setCategories}
    products={products}
    />}
    />
    <Route  path='/singleproduct' element={<SingleProduct data={products} />} />
    <Route  path='createproduct' element={
    <CreateProduct 
    data={products}
    setProducts={setProducts}
    categories={categories}
    setCategories={setCategories}
    products={products}
    handleSubmit={handleSubmit} 

    />} 
    />
    <Route path='/viewproduct/:id' element={
    <ViewProduct
     data={products} 
    />} />
    <Route  path='/edit/:id' element={
    <EditPost 
    handleEdit={handleEdit}
    editProdBarcode={editProdBarcode}
    setProdBarcode={setEditProdBarcode}
    editProdCategory={editProdCategory}
    setEditProdCategory={setEditProdCategory}
    editProdName={editProdName}
    setEditProdName={setEditProdName}
    editProdPrice={editProdPrice}
    setEditProdPrice={setEditProdPrice}
    editProdImage={editProdImage}
    setEditProdImage={setEditProdImage}
    editProdCode={editProdCode}
    setEditProdCode={setEditProdCode}
    data={products}
    />} 
    />

    <Route path="/categories" element={<Cate isLoading={isLoading} />} />
    <Route path='/editcategory/:id' 
    element={<EditCate />}
    />
    <Route path='/viewcategory/:id' element={<ViewCategory 
    categories={categories}
    setCategories={setCategories}
    />}
    />


    <Route path='/invoice' element={<Invoice />} />
    <Route path='/stock' element={<Stock 
    
    isLoading={isLoading} />} />
    <Route path='/pos' element={
    <Pos  
    products={products}
    setProducts={setProducts}
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

export default Index