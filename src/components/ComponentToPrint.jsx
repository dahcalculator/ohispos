import React from 'react'
import logo from '../img/logo.png'




export const ComponentToPrint = React.forwardRef((props, ref) => {
    const {cartItems, grandPrice} = props
    const comName = `ohi's store`;
    const num1 = "08122333000";
    const num2 = "000222000";
    const attender = "David"; 
    const invoiceID = "2561711az"
    return (
        <div ref={ref}>

                <div className='block flex flex-wrap w-60 h-fit flex-col capitalize p-2 font-futura'>
                    <div className='receipt uppercase
                    justify-center
                    items-center
                    flex
                    m-0
                    p-0
                    '>
                        <span className='
                        flex 
                        text-2xl
                        items-center
                        justify-center
                        gap-2
                        '>
                         <img src={logo} alt={comName} style={{
                             width: '40px',
                             height: '30px'
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
                           Invoice ID: {invoiceID}
                        </span>
                        <span>
                           Date: 12: 34pm
                        </span>
                        <span>
                            time: 233
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
                          Powered by Planet E ICT Multi Solutions Ltd 08092041164, www.planetict.com 
                        </span>
                        </div>

                </div> 
        </div>   
    );
  });