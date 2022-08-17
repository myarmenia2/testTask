import {all, takeLatest} from "redux-saga/effects";
import {ProductActionTypes} from "../../actionTypes/productActionTypes";
import productsSaga from "./products";

export default function* productSaga() {
    yield all([
        takeLatest(ProductActionTypes.GET_PRODUCT, productsSaga)
    ])
}