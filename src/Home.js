import React from 'react';
import HeaderBody from './HeaderBody';

import Services from './Services';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './App';
import creativeAgency from './images/creativeAgency.png'
import { useState } from 'react';

const Home = () => {
    const [contactFormDetails, setContactFormDetails] = useState({});
    const [admin, setAdmin] = useContext(UserContext);
    const [messageDone, setMessageDone] = useState(false);

function handleBlur(e){
    contactFormDetails[e.target.name] = e.target.value;
}
function handleSubmit(e){
    e.preventDefault();
    
    fetch('https://polar-coast-42999.herokuapp.com/addMessage', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(contactFormDetails)

})
    .then(res => res.json())
    .then(data => {
        if (data) {
            setMessageDone(true)
        }
    })
}

    return (
        <div >
            <div style={{ backgroundColor: '#fbd062' }}>

                <nav class="navbar navbar-expand-lg navbar-light">
                    <img style={{ height: '40px' }} src={creativeAgency} alt="" ></img>


                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">

                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>

                            <li class="nav-item">
                                <Link to='/ourTeam'><a class="nav-link" href="#">Our Team</a></Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#footer">Contact Us</a>
                            </li>
                            <li>
                                <Link to='/admin'> <button type="button" class="btn btn-dark">Admin Sign In</button> </Link>
                            </li>




                        </ul>

                    </div>
                </nav>



            </div>
            <HeaderBody></HeaderBody>
            <Services></Services>
            <div id="footer" className="mt-5" style={{ backgroundColor: '#fbd062', height: '380px' }}>
                <div className='row pt-3'>
                    <div className='col-md-4 offset-md-1'>
                        <h3>Let us handle your project, professionally.</h3>
                        <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus urna sed ornare tempus.</small>

                    </div>

                    <div className='col-md-6'>


                        <form onSubmit={handleSubmit}>
                            <h4>Contact Form</h4>
                            <div class="form-group">

                                <input name = "email" onBlur = {handleBlur} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email"></input>
                            </div>
                            <div class="form-group">

                                <input name = "name" onBlur = {handleBlur} type="name" class="form-control" id="exampleFormControlInput1" placeholder="Your Name/Company's Name"></input>
                            </div>

                            <div class="form-group">

                                <textarea name = "message" onBlur = {handleBlur} class="form-control" id="exampleFormControlTextarea1" placeholder='Your Message' rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-dark">Send</button>
                            {
                                messageDone && <p>Successfully sent!</p>
                            }
                        </form>


                    </div>


                </div>


            </div>


        </div>
    );
};

export default Home;