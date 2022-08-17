import {
    LoginAction,
    LoginFailureAction,
    LoginSuccessAction,
    LogoutAction,
    LogoutFailureAction,
    LogoutSuccessAction,
    RegisterAction,
    RegisterFailureAction,
    RegisterSuccessAction,
    UserActionTypes
} from "../actionTypes/loginActionTypes";

export const userLogin = (data: { email:string, password:string }): LoginAction => ({
    type: UserActionTypes.LOGIN,
    payload: data,
});
export const userLoginSuccess = (userInfo: any): LoginSuccessAction => ({
    type: UserActionTypes.LOGIN_SUCCESS,
    payload: userInfo
});
export const userLoginFailure = (error: any): LoginFailureAction => ({
    type: UserActionTypes.LOGIN_FAILURE,
    payload: error
});

export const userLogOut = (): LogoutAction => ({
    type: UserActionTypes.LOGOUT
});
export const userLogOutSuccess = (): LogoutSuccessAction => ({
    type: UserActionTypes.LOGOUT_SUCCESS

});
export const userLogOutFailure = (): LogoutFailureAction => ({
    type: UserActionTypes.LOGOUT_FAILURE,
});

export const userRegister = (data: {email:string, password:string}): RegisterAction => ({
    type: UserActionTypes.REGISTER,
    payload: data,
});

export const userRegisterSuccess = (userInfo: any): RegisterSuccessAction => ({
    type: UserActionTypes.REGISTER_SUCCESS,
    payload: userInfo
});

export const userRegisterFailure = (error: any): RegisterFailureAction => ({
    type: UserActionTypes.REGISTER_FAILURE,
    payload: error
});