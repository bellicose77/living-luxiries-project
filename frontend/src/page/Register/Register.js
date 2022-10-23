import React, { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './Register.css'

const Register = () => {
    const[credentials,setCredentials] = useState({username:'',email:'',password:''});
    const handleOnchange = e =>{
        const fieldname = e.target.name;
        setCredentials({...credentials,[fieldname]:e.target.value})

    };
    const navigate = useNavigate();
    const handleSubmitButton = async(e) =>{
        e.preventDefault();
        console.log(credentials);
        try{
            const user = await axios.post('http://localhost:8000/api/auth/register',credentials);
            navigate('/login')
            console.log(user);
        }catch(err){
            
        }
      
    }
    return (
        <div>
        <Navbar/>
       <div className='regContainer'>
        <div className='regWrapper'>
            <div className='regHeader'>
             <h2>Register here</h2>
            </div>
            <div className='regForm'>
                <form className='regFormInp'>
                    <lable>User Name: </lable>
                    <input name='username' onChange={handleOnchange} type="text"/>
                    <br/>
                    <lable>Email: </lable>
                    <input name='email' onChange={handleOnchange} type="email"/>
                    <br/>
                    <lable>Password: </lable>
                    <input name='password' onChange={handleOnchange} type="password"/>
                    <br/>
                </form>
                <button onClick={handleSubmitButton}>Submit</button>
                <p>Already have an account?<Link to='/login'><span>SignIn</span></Link></p>
            </div>

        </div>

       </div>
    </div>
    );
};

export default Register;