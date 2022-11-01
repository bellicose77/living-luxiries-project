import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './Login.css'
import logo from '../../images/logo.png'
import axios from 'axios';

const Login = () => {
  const[userdata,setUserData] = useState({username:'',password:''});
  const navigate = useNavigate();
  const handleOnchangeInput = e =>{
    const fieldName = e.target.name;
    setUserData((pre)=>({...pre,[fieldName]:e.target.value}))

  };
  const handleLogin = async(e)=>{
    e.preventDefault();
    try{
      //console.log(userdata)
      const res = await axios.post('http://localhost:8000/api/auth/login',userdata);
      

    }
    catch(err){

    }
  }
    return (
        <div>
            <Navbar/>
            <div className='loginContainer' >
            
                <img className='loginImg' src={logo}/>
                
                 <div className='loginWrapper'>
                   <div className='loginHeader'>
                   <h2>Login With</h2>
                   </div>
                   <div className='loginInput'>
                     <div className='loginInputFiel'>
                       <input name='username' onChange={handleOnchangeInput} className='loginInputField' type="text" placeholder="username"/>
                         <br/>
                        <input name='password' onChange={handleOnchangeInput} className='loginInputField' type="password" placeholder="password"/>
                        <br/>
                       </div>
                    
                      <button onClick={handleLogin} className='loginInputField'>Submit</button>
                   </div>
                   <div className='loginLink'>
                    <p>Don't have an accont?<Link to="/register"><span className='loginSpan'>Create an account</span></Link></p>
                   </div>
                   
                 </div>

        </div>

    </div>
    );
};

export default Login;