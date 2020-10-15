import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from './App';

const PrivateRouteAdmin = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/adminLogin",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRouteAdmin;