import {call, put} from "redux-saga/effects";
import {firebaseAuth} from "../../../firebase/firebase";
import {userLoginFailure, userLoginSuccess} from "../../actions/loginActions";
import {LoginAction} from "../../actionTypes/loginActionTypes";

export default function* loginSaga({payload}:LoginAction): any {
    try {
        const response = yield call(() => firebaseAuth(payload!.email, payload!.password));
        yield put(userLoginSuccess(response))
    } catch (error) {
        yield put(userLoginFailure(error));
    }
}
