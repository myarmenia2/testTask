import {ProductItemI} from "../../models/products";
import {
    FilteredProductAction,
    GetProductAction,
    GetProductFailureAction,
    GetProductSuccessAction,
    ProductActionTypes
} from "../actionTypes/productActionTypes";

export const getProduct = (): GetProductAction => ({
    type: ProductActionTypes.GET_PRODUCT,
});

export const getProductSuccess = (data: Array<ProductItemI>): GetProductSuccessAction => ({
    type: ProductActionTypes.GET_PRODUCT_SUCCESS,
    payload: data
});

export const getProductFailure = ():GetProductFailureAction => ({
    type: ProductActionTypes.GET_PRODUCT_FAILURE,
});

export const FilteredProduct = (data:{product: string}):FilteredProductAction => ({
    type: ProductActionTypes.FILTERED_PRODUCT,
    payload: data
});


