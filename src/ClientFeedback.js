import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import customer1 from './images/customer1.png';
import customer2 from './images/customer2.png';
import customer3 from './images/customer3.png';

const ClientFeedback = () => {
    

    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {

        fetch('https://polar-coast-42999.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            setFeedbacks(data);
        })
    }, [])
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <h3 style={{textAlign: 'center'}}>Client's Feedback</h3>

            <br></br>

            <div className="row">

            {
                feedbacks.map(feedback =>
                    <div className="col-md-4">  
                    
                             <img style={{ width: '50px', height: '50px' }} src={`data:image/png;base64,${feedback.image.img}`} alt="" ></img>
                             <h6>{feedback.name, feedback.company}</h6>
                    <small className='text-secondary'>{feedback.review}</small>


                    </div>
                )
            }
            </div>

        </div>
    );
};

export default ClientFeedback;