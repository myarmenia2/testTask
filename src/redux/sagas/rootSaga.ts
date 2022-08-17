import {all, call} from "redux-saga/effects";

import userSaga from "./user";
import productSaga from "./products";

export function* rootSaga() {
    yield all([
        call(productSaga),
        call(userSaga),
    ]);
}