import React from 'react';
import './Navbar.css'
import logo from '../../images/logo.png'

const Navbar = () => {
    return (
        <div className='navContainer'>
        <div className='navWrapper'>
          <div className='nlogo'>
            <img className='logoImg' src={logo}/>
          </div>
          <div className='nItem'>
            <div>
            Home
           </div>
            
             
             <div>About</div>
             <div>Projects</div>
             <div>Contact</div>
             <div>Admin</div>
             
             <button className='lButton'>Login</button>
             
          </div>
          
        </div>
      </div>
    );
};

export default Navbar;