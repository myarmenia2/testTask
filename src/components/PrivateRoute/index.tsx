import React from 'react';
import {Navigate} from 'react-router-dom';
import {routes} from '../../constants/routes';
import {shallowEqual, useSelector} from "react-redux";
import {authStateSelector} from "../../redux/selectors";

export const PrivateRoute: React.FC<{ children: JSX.Element }> = ({children}) => {
    const isAuthenticated = useSelector(authStateSelector, shallowEqual)

    if (!isAuthenticated) {
        return <Navigate to={routes.login} replace />
    }

    return children;
}