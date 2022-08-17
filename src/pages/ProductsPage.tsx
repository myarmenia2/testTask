import React, {useEffect} from "react";

import {Filters, ProductList} from "../components";
import {useDispatch} from "react-redux";
import {userLogOut} from "../redux/actions/loginActions";
import {getProduct} from "../redux/actions/productActions";

export const ProductsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct())
    }, [])

    const handleLogout = () => dispatch(userLogOut())

    return <div>
        <button onClick={handleLogout} >logout</button>
        <Filters/>
        <ProductList/>
    </div>;
};
