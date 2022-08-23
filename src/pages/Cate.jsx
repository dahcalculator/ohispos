import React, { useState, useEffect } from 'react'
import {MdSearch} from 'react-icons/md'
import api from '../components/axios'
import SingleCategory from './SingleCategory'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal'
import EditCate from './EditCate'
import { toast } from 'react-toastify'
Modal.setAppElement('#root')



const Categories = ({title ='category'}) => {

  let navigate = useNavigate();
  const[categories, setCategories] = useState([])
  const[isLoading, setIsLoading] = useState(false)
  const[searchCate, setSearchCate] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [cateName, setCateName] = useState('');
  const [cateCode, setCateCode] = useState('');

  const [editCateName, setEditCateName] = useState('');
  const [editCateCode, setEditCateCode] = useState('');

  const toastoptions = {
    autoclose: 400,
    pauseOnHover: true
  }

  const fetchCategory = async () => {
    setIsLoading(true);
   const results = await api.get('/category/')
   setCategories(await results.data);
   setIsLoading(false);
  }

useEffect(() =>{
  fetchCategory();
}, [])


const handleSubmitCate = async (e) =>{
  e.preventDefault();
  const newCate = {
    name: cateName,
    code: cateCode,
  }
  try {
    const response = await api.post('/category', newCate);
    const allCate = [...categories, response.data];
    setCategories(allCate);
    setCateName('');
    setCateCode('');
    navigate('/categories')
    toast(`created ${cateName} to categories`, toastoptions)
   } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}


const handleDeleteCate = async (id) => {
  try {
    await api.delete(`/category/${id}`);
    const cateList = categories?.filter(cate => cate.id !== id);
    setCategories(cateList);
    navigate('/categories')
    toast(`deletetd ${cateName} from categories`, toastoptions)
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}






  return (

    
    <div className='flex flex-col h-full  my-6 mx-6 gap-4 capitalize text-xl'>
     
      <div className=' rounded-lg flex   items-center  h-14 w-full justify-between p-4  '>
        <div className=' border-b-2 uppercase font-bold bg-gray-400 p-4 w-34 justify-center flex h-14 ' >
          {title}
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
          <form onClick={handleSubmitCate} className='flex flex-col font-semibold w-full capitalize text-2xl '>
            <label>
              categotry code
            </label>
            <input type='number' id='categoryName' className='w-96 h-10 rounded-sm bg-gray-300 pl-2'
            value={cateCode}
            onChange={(e) => setCateCode(e.target.value)}
            required />
            <label>
              categotry name
            </label>
            <input type='text' id='categoryCode' className='w-96 h-10 rounded-sm bg-gray-300 pl-2' 
            value={cateName}
            onChange={(e) => setCateName(e.target.value)}
            required />
            <button type='submit' className='bg-orange-400 m-4 rounded-md shadow-xl h-10 w-30 hover:bg-primary'> submit</button>
          </form>
        </div>
       </div>
       </Modal>

        </button>
     </div>
      <div className=' rounded-lg flex border-2  items-center shadow-md  h-12 w-64 '>
        <MdSearch className='text-3xl'/>
        <input type="search" 
        placeholder='search here...' 
        name="" 
        id="" 
       
        onChange={(event) => {
          setSearchCate(event.target.value)
        }}
        className='w-full h-full outline-none' />
     </div>
     <div className=' flex justify-around items-center  '>
 
    
     </div>
     <div className='justify-around items-center  border-2 shadow-xl flex-wrap'>
 
         <table className=' border-3  border-collapse text-color-black flex-warp rounded-lg' style={{width:'100%'}}>
             <tr>
             <th>
               category code
             </th>  
             <th>
               category name
             </th>  
             <th>
               action
             </th>  
             </tr>
             {isLoading ? 'loading...'
             :
             <>
             
             {categories.filter((val) => {
          if (searchCate === "") {
            return val
          }else  if(val.name.toLowerCase().includes(searchCate.toLowerCase())){
            return val
          } 

        }).map((cate)=>{
          console.log(cate)
              return(
            <>

            <SingleCategory 
            cate={cate}
            handleDeleteCate={handleDeleteCate}
            categories={categories}
            />
           
            </>

)
})}
           
             
             </>
             }
             
           
           </table>
     </div>
     </div>
  )
}


export default Categories

