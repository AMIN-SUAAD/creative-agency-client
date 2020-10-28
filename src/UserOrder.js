import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './App';

const UserOrder = () => {
    const { order } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [reviewClicked, setReviewClicked] = useState(false);
    const [newOrderClicked, setNewOrderClicked] = useState(false);
    const [previousOrderClicked, setPreviousOrderClicked] = useState(false);
    const [orders, setOrders] = useState([]);
    const [reviewInfo, setReviewInfo] = useState({});
    const [file, setFile] = useState({});
    const [reviewDone, setReviewDone] = useState(false);
    const [orderPlaceDone, setOrderPlaceDone] = useState(false);

    function showReview() {

        setReviewClicked(true);
        setNewOrderClicked(false);
        setPreviousOrderClicked(false);
        setOrderPlaceDone(false)

    }
    function showNewOrder() {
        setNewOrderClicked(true);
        setReviewClicked(false);
        setPreviousOrderClicked(false);
        setReviewDone(false)

    }
    function showPreviousOrder() {
        setPreviousOrderClicked(true);
        setNewOrderClicked(false);
        setReviewClicked(false);
        fetch('https://polar-coast-42999.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(loggedInUser)

        })
            .then(res => res.json())
            .then(data => {
                setOrders(data)

            })
    }

    function handleBlur(e) {

        loggedInUser[e.target.name] = e.target.value;
        console.log(loggedInUser)


    }

    function handleNewOrder() {


        loggedInUser.order = order;
        fetch('https://polar-coast-42999.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(loggedInUser)

        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setOrderPlaceDone(true)
                }
            })
    }


    function handleReviewBlur(e) {
        reviewInfo[e.target.name] = e.target.value;

    }

    function handleReviewSubmit(e) {

        e.preventDefault();

        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', reviewInfo.name);
        formData.append('company', reviewInfo.company);
        formData.append('review', reviewInfo.review);
        


      
        fetch('https://polar-coast-42999.herokuapp.com/addReview', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          if(data){
              setReviewDone(true)
          }
        })
        .catch(error => {
          console.error(error)
        })

    }
    function handleFileChange(e){
        const newFile = e.target.files[0];
        setFile(newFile);

    }

    return (
        <div className='row'>
            <div className='col-md-3 offset-md-1'>
                <br></br>
                <br></br>
                <Link onClick={showNewOrder}><strong>Place New Order</strong></Link>
                <br></br>
                <Link onClick={showPreviousOrder}><strong>Your Previous Orders</strong></Link>
                <br></br>
                <Link onClick={showReview}><strong>Give Review</strong></Link>

            </div>





            <div className='col-md-7' style={{ marginTop: '50px' }}>

                {reviewClicked && (
                    <form onSubmit={handleReviewSubmit}>
                        <div class="form-group">

                            <input onBlur={handleReviewBlur} name='name' type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"></input>
                        </div>
                        <div class="form-group">

                            <input onBlur={handleReviewBlur} name='company' type="text" class="form-control" id="exampleFormControlInput1" placeholder="Company's Name and Designation"></input>
                        </div>
                        <div class="form-group">
                            <label>Your Image</label>
                            <input onChange={handleFileChange} type="file" class="form-control" id="exampleFormControlInput1" placeholder="Image"></input>
                        </div>

                        <div class="form-group">

                            <textarea onBlur={handleReviewBlur} name='review' class="form-control" id="exampleFormControlTextarea1" placeholder='Please, write your valuable comment' rows="3"></textarea>
                        </div>
                        <button  type="submit" class="btn btn-dark">Send</button>
                        {
                            reviewDone && <p style= {{color: 'green'}}>Successfull!</p>
                        }
                    </form>)
                }




















                {newOrderClicked && (
                    <form>

                        <div class="form-group">

                            <input name='email' type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email"></input>
                        </div>
                        <div class="form-group">

                            <input name='name' type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"></input>
                        </div>

                        <div class="form-group">

                            <textarea onBlur={handleBlur} name="details" class="form-control" id="exampleFormControlTextarea1" placeholder='Project Details' rows="3"></textarea>
                        </div>
                        <button onClick={handleNewOrder} type="button" class="btn btn-dark">Send</button>
                        {
                            orderPlaceDone && <p style={{ color: 'green' }}>Successfull!Reload the page to add another order.</p>
                        }
                    </form>
                    
                    
                    )
                   
                }

                {

                    previousOrderClicked && orders.map(order => <div>




                        <li>{order.name}, {order.order}</li>







                    </div>)



                }





            </div>


        </div>
    );
};

export default UserOrder;