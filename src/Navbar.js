import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './App';
import creativeAgency from './images/creativeAgency.png'

const Navbar = () => {
  const [admin, setAdmin] = useContext(UserContext);

    return (
        <div style={{backgroundColor: '#fbd062'}}>

            <nav class="navbar navbar-expand-lg navbar-light">
            <img style={{height: '40px'}} src={creativeAgency} alt="" ></img>


  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Our Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Our Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
      <li>
          <Link to = '/admin'> <button type="button" class="btn btn-dark">Admin Sign In</button> </Link>
      </li>
     
      
    
     
    </ul>
    
  </div>
</nav>


            
        </div>
    );
};

export default Navbar;