import {RootState} from "../redusers";

export const authStateSelector = (state: RootState): boolean => state.login.isAuthenticated