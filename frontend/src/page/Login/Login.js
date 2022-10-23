import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './Login.css'
import logo from '../../images/logo.png'

const Login = () => {
  const[userdata,setUserData] = useState({username:'',password:''});
  const handleOnchangeInput = e =>{
    const fieldName = e.target.name;
    
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
                       <input name='username'className='loginInputField' type="text" placeholder="username"/>
                         <br/>
                        <input name='password' className='loginInputField' type="password" placeholder="password"/>
                        <br/>
                       </div>
                    
                      <button className='loginInputField'>Submit</button>
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