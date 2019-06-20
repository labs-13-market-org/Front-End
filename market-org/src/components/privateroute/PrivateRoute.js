import React, { useContext, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import  { AuthContext } from '../authContext/authState';



const PrivateRoute = ({ component: RouteComponent, ...rest}) => {
    const { currentUser } = useContext(AuthContext);
    console.log("currentuser", currentUser)
  
    return (
        currentUser ?
        <Route
            {...rest}
            render={routeProps => 
            currentUser ? (
                <RouteComponent {...routeProps} />
            ) : (
                <Redirect to='/'/>
            )
            }
        /> : null
    )
}

export default PrivateRoute;