import { UserAction, UserActionTypes} from "../actionTypes/loginActionTypes";

interface LoginState {
  loading: boolean,
  error: any,
  userInfo: any | null,
  isAuthenticated: boolean
}

const initialState: LoginState = {
  userInfo: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

export default function loginReducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return {
        ...state,
        loading: true,
        userInfo: null,
        isAuthenticated: false
      };

    case UserActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        isAuthenticated: true
      };
    case UserActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload
      };

    case UserActionTypes.LOGOUT:
      return {
        ...state,
        loading: true
      };
    case UserActionTypes.LOGOUT_SUCCESS :
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        userInfo: null
      };

    case UserActionTypes.LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload
      };

    case UserActionTypes.REGISTER:
      return {
        ...state,
        loading: true,
        userInfo: null,
        isAuthenticated: false
      };

    case UserActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        userInfo: action.payload
      };

    case UserActionTypes.REGISTER_FAILURE :
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload
      };

    default:
      return state;
  }
}