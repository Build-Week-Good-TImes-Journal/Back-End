import React from 'react';
import { Route } from 'react-router-dom';
import FormikLoginForm from '../Login/Login';

const AppRouting = () => {

    return (
        <div>

            <Route exact path="/" component={FormikLoginForm} />
            
        </div>
    )

}

export default AppRouting;