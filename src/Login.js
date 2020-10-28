import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import Button from '@material-ui/core/Button';

import { UserContext } from './App';
import { useHistory, useLocation } from 'react-router-dom';
import logoCreativeAgency from './images/logoCreativeAgency.png'
import GoogleButton from 'react-google-button'


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    console.log(loggedInUser)
    const handleGoogleSignIn = () => {
        firebase.initializeApp(firebaseConfig);

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            
            var {displayName, email} = result.user;
            var user = result.user;
            const signedInUser = {name: displayName, email};
            setLoggedInUser(signedInUser);
            history.replace(from)
            
            
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
          

    }
    return (
        <div >
            <div class = "d-flex justify-content-center">

            <img style = {{ width: '200px', marginTop: '50px'}}src={logoCreativeAgency}></img>
            </div>

            <div class = "d-flex justify-content-center" style = {{marginTop: '20px'}}>
            
            <GoogleButton onClick={handleGoogleSignIn}/>
            </div>


            
        </div>
    );
};

export default Login;