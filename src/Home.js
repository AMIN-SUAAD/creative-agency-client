import React from 'react';
import HeaderBody from './HeaderBody';
import HeaderFooter from './ServiceTop';
import Navbar from './Navbar';
import Services from './Services';
import Footer from './Footer';

const Home = () => {
    return (
        <div >
            <Navbar></Navbar>
            <HeaderBody></HeaderBody>
            <Services></Services>
            <Footer></Footer>
           
            
        </div>
    );
};

export default Home;