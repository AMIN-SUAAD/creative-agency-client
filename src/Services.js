import React, { useEffect, useState } from 'react';
import ServiceTop from './ServiceTop';
import service1 from './images/service1.png'
import service2 from './images/service2.png'
import service3 from './images/service3.png'
import PreviousWork from './PreviousWork';
import ClientFeedback from './ClientFeedback';
import { Link } from 'react-router-dom';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {

        fetch('https://polar-coast-42999.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    }, [])
   


    return (
        <div>
            <ServiceTop></ServiceTop>
            <br></br>
            <br></br>
            <br></br>

            <h3 style={{ textAlign: 'center' }}>Provide Awesome Services</h3>
            <br></br>
            <br></br>
            <div className="row">

            {
                services.map(service =>
                    <div className="col-md-4">  
                    
                             <img style={{ width: '50px', height: '50px' }} src={`data:image/png;base64,${service.image.img}`} alt="" ></img>
                             <Link to = {`/userOrder/${service.serviceName}`}> <h6>{service.serviceName}</h6></Link>
                    <small className='text-secondary'>{service.description}</small>


                    </div>
                )
            }
            </div>

            
            <PreviousWork></PreviousWork>
            <ClientFeedback></ClientFeedback>

        </div>
    );
};

export default Services;