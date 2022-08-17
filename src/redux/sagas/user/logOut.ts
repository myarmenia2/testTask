import {call, put} from "redux-saga/effects";
import {firebaseSignOut} from "../../../firebase/firebase";
import {userLogOutSuccess, userLogOutFailure} from "../../actions/loginActions";

export default function* logOutSaga(): any {
    try {
        yield call(() => firebaseSignOut());
        yield put(userLogOutSuccess())
    } catch (error) {
        yield put(userLogOutFailure());
    }
}
