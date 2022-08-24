// import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import api from '../components/axios'
// import { FileUploader } from 'react-drag-drop-files'





// const EditPost = (props) => {


//   const [editProdName, setEditProdName] = useState('');
//   const [editProdCode, setEditProdCode] = useState('');
//   const [editProdBarcode, setEditProdBarcode] = useState('');
//   const [editProdCategory, setEditProdCategory] = useState('');
//   const [editProdPrice, setEditProdPrice] = useState('');
//   const [editProdImage, setEditProdImage] = useState('');
  
  
// const fileTypes = ["JPG", "PNG", "GIF"];

// const {} = props

// const { id } = useParams();
// const post = posts.find(post => (post.id).toString() === id);

// useEffect(() => {
//     if (post) {
//         setEditTitle(post.title);
//         setEditBody(post.body);
//     }
// }, [post, setEditTitle, setEditBody])

//   return (
//     <>


// <form onClick={submitProduct}   className='productForm capitalize text-md font-semibold  w-full rounded' >
//    <div className="divider flex w-full gap-1 m-2 ">
//     <div className='forminfo'>


//     <div className="br">
//       <div className="col">
//      <label htmlFor="name">name</label> 
//      <input autofocus className='formInput' type="text" name="name" id="name"  
//       value={prodName}
//      onChange={(e) => setProdName(e.target.value)}
//      />
//      </div>

//      <div className="col">
//      <label htmlFor="name">code</label> 
//      <input className='formInput' type="number" name="code" id="code" 
//       value={prodCode}
//      onChange={(e) => setProdCode(e.target.value)}
//      />
//     </div>


//     </div>
//     <div className="br">
//       <div className="col">
//      <label htmlFor="name">Barcode</label> 
//      <input autofocus className='formInput' type="text" name="barcode" id="barcode"  
//  value={prodBarcode}
//      onChange={(e) => setProdBarcode(e.target.value)}
//      />
//      </div>


//      <div className="col">
//      <label htmlFor="name">category</label> 
//      <select
//      type="text" name="category" id="category"

//      onChange={(e) => setProdCategory(e.target.value)}
//      >
//       {cateData?.map((cate) => {
//         return(      
//      <option 
//      value={prodCategory} 
//      key={cate.id}
//      >{cate.name}</option>
//         )
//       })}
//      </select>

//     </div>
//     </div>

//     <div className="br">
//       <div className="col">
//      <label htmlFor="name">Price</label> 
//      <input className='formInput' type="number" name="price" id="price"
//       value={prodPrice}
//      onChange={(e) => setProdPrice(e.target.value)}
//      />
//      </div>


//     </div>


//      <br />
//      <button className='formInput bg-orange-400 hover:bg-primary' type="submit"  
//      >
//       Add
//      </button>

//       </div>
//       <div className='cProductImg w-72 h-60 shadow-md rounded-xl flex flex-col justify-center text-center items-center '>

//       <div>

//       <FileUploader 
//       handleChange={handleChange} 
//       value={prodImage}
//       onChange={(e)=> setProdImage}
//       name="image" types={fileTypes} />

//       </div>
//       </div>
//       </div>

//   </form>
// </>

//   )
// }

// export default EditPost