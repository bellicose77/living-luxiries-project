import React from 'react';
import './Navbar.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navContainer'>
        <div className='navWrapper'>
          <div className='nlogo'>
            <Link to='/home'>
            <img className='logoImg' src={logo}/>
            </Link>
            
          </div>
          <div className='nItem'>
            <Link to='/home'>
            <div>
            Home
           </div>
            </Link>

           
            
             
             <div>About</div>
             <div>Projects</div>
             <div>Contact</div>
             <div>Admin</div>
             <Link to='/login'>
             <button className='lButton'>Login</button>
             </Link>
             
             
             
          </div>
          
        </div>
      </div>
    );
};

export default Navbar;