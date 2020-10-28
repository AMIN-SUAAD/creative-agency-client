import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from './images/carousel1.png';
import carousel2 from './images/carousel2.jpg';
import carousel3 from './images/carousel3.jpg';


const PreviousWork = () => {
    return (
        <div style={{ backgroundColor: '#111430' }} className='mt-5'>
            <div>

                <h3 style={{ textAlign: 'center' }} className='text-white pt-5'>Previous Works</h3>
            </div>
            <Carousel>
                
                <Carousel.Item >
                    <img
                        style={{paddingLeft: '350px', paddingRight: '350px', paddingBottom: '50px', height: '450px'}}
                        
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                    />
                    
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                         style={{paddingLeft: '350px', paddingRight: '350px', paddingBottom: '50px', height: '450px'}}
                        
                        className="d-block w-100"
                        src={carousel2}
                        alt="Third slide"
                    />

               
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        style={{paddingLeft: '370px', paddingRight: '370px', paddingBottom: '50px', height: '450px'}}
                        
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>







        </div>
    );
};

export default PreviousWork;