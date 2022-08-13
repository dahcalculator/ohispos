import {MdAddCircle , MdRemoveCircle, MdCancel, MdSearch} from 'react-icons/md'
import CardCard from '../components/CardCard'
import { toast } from 'react-toastify'
import { useState, useRef, useEffect } from 'react'
import { useReactToPrint } from 'react-to-print';
import { ComponentToPrint } from '../components/ComponentToPrint';
import Category from '../components/Category';


const Pos = ( props ) => {
  const {products } = props;
  const [cartItems, setCartItems] = useState([]);
 

const toastoptions = {
    autoclose: 400,
    pauseOnHover: true
  }
  
  const onAdd = (prod) =>{
    const exist =cartItems.find((x) => x.id === prod.id);
    if(exist) {
      setCartItems(
        cartItems.map((x) =>
        x.id === prod.id ? { ...exist, qty: exist.qty + 1} : x
      ));
      
    toast(`Added ${prod.name} to cart`, toastoptions)
  } else{
    setCartItems([...cartItems, { ...prod, qty:1 }]);
    toast(`Added ${prod.name} to cart`, toastoptions)
  }
};



const onRemove = (prod) =>{
  const exist = cartItems.find((x) => x.id=== prod.id);
  if(exist.qty === 1) {
    setCartItems(cartItems.filter((x) => x.id !== prod.id));
    toast(`Removed ${prod.name} from cart`, toastoptions)
  } else{
    setCartItems(
      cartItems.map((x) =>
      x.id === prod.id ? { ...exist, qty: exist.qty - 1} : x
    ));
    toast(`Removed ${prod.name} from cart, toastoptions`)
  } 

  
};


const onCancel = (prod) =>{
  const newCart = cartItems.filter((x) => x.id !== prod.id);
  setCartItems(newCart);
  toast(`Cancel ${prod.name} from cart`, toastoptions)
  } 


  const itemsPrice = cartItems.reduce((a, c) => a+ c.price * c.qty, 0);
  const grandPrice = itemsPrice;


  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  const [searchTerm, setSearchTerm] = useState('');

  const [searchBarcode, setSearchBarcode] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(products);
  }, []);



  const filterBarcode = results.filter((val) => {
    if (searchBarcode === "") {
       return val
    } else if(val.barcode === searchBarcode){
    return val
    }
  });

  const searchBar = filterBarcode.map((item)=> {
  } )



 

  return (
    <div className='flex capitalize  gap-4 mx-3 '>
      <div className='h-full shadow-xl border-1 gap-2 w-full flex flex-col justify-between rounded-xl p-5'>
       <div style={{display: 'none'}}>
         <ComponentToPrint
         ref={componentRef}
         cartItems={cartItems}
         grandPrice={grandPrice}
         />
       </div>


       <div className='h- '>
  
     {cartItems.length === 0 && <span className='text-3xl font-bold text-red-600
     '> cart is empty </span>}

     <div className=' w-full h-12 rounded-lg flex border-2  items-center shadow-md  '>
        <MdSearch className='text-3xl'/>
        <input className='outline-0 w-full h-10 pl-2 border-1   capitalize focus:border-3' 
        autoFocus
            type="text"
            placeholder="Search barcode"
            onChange={(e) => setSearchBarcode(e.target.value)}
          
        />
      </div>
       <table className='items-center shadow-md border-3  text-xl  border-collapse text-color-black flex-warp rounded-lg w-full' style={{width:'100%'}}>
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
      N {item.price.toFixed(2)}
    </td>
    <td className='flex items-center  gap-5 '>
      <span className='bg-red-500 rounded-xl text-white'> 
      <MdRemoveCircle 
       onClick={()=>onRemove(item)}
      /> 
      </span>

      <span> {item.qty}</span>

      <span  className='bg-green-500 rounded-xl text-white'>
      <MdAddCircle
       onClick={()=>onAdd(item)}
      /></span>
    </td>
  
    <td>
    <span className='bg-red-500 rounded-full  text-red-500 text-4xl'> <MdCancel
     onClick={()=>onCancel(item)}
    /></span>
    </td>   
  </tr>
  
  ))}
</tbody>
      </table>
      </div>

     
       <div className='h-10 flex items-center capitalize text-2xl bg-gray-200 '>
         
      Grand total: N
      {cartItems.length !== 0 &&(
        <strong>
          {grandPrice.toFixed(2)}
        </strong>
      )}
      </div>
    <div>
      <button className='rounded-lg bg-green-400  border-3 w-40 shadow text-xl font-semibold h-12 p-1 text-white capitalize hover:text-white' onClick={handlePrint}> pay now</button>
      </div>
      </div>
      <div className='w-full h-full flex flex-col gap-2 flex-wrap shadow-md border-2 rounded-xl p-2 '>
       <div className='h-10 w-full text-white flex items-center pl-1 text-md gap-2'>
        <Category/>
        </div> 
        <div className='w-full h-12    flex items-center flex-wrap'>
        <div className=' w-full h-12 rounded-lg flex border-2  items-center shadow-md  '>
         
        <MdSearch className='text-3xl'/>
        
        <input className='outline-0 w-full h-10 pl-2 border-1   capitalize focus:border-3' 
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
      <ul className=' flex-wrap flex overflow-y-scroll  h-96  gap-4  items-center  p-1'>
 
      {products.filter((val) => {
          if (searchTerm === "") {
            return val
          }else  if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          } else  if(val.barcode === searchTerm){
            return val
          }

        }).map((prod) => 
         (
        <li key={prod.id}   onClick={()=>onAdd(prod)} >
         
          <CardCard  
           imgsrc={prod.img}
          amount={prod.price} 
          productName={prod.name}
          addTocart={`add to cart`}
          />
        </li>
        
        ))} 
      </ul>

      </div>
    </div>
    </div>
  )
}

export default Pos