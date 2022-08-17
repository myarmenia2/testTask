import { Action } from '../types';

export enum UserActionTypes  {
    LOGIN = 'user/LOGIN',
    LOGIN_SUCCESS = 'user/LOGIN_SUCCESS',
    LOGIN_FAILURE = 'user/LOGIN_FAILURE',

    LOGOUT = 'user/LOGIN',
    LOGOUT_SUCCESS = 'user/LOGOUT_SUCCESS',
    LOGOUT_FAILURE = 'user/LOGOUT_FAILURE',

    REGISTER = 'user/REGISTER',
    REGISTER_SUCCESS = 'user/REGISTER_SUCCESS',
    REGISTER_FAILURE = 'user/REGISTER_FAILURE',
}

export type LoginAction = Action<UserActionTypes.LOGIN, {
    email: string,
    password: string
}>
export type LoginSuccessAction = Action<UserActionTypes.LOGIN_SUCCESS, {
    userInfo: any
}>
export type LoginFailureAction = Action<UserActionTypes.LOGIN_FAILURE, {
    error: any
}>;

export type RegisterAction = Action<UserActionTypes.REGISTER, {
    email: string,
    password: string
}>
export type RegisterSuccessAction = Action<UserActionTypes.REGISTER_SUCCESS, {
    userInfo: any
}>
export type RegisterFailureAction = Action<UserActionTypes.REGISTER_FAILURE,  {
    error: any
}>;

export type LogoutAction = Action<UserActionTypes.LOGOUT>;
export type LogoutSuccessAction = Action<UserActionTypes.LOGOUT_SUCCESS>;
export type LogoutFailureAction = Action<UserActionTypes.LOGOUT_FAILURE>;

export type UserAction =
    | LoginAction
    | LoginSuccessAction
    | LoginFailureAction

    | RegisterAction
    | RegisterSuccessAction
    | RegisterFailureAction

    | LogoutAction
    | LogoutSuccessAction
    | LogoutFailureAction



