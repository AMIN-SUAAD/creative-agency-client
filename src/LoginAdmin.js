import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import Button from '@material-ui/core/Button';

import { UserContext } from './App';
import { useHistory, useLocation } from 'react-router-dom';


const LoginAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    const handleGoogleSignIn = () => {
        firebase.initializeApp(firebaseConfig);

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var {displayName, email} = result.user;
            var user = result.user;
            const signedInUser = {name: displayName, email: email};
            setLoggedInUser(signedInUser);
            console.log(loggedInUser)
            history.replace(from)
            
        /*fetch('http://localhost:5000/isAdmin', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(admin)

        })
        .then(res => res.json())
        .then(data => {
            if(data.length){
                history.replace(from)
                
            }
        })*/
           
            
            
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
        <div style={{textAlign: 'center'}}>
            <br/>
            <br/>
            
      
            <br/>
            
            <Button variant="contained" color="primary" onClick={handleGoogleSignIn}>Sign in with google</Button>
        </div>
    );
};

export default LoginAdmin;