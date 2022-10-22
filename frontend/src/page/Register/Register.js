import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './Register.css'

const Register = () => {
    const[credentials,setCredentials] = useState({});
    const handleOnchange = e =>{

    };
    const handleSubmitButton = e =>{
        e.preventDefault();
        console.log("submit button");
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
                    <lable>Name: </lable>
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