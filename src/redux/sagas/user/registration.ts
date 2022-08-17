import {call, put} from "redux-saga/effects";
import {firebaseCreateUser} from "../../../firebase/firebase";
import {
    userRegisterFailure,
    userRegisterSuccess
} from "../../actions/loginActions";
import {RegisterAction} from "../../actionTypes/loginActionTypes";

export default function* registrationSaga({payload}: RegisterAction): any {
    try {
        const response = yield call(() => firebaseCreateUser(payload!.email, payload!.password));
        yield put(userRegisterSuccess(response))
    } catch (error) {
        yield put(userRegisterFailure(error));
    }
}