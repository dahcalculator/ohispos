import React, { useState } from 'react'
import {MdSearch} from 'react-icons/md'
import SingleProduct from './SingleProduct'
import { toast } from 'react-toastify'
import Modal from 'react-modal'
import api from '../components/axios'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { FileUploader } from "react-drag-drop-files";


const fileTypes = ["JPG", "PNG", "GIF"];
Modal.setAppElement('#root')


const AllProduct = (props) => {
  const {data, isLoading, handleDelete, handleEdit, categories,setProdCategories, products, setProducts} = props;
const [searchProduct, setSearchProduct] = useState('')
const [prodName, setProdName] = useState('');
const [prodCode, setProdCode] = useState('');
const [prodBarcode, setProdBarcode] = useState('');
const [prodCategory, setProdCategory] = useState('');
const [prodPrice, setProdPrice] = useState('');
const [prodImage, setProdImage] = useState(null);
const [prodQuantity, setProdQuantity] = useState('');
const [modalIsOpen, setModalIsOpen] = useState(false)
  const handleChange = (file) => {
    setProdImage(prodImage);
  };
const navigate = useNavigate();

const toastoptions = {
  autoclose: 400,
  pauseOnHover: true
}


const handleSubmit= (e) => {
  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Authorization", "Bearer 6|njvRDzgitMKpUMFDTKZDhIfdofEchrgfJ4rxI0kt");
  

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
// const handleSubmit= (e) => {
//   var myHeaders = new Headers();
//   myHeaders.append("Accept", "application/json");
  
//   const newProduct = {
//     name: prodName,
//     code: prodCode,
//     barcode: prodBarcode,
//     price: prodPrice,
//     category: prodCategory,
//     image: prodImage
//       };
//   var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: JSON.stringify(newProduct),
//     redirect: 'follow'
//   };
  
//   fetch("http://ohisstores.pgis.org.ng/api/product", requestOptions)
//     .then(response => response.text())
//     .then(result => alert(result))
//     .catch(error => console.log('error', error));
  
//   }







// let formData = new FormData();    //formdata object

// formData.append('name', 'ABC');   //append the values with key, value pair
// formData.append('age', 20);

// const config = {     
//     headers: { 'cotent-type': 'multipart/form-data' }
// }

// axios.post(url, formData, config)
//     .then(response => {
//         console.log(response);
//     })
//     .catch(error => {
//         console.log(error);
//     });


    return (
        
      <div className='flex flex-col h-full max-w-full gap-4 mx-6 my-6 text-xl capitalize'>
     
      <div className='flex '>
      all product
     </div>
      <div className='flex items-center w-64 h-12 border-2 rounded-lg shadow-md '>
        <MdSearch className='text-3xl font-bold bg-white text-primary'/>
        <input 
        type="search" 
        placeholder='search here...' 
        name="" id="" 
        className='w-full h-full outline-none' 
        onChange={(event) => {
          setSearchProduct(event.target.value)
        }}
        
        />
     </div>

    

     <div className='flex items-center justify-around '>
 
    
     </div>
     <div className='flex-wrap items-center justify-around border-2 shadow-xl'>
         <table className='border-collapse rounded-lg border-3 text-color-black flex-warp' style={{width:'100%'}}>
             <tr>
             <th>
               code
             </th> 
             <th>
               barcode
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
               action
             </th>  
             </tr>
             {isLoading ?

      <div className="loading"></div>
             :
             <>
              {data?.filter((val) => {
          if (searchProduct === "") {
            return val
          }else  if(val.name.toLowerCase().includes(searchProduct.toLowerCase())){
            return val
          } else  if(val.barcode === searchProduct){
            return val
          }

        }).map((prod)=> {
              return(
              <>
                <SingleProduct
                prod={prod}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                />
              </>

            )})}
             </>
              }
            

           </table>
     </div>
     </div>
      )
    }

   
export default AllProduct