import {MdAddCircle , MdRemoveCircle, MdCancel, MdSearch} from 'react-icons/md'
import CardCard from '../components/CardCard'
import { toast } from 'react-toastify'
import { useState, useRef, useEffect } from 'react'
import { useReactToPrint } from 'react-to-print';
import { ComponentToPrint } from '../components/ComponentToPrint';
import Category from '../components/Category';
import api from '../components/axios'


const Pos = ( props ) => {
const [products, setProducts] = useState([])
const [cartItems, setCartItems] = useState([]);

  const fetchProduct = async () => {
   const results = await api.get('/product/')
   setProducts(await results.data);
  }

useEffect(() =>{
  fetchProduct();
}, [])




  console.log(products) 

const toastoptions = {
    autoclose: 400,
    pauseOnHover: true
  }
  
  const onAdd = (prod) =>{
    const exist =cartItems.find((x) => x.id === prod.id);
    if(exist) {
      setCartItems(
        cartItems.map((x) =>
        x.id === prod.id ? { ...exist, quantity: exist.quantity + 1} : x
      ));
      
    toast(`Added ${prod.name} to cart`, toastoptions)
  } else{
    setCartItems([...cartItems, { ...prod, quantity:1 }]);
    toast(`Added ${prod.name} to cart`, toastoptions)
  }
};



const onRemove = (prod) =>{
  const exist = cartItems.find((x) => x.id=== prod.id);
  if(exist.quantity === 1) {
    setCartItems(cartItems.filter((x) => x.id !== prod.id));
    toast(`Removed ${prod.name} from cart`, toastoptions)
  } else{
    setCartItems(
      cartItems.map((x) =>
      x.id === prod.id ? { ...exist, quantity: exist.quantity - 1} : x
    ));
    toast(`Removed ${prod.name} from cart, toastoptions`)
  } 

  
};


const onCancel = (prod) =>{
  const newCart = cartItems.filter((x) => x.id !== prod.id);
  setCartItems(newCart);
  toast(`Cancel ${prod.name} from cart`, toastoptions)
  } 


  const itemsPrice = cartItems.reduce((a, c) => a+ c.price * c.quantity, 0);
  const grandPrice = itemsPrice;


  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  const [searchTerm, setSearchTerm] = useState('');
  

 

  return (
    <div className='flex gap-4 mx-3 capitalize '>
      <div className='flex flex-col justify-between w-full h-full gap-2 p-5 shadow-xl border-1 rounded-xl'>
       <div style={{display: 'none'}}>
         <ComponentToPrint
         ref={componentRef}
         cartItems={cartItems}
         grandPrice={grandPrice}
         />
       </div>


       <div className='h- '>
  
     {cartItems.length === 0 && <span className='text-3xl font-bold text-red-600 '> cart is empty </span>}

       <table className='items-center w-full text-xl border-collapse rounded-lg shadow-md border-3 text-color-black flex-warp' style={{width:'100%'}}>
  <tr>
  <th>
    product
  </th>  
  <th>
    price
  </th>  
  <th>
    quantity
  </th>  
  <th>
    sub-total
  </th>  
  </tr>
  
  <tbody>
  {cartItems.map((item) => (
   
  <tr key={item.id}>
    <td>
      {item.name}
    </td>
    <td>
      N {item.price}
    </td>
    <td className='flex items-center gap-5 '>
      <span className='text-white bg-red-500 rounded-xl'> 
      <MdRemoveCircle 
       onClick={()=>onRemove(item)}
      /> 
      </span>

      <span> {item.quantity}</span>

      <span  className='text-white bg-green-500 rounded-xl'>
      <MdAddCircle
       onClick={()=>onAdd(item)}
      /></span>
    </td>
  
    <td>
    <span className='text-4xl text-red-500 bg-red-500 rounded-full'> <MdCancel
     onClick={()=>onCancel(item)}
    /></span>
    </td>   
  </tr>
  
  ))}
</tbody>
      </table>
      </div>

     
       <div className='flex items-center h-10 text-2xl capitalize bg-gray-200 '>
         
      Grand total: N
      {cartItems.length !== 0 &&(
        <strong>
          {grandPrice.toFixed(2)}
        </strong>
      )}
      </div>
    <div>
      <button className='w-40 h-12 p-1 text-xl font-semibold text-white capitalize bg-green-400 rounded-lg shadow border-3 hover:text-white' onClick={handlePrint}> pay now</button>
      </div>
      </div>
      <div className='flex flex-col flex-wrap w-full h-full gap-2 p-2 border-2 shadow-md rounded-xl '>
       <div className='flex items-center w-full h-10 gap-2 pl-1 text-white text-md'>
        <Category/>
        </div> 
        <div className='flex flex-wrap items-center w-full h-12'>
        <div className='flex items-center w-full h-12 border-2 rounded-lg shadow-md '>
         
        <MdSearch className='text-3xl'/>
        
        <input className='w-full h-10 pl-2 capitalize outline-0 border-1 focus:border-3' 
        autofocus
        onmouseover='this.focus()'
        onAdd={onAdd}
        type='text' 
        placeholder='search with barcode / name'
        onChange={(event) => {
          setSearchTerm(event.target.value)
        }}
        />
      </div>
      </div>
      <div className=''>

      {products?.filter((val) => {
          if (searchTerm === "") {
            return val
          }else  if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          } else  if(val.barcode === searchTerm){
            return val
          }

        }).map((prod) => 
         (

      <ul className='w-full flex flex-wrap items-center gap-4 p-1 overflow-y-scroll h-96'>
 
    
        <li key={prod.id}   onClick={()=>onAdd(prod)} >
         
          <CardCard  
           imgsrc={prod.image}
          amount={prod.price} 
          productName={prod.name}
          addTocart={`add to cart`}
          />
        </li>
        
       
      </ul>
       ))} 

      </div>
    </div>
    </div>
  )
}

export default Pos