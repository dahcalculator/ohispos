import React from 'react'
import { useState } from 'react';
import api from '../components/axios'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import * as FormData from 'form-data'
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF"];

const CreateProduct = (props) => {
const { categories} = props
const [prodName, setProdName] = useState('');
const [prodCode, setProdCode] = useState('');
const [prodBarcode, setProdBarcode] = useState('');
const [prodCategory, setProdCategory] = useState('');
const [prodPrice, setProdPrice] = useState('');
const [prodQuantity, setProdQuantity] = useState('');

const [prodImage, setProdImage] = useState(null);
const handleChange = (prodImage) => {
    setProdImage(prodImage);
  };



const navigate = useNavigate();

const handleSubmit= (e) => {
  var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", "Bearer 6|njvRDzgitMKpUMFDTKZDhIfdofEchrgfJ4rxI0kt");
myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6Im5aQWQ5MURySHRyYXZXWlRFc1pMc0E9PSIsInZhbHVlIjoiZ2RlK0J6cHNJaXVXYUlZcEtLUFlYem5rbEZXT0lLdkd1RE9sREZiTUsrOFBaaWRFWnNrQ3hCYmFpTm1VZGNFTDdFUk5WeGhmSTZwRFlsbk1JTDBHWXNIN1JjSkpkc0tHNHk0M1E2R3hjVmNVS0M1N1dCVGtuTi9GVW1yc2dQcnIiLCJtYWMiOiIzY2FhMWU0MmY0MTdjNmMzNjcxYzI0ZDIyNjFiYzc5YTBhN2JjOWE1MzU1ODUxOTU4ZDBmZWYzZGQ0MDI4Zjk4IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IjJrZlNnbWhDOFBDNkZVNXNKSVpXNUE9PSIsInZhbHVlIjoiYnN4RlBwTHN1eThHdHAvREJENUFhSGZ1dFlrTjVkc2ZOdlVOREwxN1VIdGtuME1wYjNjYXF6TnZmbEp0RWRsdlpnNnViaUdrV3lWZTJNek9KRnZ2ZjgzV3BMeUU2SEtJaGkyTUJIdmp2T0EzMTdpb0Nhd1Vqc0M1R3hLeFlRL0MiLCJtYWMiOiI0NWRhODE0OWNiMGI4NTVmMjAyMTVkZDFjMzc2ZWRkMWJmMzI1ZmMwM2U2YjgxNTkyNmMzZDg4MzMyYzZhOTM5IiwidGFnIjoiIn0%3D");
  const data = new FormData(); 
       data.append('name', 'prodName');
       data.append('code', 'prodCode');
       data.append('barcode', 'prodBarcode');
       data.append('price', 'prodPrice');
       data.append('category', 'prodCategory');
       data.append('image', 'prodImage');
       data.append('quantity', 'prodQuantity');
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
    redirect: 'follow'
  };
  
  fetch("http://ohisstores.pgis.org.ng/api/product", requestOptions)
    .then(response => response.text())
    .then(result => alert(result))
    .catch(error => console.log('error', error));
  
  }

// const handleSubmit = async (e) =>{
//   e.preventDefault();
//  const data = new FormData(); 
//  data.append('name', 'prodName');
//  data.append('code', 'prodCode');
//  data.append('barcode', 'prodBarcode');
//  data.append('price', 'prodPrice');
//  data.append('category', 'prodCategory');
//  data.append('image', 'prodImage');
//  var config = {
//      method: 'post',
//      url: 'http://ohisstores.pgis.org.ng/api/product',
//      headers: { 
//        'Accept': 'application/json', 
//        'Authorization': 'Bearer 6|njvRDzgitMKpUMFDTKZDhIfdofEchrgfJ4rxI0kt', 
//        ...data.getHeaders()
//      },
//      data : data
//    };
   
//    axios(config)
//    .then(function (response) {
//      console.log(JSON.stringify(response.data));
//    })
//    navigate('/product')
//    .catch(function (error) {
//      console.log(error);
//    });
   
   
 
//  }



// const handleSubmit = async (e) =>{
//   e.preventDefault();
//   const newProduct = {
    // name: prodName,
    // code: prodCode,
    // barcode: prodBarcode,
    // price: prodPrice,
    // category: prodCategory,
    // image: prodImage
