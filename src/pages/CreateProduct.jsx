import React from 'react'

const Product = () => {
  return (
    
      <div className="products flex m-0">
      <form className='productForm capitalize text-md font-semibold  w-full rounded'  onsubmit="return false;" method='post' >
           <div className="divider flex w-full gap-1 m-2 ">
            <div className='forminfo'>
            <div className="br">
            <div className="col">
             <label htmlFor="name">name</label> 
             <input className='formInput' type="text" name="name" id="productname" />
             </div>

             <div className="col">
             <label htmlFor="name">code</label>  
             <input className='formInput' type="text" name="code" id="productcode" />
             </div>
             </div>

            <div className="br">
              <div className="col">
             <label htmlFor="name">Barcode</label> 
             <input autofocus className='formInput' type="text" name="barcode" id="barcode"  />
             </div>

             <div className="col">
             <label htmlFor="name">category</label> 
             <input className='formInput' type="text" name="category" id="category" />
            </div>
            </div>

            <div className="br">
              <div className="col">
             <label htmlFor="name">Price</label> 
             <input className='formInput' type="number" name="price" id="price" />
             </div>

             <div className="col">
             <label htmlFor="name">quantity</label> 
             <input className='formInput' type="number" name="quantity" id="quantity" />
             </div>
            </div>

              <div className="col">
             <label htmlFor="name">description</label>
             <input className='formInput h-40 flex items-top flex-wrap overflow-hidden text-top justify-start w-full' type="text-area" name="description" id="description" />
             </div> 

             <br />
             <input className='formInput' type="submit" name="submit" value='Add' id="submit"  />
              
              </div>
              <div className='cProductImg w-72 h-60 shadow-md rounded-xl flex flex-col justify-center text-center items-center '>
              
              <div>
              <input placeholder='add image here' type="file" name="" id=""  className=' m-4 w-full flex items-center  text-xs' />
                
              </div>
              </div>
              </div>
           
          </form>
      </div>
      
  )
}

export default Product