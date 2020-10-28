import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import PrivateRoute from './PrivateRoute';
import UserOrder from './UserOrder';
import Login from './Login';
import Admin from './Admin';
import LoginAdmin from './LoginAdmin';
import PrivateRouteAdmin from './PrivateRouteAdmin';
import OurTeam from './OurTeam';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const[admin, setAdmin] = useState({});
  return (
    <div>
      <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
              <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path = '/login'>
              <Login></Login>
          </Route>
          <Route path= '/adminLogin'>
                <LoginAdmin></LoginAdmin>


          </Route>
          <PrivateRoute path="/userOrder/:order">
            <UserOrder></UserOrder>

            
          </PrivateRoute>
          <PrivateRouteAdmin path="/admin">

                <Admin></Admin>
          </PrivateRouteAdmin>

          <Route path = "/ourTeam">
              <OurTeam></OurTeam>
          </Route>
          

          
        </Switch>
        </Router>
        </UserContext.Provider>

     

    </div>
  );
}

export default App;
