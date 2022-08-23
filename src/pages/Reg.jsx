import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify'


const Reg = () => {
    const toastoptions = {
        autoclose: 400,
        pauseOnHover: true
      }
    
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfrmPassoword] = useState('');

   const  handleReg = (e) =>{
   e.preventDefault();
   var myHeaders = new Headers();
   myHeaders.append("accept", "application/json");
   myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
   
   var urlencoded = new URLSearchParams();
   urlencoded.append("name", username);
   urlencoded.append("email", email);
   urlencoded.append("password", password);
   urlencoded.append("password_confirmation", confirmPassword);
   
   var requestOptions = {
     method: 'POST',
     headers: myHeaders,
     body: urlencoded,
     redirect: 'follow'
   };
   fetch("http://ohisstores.pgis.org.ng/api/register", requestOptions)
     .then(response => response.text())
     .then(result => console.log(result))
     .catch(error => console.log('error', error));
   
   }


  return (
    <div>
        <form onClick={handleReg} className='bg-red-200 pt-6'>
            <div>
                <label htmlFor="name">
                    name
                </label>
                <input type="text" id='name' size={10}
                onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">
                    email
                </label>
                <input type="email"id='name' 
                 onChange={(e) => setEmail(e.target.value)}
              
                />
            </div>
            <div>
                <label htmlFor="password">
                    password
                </label>
                <input type="text"id='name' 
                 onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">
                confirmPassword
                </label>
                <input type="text"id='name' 
                 onChange={(e)=> setConfrmPassoword(e.target.value)}
              
                />
                <button type="submit"> register</button>
            </div>
        </form>
    </div>
  )
}

export default Reg