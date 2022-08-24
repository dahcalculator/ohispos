import React, { useEffect, useState } from 'react'
import {MdSearch} from 'react-icons/md'
import SingleProduct from './SingleProduct'
import { toast } from 'react-toastify'
import Modal from 'react-modal'
import api from '../components/axios'
import {useNavigate} from 'react-router-dom'
import { FileUploader } from "react-drag-drop-files";
import FormData from 'form-data'

Modal.setAppElement('#root')

const fileTypes = ["JPG", "PNG", "GIF"];

const AllProduct = (props) => {
  


  const {products, isLoading, handleDelete, handleEdit, categories,setProdCategories, setProducts} = props;
const [searchProduct, setSearchProduct] = useState('')
const [prodName, setProdName] = useState('');
const [prodCode, setProdCode] = useState('');
const [prodBarcode, setProdBarcode] = useState('');
const [prodCategory, setProdCategory] = useState('');
const [prodPrice, setProdPrice] = useState('');
const [prodImage, setProdImage] = useState(null);
const [modalIsOpen, setModalIsOpen] = useState(false)


  const handleChange = (prodImage) => {
    setProdImage(prodImage);
  };
const navigate = useNavigate();

const toastoptions = {
  autoclose: 400,
  pauseOnHover: true
}

const [cateData, setCateData] = useState([])

const fetchCategory = async () => {

 const results = await api.get('/category/')
 setCateData(await results.data);

}

useEffect(() =>{
fetchCategory();
}, [])

// const handleSubmit= (e) => {
//   var myHeaders = new Headers();
//   myHeaders.append("Accept", "application/json");
//   myHeaders.append("Authorization", "Bearer 6|njvRDzgitMKpUMFDTKZDhIfdofEchrgfJ4rxI0kt");
      // const data = new FormData(); 
      //  data.append('name', 'prodName');
      //  data.append('code', 'prodCode');
      //  data.append('barcode', 'prodBarcode');
      //  data.append('price', 'prodPrice');
      //  data.append('category', 'prodCategory');
      //  data.append('image', 'prodImage');
      //  data.append('quantity', 'prodQuantity');
//   var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: JSON.stringify(data),
//     redirect: 'follow'
//   };
  
//   fetch("http://ohisstores.pgis.org.ng/api/product", requestOptions)
//     .then(response => response.text())
//     .then(result => alert(result))
//     .catch(error => console.log('error', error));
  
//   }

 const submitProduct= async (e) =>{
  e.preventDefault();


  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6IkJhV0ZzaDVZSTRVWHV6dmRVM1FPVUE9PSIsInZhbHVlIjoiZEhjby9nQU1pTXgwdEdPaVNHSDlFWVZxQzYwOFkraGVSY0FPcWRnMldKQlB1emcrRHF5YmkzNE1SdERKVTlZOUhjQ014aVNCS1VnbGdVblFmVlJIb2lXYmNnVWwvWnlQZnN4MTVhQkV2Nit1QWhoY0hsQnRaQ3htUUtkOXFUbngiLCJtYWMiOiI1ZGRkYTM4MWEyODA5MWE1ZjBkYWEzM2ViMWU0ZTQ0ZTcxZWIzY2U3N2MzZjU3ZjU1YzQzMmZiZjlmZjE0ODU3IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6InRrejFKblNMSUZVWmRTdngzeUpTTkE9PSIsInZhbHVlIjoiVmd6V0JYZXprb2RlMmhId0lSdWhqTDJhRnpJcmg4QldvdlI4YkFULzgyYVYrOERUcmVTTHpIZEJNZFVVZ0QvaFcrZ2ZnUWZVQ1dMSFlldlVBZHRvMFBoOHhKN3hSL2dWVE5IcXl2c3VOdDJZOGxUOUYyOTJ0ZWNUQXM5aDlpQ24iLCJtYWMiOiI3OGZmYzhlODRkNmVhYmJhY2I4OTQ4MzAyODQ1NmRjOTBlN2ZlYjMxOWQ2NTA2MDM4MzJmNGZjMDM4NzA1YmUxIiwidGFnIjoiIn0%3D");
  
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
    body: data,
    redirect: 'follow'
  };
  
  await fetch("http://ohisstores.pgis.org.ng/api/product", requestOptions)
    .then(response => response.JSON())
    .then(result => console.log(result))
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
     <div className='flex justify-between'>
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

    
     <button className=' border-b-2 uppercase font-bold bg-orange-400 hover:bg-primary text-white rounded-md cursor-pointer p-4 w-34 justify-center flex h-14 '>
      <button onClick={() => setModalIsOpen(true)}>
            create
       </button>
       <Modal
        isOpen={modalIsOpen}
        shouldCloseOnEsc={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
            overlay: {
                backgroundColor: 'gray'
            },
            content: {
              position: 'absolute',
              top: '40px',
              left: '40px',
              right: '40px',
              bottom: '40px',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px',
              marginTop: '40px'
            }
        }}
        >
        <div className='w-full h-full flex items-center flex-col  '>
        <div className='w-full flex justify-around mb-4 mt-2 capitalize text-2xl font-bold'>  
          <div>create</div> 
          <button className='font-bold rounded-full shadow-md p-1 w-20 capitalize hover:bg-primary h-fit bg-orange-400 text-white' onClick={() => setModalIsOpen(false)}>
            close
       </button>
        </div>
        <div> 
        <form onClick={submitProduct} encType="multipart/form-data"   className='productForm capitalize text-md font-semibold  w-full rounded' >
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
    
             onChange={(e) => setProdCategory(e.target.value)}
             >
              {cateData?.map((cate) => {
                return(      
             <option 
             value={prodCategory} 
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


            </div>


             <br />
             <button className='formInput bg-orange-400 hover:bg-primary' type="submit"  
             >
              Add
             </button>

              </div>
              <div className='cProductImg w-72 h-60 shadow-md rounded-xl flex flex-col justify-center text-center items-center '>

              <div>

              <FileUploader 
              handleChange={handleChange} 
              value={prodImage}
              onChange={(e)=> setProdImage}
              name="image" types={fileTypes}
               />

              </div>
              </div>
              </div>

          </form>
        </div>
       </div>
       </Modal>

        </button>


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

      'Loading'
             :
             <>
              {products?.filter((val) => {
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