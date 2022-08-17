import React from 'react';

import './Filtres.css';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getProductTypesSelector} from "../../redux/selectors";
import {FilteredProduct} from "../../redux/actions/productActions";

export const Filters = () => {
    const productTypes = useSelector(getProductTypesSelector, shallowEqual);
    const dispatch = useDispatch();

    const handleSetFilter = (product: string) => dispatch(FilteredProduct({product: product}))

    return (
        <div className="filters-container">
            {productTypes.map((product, id) => (
                <div key={product + id}>
                    <input
                        onClick={() => handleSetFilter(product)}
                        type="checkbox"
                        id={product + '-id'}
                    />
                    {product}
                </div>
            ))}
        </div>
    );
};