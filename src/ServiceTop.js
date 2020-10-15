import React from 'react';
import uber from './images/uber.png'
import airbnb from './images/airbnb.png'
import google from './images/google.png'
import slack from './images/slack.png'
import netflix from './images/netflix.png'

const ServiceTop = () => {
    return (
        <div className="row">
            
            <div style={{marginLeft: '180px'}} className="col-md-2"> <img style={{ width: '60px'}} src={uber} alt="" ></img> </div>
            <div className="col-md-2"> <img  style={{ width: '60px'}}  src={airbnb} alt="" ></img> </div>
            <div className="col-md-2"> <img  style={{ width: '60px'}}  src={google} alt="" ></img> </div>
            <div className="col-md-2 "> <img  style={{ width: '60px'}}  src={netflix} alt="" ></img> </div>
            <div className="col-md-2 "> <img  style={{ width: '60px'}}  src={slack} alt="" ></img> </div>
            
            
             

            
        </div>
    );
};

export default ServiceTop;