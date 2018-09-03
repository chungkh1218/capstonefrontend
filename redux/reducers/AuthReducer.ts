import {
  authAction,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SWITCH_AUTHSTATUS
} from "../actions/AuthAction";

export interface AuthState {
  isAuthenticated: boolean;
}

const initialState = {
  isAuthenticated: false
};

export function authReducer(
  state: AuthState = initialState,
  action: authAction
) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false
      };
    case SWITCH_AUTHSTATUS:
      console.log("Sign up. Your auth status is: " + state.isAuthenticated);

      if (state.isAuthenticated === false) return { isAuthenticated: true };
      else if (state.isAuthenticated === true)
        return { isAuthenticated: false };
    default:
      return state;
  }
}
