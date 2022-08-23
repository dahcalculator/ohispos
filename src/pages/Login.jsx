import React, { useState, useRef, useContext } from 'react'
import logo from '../img/logo.png'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { MdApi } from 'react-icons/md'
import api from '../components/axios'
import AuthContext from '../context/AuthProvider'
const Login = () => {

  const {setAuth} = useContext(AuthContext)
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false)

  const handleLogin = async (e)=>{
    e.preventDefault();

    try {
      const res = await api.post('/login',
      JSON.stringify({email, password}),
      {
        headers: {'Content-type': 'application/json'},
        withCredentials: true
      }
      );
      console.log(res)
      const token = res?.data?.token;
      const authlev = res?.data?.authlev;
      setAuth({email, password, authlev, token});
      setEmail('');
      setPassword('');
      setSuccess(true);
    } catch (err)  {
      if(!err?.res){
        setErrMsg('No server response')
      } else if (err.res?.status === 400){
        setErrMsg('missing emaill or password');

      } else if (err.res?.status === 401) {
        setErrMsg('unauthoriezed');
      } else{
        setErrMsg('login fail');
      } 
    }
  }


  //   const data = {
  //     email: email,
  //     password: password
  //   }
  //   api.post(`/login`, data)
  //   .then(res => {
  //     localStorage.setItem('token', res.data.token)
  //     console.log(res.data)
  //     console.log(res.credentials)
  //     navigate('/dashboard')
  //   })
  //   .catch(err => {console.log(err)})
  // };
//     var myHeaders = new Headers();
// myHeaders.append("accept", "application/json");
// myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

// var urlencoded = new URLSearchParams();
// urlencoded.append("email", email);
// urlencoded.append("password", password);

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: JSON.stringify,
//   redirect: 'follow'
// };

// await fetch("http://ohisstores.pgis.org.ng/api/login", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => toast(` ${error}`, toastoptions));


  


  return (
    <div className='flex items-center justify-center w-full h-full '>
      <p>{errMsg}</p>
       <div className='flex justify-center w-1/2 bg-white border-2 rounded-md h-1/2 shadow-1xl item-center'>
        <div className='flex flex-col items-center justify-center w-full h-full gap-2 text-3xl font-semibold' >
            <img className='w-1/2 h-40 ' src={`${logo}`} />
           <span className='text-4xl uppercase text-primary' > ohi's stores</span>
        
        </div>
        <div className='w-full capitalize'>
          <form onClick={handleLogin} className='flex flex-col justify-center w-full h-full gap-4 p-2 text-xl font-semibold capitalize'>
            <div className=''>
            <label htmlFor="email">email
            </label>
            <input placeholder='example@gmail.com' className='w-full pl-2 bg-gray-200 border-2 h-14 hover:border-b-gray-400 outline-0' type="email" name="email" id="email" 
            required
            value={email} 
            onChange={e => setEmail(e.target.value)}
            />
            </div>
            <div className=''>
            <label htmlFor="password">password
            </label>
            <input placeholder='************' className='w-full pl-2 bg-gray-200 border-2 border-outline-0 hover:border-b-gray-400 h-14 outline-0' type="password" name="password" id="password" 
            value={password}
            required 
              onChange={e => setPassword(e.target.value)}
            />
            </div>

             <button type="submit" className='flex items-center justify-center w-1/2 font-semibold text-white capitalize rounded-md shadow-xl h-14 bg-primary'> login</button>

             
          </form>
        </div>
       </div>
       
    </div>
  )
}

export default Login