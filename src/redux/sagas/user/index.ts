import {all, takeLatest} from "redux-saga/effects";
import logOutSaga from "./logOut";
import registrationSaga from "./registration";
import loginSaga from "./logIn";
import {UserActionTypes} from "../../actionTypes/loginActionTypes";

export default function* userSaga() {
    yield all([
            takeLatest(UserActionTypes.LOGIN, loginSaga),
            takeLatest(UserActionTypes.LOGOUT, logOutSaga),
            takeLatest(UserActionTypes.REGISTER, registrationSaga)
        ]
    )
}