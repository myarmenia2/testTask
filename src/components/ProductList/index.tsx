import React from 'react';
import {ProductItem} from '../index'
import {shallowEqual, useSelector} from "react-redux";
import {getFilteredProductsSelector, getProductSelector} from "../../redux/selectors";
import {ProductItemI} from "../../models/products";

export const ProductList = () => {
  const products = useSelector(getProductSelector, shallowEqual)
  const filteredProducts = useSelector(getFilteredProductsSelector, shallowEqual);

  return (
    <>
      {
        filteredProducts.length ?
          filteredProducts.map((item: ProductItemI) => <ProductItem key={item.uid} {...item}/>) :
          products.map((item: ProductItemI) => <ProductItem key={item.uid} {...item}/>)
      }
    </>
  );
};