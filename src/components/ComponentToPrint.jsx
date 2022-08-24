import React from 'react'
import logo from '../img/logo.png'
import { useEffect, useState } from 'react';


export const ComponentToPrint = React.forwardRef((props, ref) => {

    const [num, setNum] = useState(0);
    const [invoice, setInvoice] = useState('');

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 70)) + min;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // 👇️ generate random number between 1 and 10
      setNum(randomNumberInRange(1, 20000));
    }, 1000); // 👈️ runs every 1 second

    return () => {
      clearInterval(interval);
      return (
        <div>
          {setInvoice(num)}
        </div>
      );

    };
  }, []);

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    var today = new Date();
   const  time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

   
    const {cartItems, grandPrice} = props
    const comName = `ohi's store`;
    const num1 = "08135585449";
    const num2 = "07045741919";
    const attender = "admin"; 
    const invoiceID = {num}
    return (
        <div ref={ref}>

                <div className='block flex flex-wrap w-full h-fit flex-col capitalize p-2 font-futura'>
                    <div className='receipt uppercase
                    justify-center
                    items-center
                    flex
                    m-0
                    p-0
                    '>
                        <span className='
                        flex  flex-col
                        text-2xl
                        items-center
                        justify-center
                        gap-2
                        '>
                         <img src={logo} alt={comName} style={{
                             width: '60px',
                             height: '50px'
                         }}/>  {comName}
                        </span>
                        <span className='text-xs'>
                            shop no 5, zone e-shopping complex, apo legislative quarters, abuja
                        </span>
                        <span className='text-xs'>
                           tel:{num1}, {num2}
                        </span>
                    </div>
                    <div className='receipt text-xs
                    border-dashed
                    border-t-2
                    '>
                        <span>
                           Invoice ID: {num}
                        </span>
                        <span>
                           Date:{date}
                        </span>
                        <span>
                            time: {time}
                        </span>
                        <span>
                          staff: {attender}
                        </span>
                        
                    </div>
                    <div className='receipt
                    border-dashed
                    border-t-2
                    '>
                        <table className='w-full'>
                         <tbody className='w-full
                         gap-2
                         '>
                            <tr>
                            <th>
                            product
                            </th>  
                            <th>
                            price
                            </th>  
                            <th>
                            qty
                            </th>  
                            </tr>
                            </tbody>   
                         {cartItems.map((item) => (  
                         <tbody className='w-full 
                         text-xs
                         '>
                            <tr key={item.id}>
                            <td>
                            {item.name}
                            </td>
                            <td>
                            N {item.price.toFixed(2)}
                            </td>
                            <td className='flex justify-center items-center'> {item.qty}</td>
                            </tr>
                            </tbody>  
                             ))} 
                            </table>
                        </div>
                        <div className='
                        border-dashed
                        border-t-2
                        flex
                        flex-col
                        '>
                            <div className='border-dashed
                        border-t-2
                        flex
                        gap-2
                        '>
                            <span>
                            TOTAL  AMOUNT
                            </span>
                            <strong
                            >     
                            N{grandPrice.toFixed(2)}
                            </strong>
                            </div>
                            <span className='
                            italic mt-2
                            '>
                                thanks for shopping with us
                            </span>
                            <span className='xs mt-2'>
                          Powered by Planet E ICT Multi Solutions Ltd 08092041164, www.planeetict.com 
                        </span>
                        </div>

                </div> 
        </div>   
    );
  });