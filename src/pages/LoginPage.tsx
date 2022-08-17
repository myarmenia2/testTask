import React from "react";
import {LogIn, Registration} from "../components";
import {useLocation} from "react-router-dom";
import {routes} from "../constants/routes";

export const LoginPage = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname === routes.login ?  <LogIn/> : <Registration/>}
        </>
    );
};
