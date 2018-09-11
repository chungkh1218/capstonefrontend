import {
  authAction,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SWITCH_AUTHSTATUS
} from "../actions/AuthAction";
import { IAuthUser } from "../../models/models";

export interface IAuthState {
  user: IAuthUser;
  // isAuthenticated: boolean;
}

const initialState = {
  user: {
    username: "string",
    email: "string",
    user_id: null,
    isAuthenticated: false
  }
  // isAuthenticated: false
};

export function authReducer(
  state: IAuthState = initialState,
  action: authAction
): IAuthState {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        user: {
          ...state.user,
          isAuthenticated: true
        }
      };
    case LOGIN_FAILURE:
      return {
        user: {
          ...state.user,
          isAuthenticated: false
        }
      };
    case LOGOUT:
      return {
        user: {
          ...state.user,
          isAuthenticated: false
        }
      };
    // case SWITCH_AUTHSTATUS:
    //   console.log("Sign up. Your auth status is: " + state.isAuthenticated);

    //   if (state.isAuthenticated === false) return { isAuthenticated: true };
    //   else if (state.isAuthenticated === true)
    //     return { isAuthenticated: false };
    default:
      return state;
  }
}
