import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './App';

const Admin = () => {
    const [admin, setAdmin] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceList, setServiceList] = useState([]);
    const [serviceListClicked, setServiceListClicked] = useState(false);
    const [addAdminClicked, setAddAdminClicked] = useState(false);
    const [newAdmin, setNewAdmin] = useState({})
    const [addAdminSuccess, setAddAdminSuccess] = useState(false);
    const [addServiceClicked, setAddServiceClicked] = useState(false)
    const [file, setFile] = useState({});
    const [addServiceData, setAddServiceData] = useState({});
    const [addServiceDone, setAddServiceDone] = useState(false);


    function isAdmin() {
        fetch('https://polar-coast-42999.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(loggedInUser)

        })
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setAdmin(true)


                }
            })
    }

    function handleServiceList() {
        setServiceListClicked(true)
        setAddAdminClicked(false)
        setAddServiceClicked(false)


        fetch('https://polar-coast-42999.herokuapp.com/serviceList', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(loggedInUser)

        })
            .then(res => res.json())
            .then(data => {
                setServiceList(data);

            })


    }

    let i = 0;

    function handleAddAdmin() {

        setAddAdminClicked(true);
        setServiceListClicked(false);
        setAddServiceClicked(false);
        setAddServiceDone(false)



    }

    function handleBlur(e) {

        newAdmin[e.target.name] = e.target.value;


    }

    function addAdmin(e) {
        e.preventDefault();


        fetch('https://polar-coast-42999.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newAdmin)

        })
            .then(res => res.json())
            .then(data => {
                setAddAdminSuccess(true)


            })



    }

    function handleAddService() {


        setAddServiceClicked(true)
        setServiceListClicked(false)
        setAddAdminClicked(false)
        setAddAdminSuccess(false)
    }

    function handleSubmit(e) {

        e.preventDefault();

        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', addServiceData.serviceName);
        formData.append('description', addServiceData.serviceDescription);




        fetch('https://polar-coast-42999.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setAddServiceDone(true)
                }
            })
            .catch(error => {
                console.error(error)
            })

    }

    function handleImageChange(e) {

        const newFile = e.target.files[0];
        setFile(newFile);
        console.log(typeof (newFile))


    }

    function handleServiceNameBlur(e) {

        addServiceData[e.target.name] = e.target.value;

    }

    function handleServiceDescriptionBlur(e) {

        addServiceData[e.target.name] = e.target.value;

    }



    return (
        <div>
            {
                isAdmin()
            }
            {

                admin ? (
                    <div className="row">
                        <div className="col-md-3 offset-md-1" >

                            <br></br>
                            <br></br>
                            <Link onClick={handleServiceList} ><strong>Service List</strong></Link>
                            <br></br>
                            <Link onClick={handleAddAdmin} ><strong>Add Admin</strong></Link>
                            <br></br>
                            <Link onClick={handleAddService}><strong>Add Service</strong></Link>


                        </div>

                        <div className="col-md-7" style={{ marginTop: '50px' }} >

                            {
                                serviceListClicked && serviceList.map(service => <div>




                                    <li>{service.name}, {service.order}</li>







                                </div>)


                            }

                            {

                                addAdminClicked && <div>


                                    <form>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input onBlur={handleBlur} name='email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>

                                        </div>


                                        <button onClick={addAdmin} type="submit" class="btn btn-primary">Add</button>
                                        {addAdminSuccess && <p style={{ color: 'green' }}>Successfull! Reload the page to add another admin.</p>}
                                    </form>




                                </div>
                            }

                            {addServiceClicked && <div>



                                <form onSubmit={handleSubmit}>
                                    <div class="form-group">

                                        <input onBlur={handleServiceNameBlur} name='serviceName' type="text" class="form-control" id="exampleFormControlInput1" placeholder="Service Name"></input>
                                    </div>


                                    <div class="form-group">

                                        <textarea onBlur={handleServiceDescriptionBlur} name='serviceDescription' class="form-control" id="exampleFormControlTextarea1" placeholder='Description' rows="3"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label>Upload Image</label>
                                        <input onChange={handleImageChange} type="file" class="form-control" id="exampleFormControlInput1" placeholder="Upload Image"></input>
                                    </div>
                                    <button type="submit" class="btn btn-dark">Send</button>
                                </form>
                                {
                                    addServiceDone && <p style={{ color: 'green' }}>Successfull! Reload the page to add another service.</p>
                                }


                            </div>

                            }




                        </div>



                    </div>

                ) : <p style={{ textAlign: 'center', color: 'red' }}>Only Admin Entry. Go to the home page to order.</p>
            }

        </div>
    );
};

export default Admin;