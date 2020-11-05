import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../pages/utils/in';


 const PrivateRoute = ( {component: Component, ...rest}) => {
return(
    <Route {...rest} render={props => (
        isLogin() ? 
        <Component {...props} />
        :
        <Redirect to="/adminLogin" />
    )} />
);

}


export default PrivateRoute;