//   }
//   try {
//     const response = await api.post('/product', newProduct);
//     const allProducts = [...data, response.data];
//     setProducts(allProducts);
//     setProdBarcode('');
//     setProdName('');
//     setProdCategory('');
//     setProdPrice('');
//     setProdCode('');
//     setProdImage('');
//   navigate('/product')
//    } catch (err) {
//     console.log(`Error: ${err.message}`);
//   }
// }


// const handleSubmit = async (e) =>{
//   e.preventDefault();
  // const newProduct = new FormData(); 
  // newProduct.append('name', 'prodName');
  // newProduct.append('code', 'prodCode');
  // newProduct.append('barcode', 'prodBarcode');
  // newProduct.append('price', 'prodPrice');
  // newProduct.append('category', 'prodCategory');
  // newProduct.append('image', 'prodImage');
// var config = {
//   method: 'post',
//   url: 'http://ohisstores.pgis.org.ng/api/product ',
//   headers: { 
//     'Accept': 'application/json', 
//     'Authorization': 'Bearer 6|njvRDzgitMKpUMFDTKZDhIfdofEchrgfJ4rxI0kt', 
//     ...data.getHeaders()
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
// const handleSubmit = async (e) =>{
//  e.preventDefault();
// const newProduct = new FormData(); 
// newProduct.append('name', 'prodName');
// newProduct.append('code', 'prodCode');
// newProduct.append('barcode', 'prodBarcode');
// newProduct.append('price', 'prodPrice');
// newProduct.append('category', 'prodCategory');
// newProduct.append('image', 'prodImage');
// var config = {
//   method: 'post',
//   url: 'http://ohisstores.pgis.org.ng/api/product ',
//   headers: { 
//     'Accept': 'application/json', 
//     'Authorization': 'Bearer 6|njvRDzgitMKpUMFDTKZDhIfdofEchrgfJ4rxI0kt', 
//     ...data.getHeaders()
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

// }

  return (
    
      <div className="products flex m-0">
      <form  onClick={handleSubmit}   className='productForm capitalize text-md font-semibold  w-full rounded' >
           <div className="divider flex w-full gap-1 m-2 ">
            <div className='forminfo'>

       
            <div className="br">
              <div className="col">
             <label htmlFor="name">name</label> 
             <input autofocus className='formInput' type="text" name="name" id="name"  
             value={prodName}
             onChange={(e) => setProdName(e.target.value)}
             />
             </div>

             <div className="col">
             <label htmlFor="name">code</label> 
             <input className='formInput' type="number" name="code" id="code" 
             value={prodCode}
             onChange={(e) => setProdCode(e.target.value)}
             />
            </div>


            </div>
            <div className="br">
              <div className="col">
             <label htmlFor="name">Barcode</label> 
             <input autofocus className='formInput' type="text" name="barcode" id="barcode"  
             value={prodBarcode}
             onChange={(e) => setProdBarcode(e.target.value)}
             />
             </div>

             
             <div className="col">
             <label htmlFor="name">category</label> 
             <select
             type="text" name="category" id="category"
             value={prodCategory} 
             onChange={(e) => setProdCategory(e.target.value)}
             >
              {categories?.map((cate) => {
                return(      
             <option 
             value={cate.name} 
             key={cate.id}
             >{cate.name}</option>
                )
              })}
             </select>
             
            </div>
            </div>

            <div className="br">
              <div className="col">
             <label htmlFor="name">Price</label> 
             <input className='formInput' type="number" name="price" id="price"
             value={prodPrice}
             onChange={(e) => setProdPrice(e.target.value)}
             />
             </div>
             <div className="col">
             <label htmlFor="name">quantity</label> 
             <input className='formInput' type="number" name="quantity" id="quantity"
             value={prodQuantity}
             onChange={(e) => setProdQuantity(e.target.value)}
             />
             </div>
            
            </div>


             <br />
             <button className='formInput bg-orange-400 hover:bg-primary' type="submit"  
             >
              Add
             </button>
              
              </div>
              <div className='cProductImg w-72 h-60 shadow-md rounded-xl flex flex-col justify-center text-center items-center '>
              
              <div>
              <FileUploader handleChange={handleChange} name="file" types={fileTypes} />

              </div>
              </div>
              </div>
           
          </form>

          {console.log(prodImage)}
      </div>
      
  )
}

export default CreateProduct